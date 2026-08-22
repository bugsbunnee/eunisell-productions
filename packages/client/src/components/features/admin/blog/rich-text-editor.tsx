import { useRef, useState } from 'react';
import { useEditor, EditorContent, type Editor } from '@tiptap/react';
import {
  Bold,
  Heading2,
  Heading3,
  Image as ImageIcon,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Loader2,
  Minus,
  Quote,
  Redo2,
  Strikethrough,
  Underline as UnderlineIcon,
  Undo2,
} from 'lucide-react';
import { toast } from 'sonner';

import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';

import blogService from '../../../../services/blog.service';
import { BLOG_IMAGE_MAX_BYTES } from './blog-form.constants';

import { getErrorMessage, formatFileSize } from '../../../../lib/utils';
import { cn } from '../../../../lib/utils';
import { Button } from '../../../ui/button';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

interface ToolbarButtonProps {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  label: string;
  children: React.ReactNode;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ onClick, active, disabled, label, children }) => (
  <Button
    type="button"
    variant="ghost"
    size="icon-sm"
    aria-label={label}
    aria-pressed={active}
    disabled={disabled}
    onClick={onClick}
    className={cn(active && 'bg-muted text-foreground')}
  >
    {children}
  </Button>
);

// toggleBlockquote() wraps the whole textblock(s) the selection touches, so quoting a
// phrase inside a longer paragraph would swallow the entire paragraph. Split the selection
// out into its own paragraph first so the quote applies only to the highlighted text.
const applyBlockquote = (editor: Editor) => {
  const { selection } = editor.state;
  const { $from, $to, from, to, empty } = selection;

  if (empty || editor.isActive('blockquote') || $from.parent !== $to.parent || !$from.parent.isTextblock) {
    editor.chain().focus().toggleBlockquote().run();
    return;
  }

  const blockStart = $from.start();
  const blockEnd = $from.end();
  const splitAtTo = to < blockEnd;
  const splitAtFrom = from > blockStart;

  const refPoint = Math.min(from + 1, to) + (splitAtFrom ? 2 : 0);

  const chain = editor.chain().focus();
  if (splitAtTo) chain.setTextSelection(to).splitBlock();
  if (splitAtFrom) chain.setTextSelection(from).splitBlock();
  chain.run();

  editor.chain().focus().setTextSelection(refPoint).selectParentNode().toggleBlockquote().run();
};

interface ToolbarProps {
  editor: Editor;
  onPickImage: () => void;
  isUploadingImage: boolean;
}

const Toolbar: React.FC<ToolbarProps> = ({ editor, onPickImage, isUploadingImage }) => {
  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('Link URL', previousUrl ?? 'https://');

    if (url === null) {
      return;
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="flex flex-wrap items-center gap-0.5 rounded-t-xl border border-b-0 border-input bg-muted/30 p-1.5">
      <ToolbarButton label="Bold" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}>
        <Bold className="size-4" />
      </ToolbarButton>
      <ToolbarButton label="Italic" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}>
        <Italic className="size-4" />
      </ToolbarButton>
      <ToolbarButton label="Underline" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <UnderlineIcon className="size-4" />
      </ToolbarButton>
      <ToolbarButton label="Strikethrough" active={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}>
        <Strikethrough className="size-4" />
      </ToolbarButton>
      <div className="mx-1 h-5 w-px bg-border" />
      <ToolbarButton label="Heading 2" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
        <Heading2 className="size-4" />
      </ToolbarButton>
      <ToolbarButton label="Heading 3" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
        <Heading3 className="size-4" />
      </ToolbarButton>
      <ToolbarButton label="Bullet list" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <List className="size-4" />
      </ToolbarButton>
      <ToolbarButton label="Numbered list" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <ListOrdered className="size-4" />
      </ToolbarButton>
      <ToolbarButton label="Quote" active={editor.isActive('blockquote')} onClick={() => applyBlockquote(editor)}>
        <Quote className="size-4" />
      </ToolbarButton>
      <ToolbarButton label="Horizontal rule" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <Minus className="size-4" />
      </ToolbarButton>
      <div className="mx-1 h-5 w-px bg-border" />
      <ToolbarButton label="Link" active={editor.isActive('link')} onClick={setLink}>
        <LinkIcon className="size-4" />
      </ToolbarButton>
      <ToolbarButton label="Insert image" onClick={onPickImage} disabled={isUploadingImage}>
        {isUploadingImage ? <Loader2 className="size-4 animate-spin" /> : <ImageIcon className="size-4" />}
      </ToolbarButton>
      <div className="mx-1 h-5 w-px bg-border" />
      <ToolbarButton label="Undo" disabled={!editor.can().undo()} onClick={() => editor.chain().focus().undo().run()}>
        <Undo2 className="size-4" />
      </ToolbarButton>
      <ToolbarButton label="Redo" disabled={!editor.can().redo()} onClick={() => editor.chain().focus().redo().run()}>
        <Redo2 className="size-4" />
      </ToolbarButton>
    </div>
  );
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, placeholder }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const insertImageFile = async (file: File, editor: Editor, position?: number) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Choose an image file (PNG, JPG, or WebP).');
      return;
    }

    if (file.size > BLOG_IMAGE_MAX_BYTES) {
      toast.error(`Max ${formatFileSize(BLOG_IMAGE_MAX_BYTES)}. This file is ${formatFileSize(file.size)}.`);
      return;
    }

    setIsUploadingImage(true);

    try {
      const url = await blogService.uploadImage(file);
      const chain = editor.chain().focus();

      if (position != null) chain.insertContentAt(position, { type: 'image', attrs: { src: url } });
      else chain.setImage({ src: url });

      chain.run();
    } catch (error) {
      toast.error(getErrorMessage(error) || 'Could not upload the image');
    } finally {
      setIsUploadingImage(false);
    }
  };

  const editor = useEditor({
    extensions: [StarterKit, Link.configure({ openOnClick: false, autolink: true }), Image, Placeholder.configure({ placeholder: placeholder ?? 'Write the full article…' })],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: 'blog-article-content min-h-72 max-w-none px-4 py-3 text-sm outline-none',
      },
      handleDrop: (view, event) => {
        const file = event.dataTransfer?.files?.[0];
        if (!file || !editor) return false;

        event.preventDefault();

        const position = view.posAtCoords({ left: event.clientX, top: event.clientY })?.pos;
        void insertImageFile(file, editor, position);

        return true;
      },
      handlePaste: (_view, event) => {
        const file = Array.from(event.clipboardData?.files ?? []).find((f) => f.type.startsWith('image/'));
        if (!file || !editor) return false;

        event.preventDefault();
        void insertImageFile(file, editor);

        return true;
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="rounded-xl border border-input">
      <Toolbar editor={editor} isUploadingImage={isUploadingImage} onPickImage={() => fileInputRef.current?.click()} />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0];
          e.target.value = '';
          if (file) void insertImageFile(file, editor);
        }}
      />

      <EditorContent editor={editor} className="rounded-b-xl bg-transparent" />
    </div>
  );
};

export default RichTextEditor;
