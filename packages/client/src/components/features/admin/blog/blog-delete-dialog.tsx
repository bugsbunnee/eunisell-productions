import type { BlogPost } from '../../../../services/blog.service';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../../../ui/alert-dialog';

interface BlogDeleteDialogProps {
  post: BlogPost | null;
  isPending: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

const BlogDeleteDialog: React.FC<BlogDeleteDialogProps> = ({ post, isPending, onOpenChange, onConfirm }) => {
  return (
    <AlertDialog open={!!post} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this post?</AlertDialogTitle>
          <AlertDialogDescription>“{post?.title}” will be permanently removed, including its cover image. This can&apos;t be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline" size="default">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction variant="ghost" size="default" disabled={isPending} onClick={onConfirm} className="bg-destructive text-white hover:bg-destructive/90">
            {isPending ? 'Deleting…' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BlogDeleteDialog;
