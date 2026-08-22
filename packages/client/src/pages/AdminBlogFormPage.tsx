import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowLeft, ChevronRight, FileText, ImagePlus } from 'lucide-react';

import StatusStamp from '../components/features/admin/blog/status-stamp';
import BlogFormSteps, { type BlogFormStep } from '../components/features/admin/blog/blog-form-steps';
import BlogFormSkeleton from '../components/features/admin/blog/blog-form-skeleton';
import RichTextEditor from '../components/features/admin/blog/rich-text-editor';
import blogService, { type BlogStatus } from '../services/blog.service';

import { adminPaths } from '../lib/data';
import { slugify, getErrorMessage, cn, formatFileSize } from '../lib/utils';
import { BLOG_FORM_DEFAULT_VALUES, blogFormSchema, CATEGORY_OPTIONS, BLOG_IMAGE_MAX_BYTES, type BlogFormValues } from '../components/features/admin/blog/blog-form.constants';

import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Switch } from '../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const FORM_STEPS: BlogFormStep[] = [{ id: 'details', label: 'Post Details', icon: FileText }];

const AdminBlogFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const isEditing = !!id;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [slugTouched, setSlugTouched] = useState(false);

  const { data: existingPost, isLoading: isLoadingPost } = useQuery({
    queryKey: ['blog-post', id],
    queryFn: () => blogService.get(id as string),
    enabled: isEditing,
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BlogFormValues>({ resolver: zodResolver(blogFormSchema), defaultValues: BLOG_FORM_DEFAULT_VALUES });

  useEffect(() => {
    if (!existingPost) return;

    reset({
      title: existingPost.title,
      slug: existingPost.slug,
      category: existingPost.category,
      excerpt: existingPost.excerpt,
      content: existingPost.content,
      readTime: existingPost.readTime,
      featured: existingPost.featured,
      status: existingPost.status,
    });
    setPreviewUrl(existingPost.coverImage);
    setSlugTouched(true);
  }, [existingPost, reset]);

  useEffect(() => {
    return () => {
      if (previewUrl?.startsWith('blob:')) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const title = watch('title');

  useEffect(() => {
    if (!slugTouched) setValue('slug', slugify(title || ''));
  }, [title, slugTouched, setValue]);

  const handleFile = (file: File | undefined) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setImageError('Choose an image file (PNG, JPG, or WebP).');
      return;
    }

    if (file.size > BLOG_IMAGE_MAX_BYTES) {
      setImageError(`Max ${formatFileSize(BLOG_IMAGE_MAX_BYTES)}. This file is ${formatFileSize(file.size)}.`);
      return;
    }

    setImageError(null);
    setCoverFile(file);
    setPreviewUrl((current) => {
      if (current?.startsWith('blob:')) URL.revokeObjectURL(current);
      return URL.createObjectURL(file);
    });
  };

  const saveMutation = useMutation({
    mutationFn: (payload: { values: BlogFormValues; status: BlogStatus }) => {
      const values = { ...payload.values, status: payload.status };
      return isEditing ? blogService.update(id as string, values, coverFile) : blogService.create(values, coverFile as File);
    },
    onSuccess: (post) => {
      toast.success(isEditing ? 'Post updated' : post.status === 'PUBLISHED' ? 'Post published' : 'Draft saved');
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      queryClient.invalidateQueries({ queryKey: ['blog-stats'] });
      navigate(adminPaths.blog);
    },
    onError: (error) => toast.error(getErrorMessage(error) || 'Could not save the post'),
  });

  const onSave = (status: BlogStatus) =>
    handleSubmit((values) => {
      if (!isEditing && !coverFile) {
        setImageError('A cover image is required.');
        return;
      }

      saveMutation.mutate({ values, status });
    });

  if (isEditing && isLoadingPost) {
    return <BlogFormSkeleton />;
  }

  return (
    <div className="min-h-full bg-surface-muted px-10 py-9">
      <div className="flex flex-col gap-6 max-w-300">
        <div className="flex flex-col gap-3">
          <Link to={adminPaths.blog} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground w-fit transition-colors">
            <ArrowLeft className="size-3.5" /> Blog Posts
          </Link>

          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold text-foreground">{isEditing ? 'Edit Post' : 'New Post'}</h1>
            {existingPost && <StatusStamp status={existingPost.status} />}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 items-start">
          <BlogFormSteps steps={FORM_STEPS} currentStepId="details" />

          <div className="flex flex-col gap-10 rounded-2xl bg-primary-foreground p-8 shadow-[0_1px_2px_rgba(16,24,40,0.03),0_8px_24px_-16px_rgba(16,24,40,0.1)]">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-foreground">Post details</p>
              <p className="text-sm text-muted-foreground">{isEditing ? 'Update the article details below.' : 'Write and publish a new article for the blog.'}</p>
            </div>

            <form className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 items-start">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <Label>Cover image</Label>

                  <label
                    htmlFor="coverImage"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      handleFile(e.dataTransfer.files?.[0]);
                    }}
                    className={cn(
                      'group relative flex aspect-4/3 cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-dashed bg-muted/40 transition-colors',
                      imageError ? 'border-destructive' : 'border-border hover:border-secondary/50'
                    )}
                  >
                    {previewUrl ? (
                      <>
                        <img src={previewUrl} alt="Cover preview" className="absolute inset-0 size-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/50 group-hover:opacity-100">
                          <span className="text-sm font-medium text-white">Replace image</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <ImagePlus className="size-6 text-muted-foreground" strokeWidth={1.5} />
                        <p className="px-6 text-center text-sm text-muted-foreground">Drop an image, or click to browse</p>
                        <p className="text-xs text-muted-foreground">Max {formatFileSize(BLOG_IMAGE_MAX_BYTES)}</p>
                      </>
                    )}
                    <input id="coverImage" type="file" accept="image/*" className="sr-only" onChange={(e) => handleFile(e.target.files?.[0])} />
                  </label>
                  {imageError && <p className="text-xs text-destructive">{imageError}</p>}
                </div>

                <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3.5">
                  <div className="flex flex-col gap-0.5">
                    <Label htmlFor="featured">Featured</Label>
                    <p className="text-xs text-muted-foreground">Show as the highlighted post</p>
                  </div>
                  <Controller control={control} name="featured" render={({ field }) => <Switch id="featured" checked={field.value} onCheckedChange={field.onChange} />} />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Why Accurate Well Testing Matters" aria-invalid={!!errors.title} className="h-10 rounded-xl" {...register('title')} />
                  {errors.title && <p className="text-xs text-destructive">{errors.title.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="slug">Slug</Label>
                  <div className="flex h-10 items-center gap-1 rounded-xl border border-input bg-transparent pl-2.5 has-focus-visible:border-ring has-focus-visible:ring-3 has-focus-visible:ring-ring/50">
                    <span className="font-mono text-xs text-muted-foreground shrink-0">/blog/</span>
                    <Input
                      id="slug"
                      aria-invalid={!!errors.slug}
                      className="border-0 shadow-none px-0 font-mono focus-visible:ring-0"
                      {...register('slug', {
                        onChange: () => setSlugTouched(true),
                      })}
                    />
                  </div>
                  {errors.slug && <p className="text-xs text-destructive">{errors.slug.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="category">Category</Label>
                    <Controller
                      control={control}
                      name="category"
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger id="category" aria-invalid={!!errors.category} className="h-10 w-full rounded-xl">
                            <SelectValue placeholder="Choose a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {CATEGORY_OPTIONS.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.category && <p className="text-xs text-destructive">{errors.category.message}</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <Label htmlFor="readTime">Read time</Label>
                    <Input id="readTime" placeholder="5 min read" aria-invalid={!!errors.readTime} className="h-10 rounded-xl" {...register('readTime')} />
                    {errors.readTime && <p className="text-xs text-destructive">{errors.readTime.message}</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <span className="font-mono text-[11px] text-muted-foreground">{(watch('excerpt') || '').length}/300</span>
                  </div>
                  <Textarea
                    id="excerpt"
                    rows={2}
                    placeholder="A short summary shown on the blog index…"
                    aria-invalid={!!errors.excerpt}
                    className="rounded-xl"
                    {...register('excerpt')}
                  />
                  {errors.excerpt && <p className="text-xs text-destructive">{errors.excerpt.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="content">Content</Label>
                  <Controller control={control} name="content" render={({ field }) => <RichTextEditor value={field.value} onChange={field.onChange} />} />
                  {errors.content && <p className="text-xs text-destructive">{errors.content.message}</p>}
                </div>
              </div>
            </form>

            <div className="flex items-center justify-end gap-3">
              <Button type="button" variant="outline" className="h-10 rounded-xl" disabled={saveMutation.isPending} onClick={onSave('DRAFT')}>
                {saveMutation.isPending ? 'Saving…' : 'Save as draft'}
              </Button>
              <Button type="button" variant="secondary" className="h-10 rounded-xl" disabled={saveMutation.isPending} onClick={onSave('PUBLISHED')}>
                {saveMutation.isPending ? 'Saving…' : 'Publish'}
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogFormPage;
