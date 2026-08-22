import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowLeft, ChevronRight, File, FileText, ImagePlus, UploadCloud } from 'lucide-react';

import StatusStamp from '../components/features/admin/blog/status-stamp';
import BlogFormSteps, { type BlogFormStep } from '../components/features/admin/blog/blog-form-steps';
import KnowledgeFormSkeleton from '../components/features/admin/knowledge-centre/knowledge-form-skeleton';
import knowledgeResourceService, { type KnowledgeResourceStatus } from '../services/knowledge-resource.service';

import { adminPaths } from '../lib/data';
import { getErrorMessage, cn, formatFileSize } from '../lib/utils';
import {
  KNOWLEDGE_RESOURCE_FORM_DEFAULT_VALUES,
  KNOWLEDGE_RESOURCE_FILE_MAX_BYTES,
  knowledgeResourceFormSchema,
  CATEGORY_OPTIONS,
  type KnowledgeResourceFormValues,
} from '../components/features/admin/knowledge-centre/knowledge-form.constants';

import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Switch } from '../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const FORM_STEPS: BlogFormStep[] = [{ id: 'details', label: 'Resource Details', icon: FileText }];

const AdminKnowledgeCentreFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [coverError, setCoverError] = useState<string | null>(null);

  const [brochureFile, setBrochureFile] = useState<File | null>(null);
  const [existingFileLabel, setExistingFileLabel] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const { data: existingResource, isLoading: isLoadingResource } = useQuery({
    queryKey: ['knowledge-resource', id],
    queryFn: () => knowledgeResourceService.get(id as string),
    enabled: isEditing,
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<KnowledgeResourceFormValues>({ resolver: zodResolver(knowledgeResourceFormSchema), defaultValues: KNOWLEDGE_RESOURCE_FORM_DEFAULT_VALUES });

  useEffect(() => {
    if (!existingResource) return;

    reset({
      title: existingResource.title,
      category: existingResource.category,
      description: existingResource.description,
      featured: existingResource.featured,
      status: existingResource.status,
    });
    setPreviewUrl(existingResource.coverImage);
    setExistingFileLabel(`${existingResource.fileType} · ${formatFileSize(existingResource.fileSizeBytes)}`);
  }, [existingResource, reset]);

  useEffect(() => {
    return () => {
      if (previewUrl?.startsWith('blob:')) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleCoverFile = (file: File | undefined) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setCoverError('Choose an image file (PNG, JPG, or WebP).');
      return;
    }

    setCoverError(null);
    setCoverFile(file);
    setPreviewUrl((current) => {
      if (current?.startsWith('blob:')) URL.revokeObjectURL(current);
      return URL.createObjectURL(file);
    });
  };

  const handleBrochureFile = (file: File | undefined) => {
    if (!file) return;

    if (file.size > KNOWLEDGE_RESOURCE_FILE_MAX_BYTES) {
      setFileError(`File must be under ${formatFileSize(KNOWLEDGE_RESOURCE_FILE_MAX_BYTES)}.`);
      return;
    }

    setFileError(null);
    setBrochureFile(file);
  };

  const saveMutation = useMutation({
    mutationFn: (payload: { values: KnowledgeResourceFormValues; status: KnowledgeResourceStatus }) => {
      const values = { ...payload.values, status: payload.status };
      return isEditing
        ? knowledgeResourceService.update(id as string, values, coverFile, brochureFile)
        : knowledgeResourceService.create(values, coverFile as File, brochureFile as File);
    },
    onSuccess: (resource) => {
      toast.success(isEditing ? 'Resource updated' : resource.status === 'PUBLISHED' ? 'Resource published' : 'Draft saved');
      queryClient.invalidateQueries({ queryKey: ['knowledge-resources'] });
      queryClient.invalidateQueries({ queryKey: ['knowledge-resource-stats'] });
      navigate(adminPaths.knowledgeCentre);
    },
    onError: (error) => toast.error(getErrorMessage(error) || 'Could not save the resource'),
  });

  const onSave = (status: KnowledgeResourceStatus) =>
    handleSubmit((values) => {
      let hasError = false;

      if (!isEditing && !coverFile) {
        setCoverError('A cover image is required.');
        hasError = true;
      }

      if (!isEditing && !brochureFile) {
        setFileError('A resource file is required.');
        hasError = true;
      }

      if (hasError) return;

      saveMutation.mutate({ values, status });
    });

  if (isEditing && isLoadingResource) {
    return <KnowledgeFormSkeleton />;
  }

  return (
    <div className="min-h-full bg-surface-muted px-10 py-9">
      <div className="flex flex-col gap-6 max-w-300">
        <div className="flex flex-col gap-3">
          <Link to={adminPaths.knowledgeCentre} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground w-fit transition-colors">
            <ArrowLeft className="size-3.5" /> Knowledge Centre
          </Link>

          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold text-foreground">{isEditing ? 'Edit Resource' : 'New Resource'}</h1>
            {existingResource && <StatusStamp status={existingResource.status} />}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 items-start">
          <BlogFormSteps steps={FORM_STEPS} currentStepId="details" />

          <div className="flex flex-col gap-10 rounded-2xl bg-primary-foreground p-8 shadow-[0_1px_2px_rgba(16,24,40,0.03),0_8px_24px_-16px_rgba(16,24,40,0.1)]">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-foreground">Resource details</p>
              <p className="text-sm text-muted-foreground">{isEditing ? 'Update the resource details below.' : 'Add a new downloadable resource to the Knowledge Centre.'}</p>
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
                      handleCoverFile(e.dataTransfer.files?.[0]);
                    }}
                    className={cn(
                      'group relative flex aspect-4/3 cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-dashed bg-muted/40 transition-colors',
                      coverError ? 'border-destructive' : 'border-border hover:border-secondary/50'
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
                      </>
                    )}
                    <input id="coverImage" type="file" accept="image/*" className="sr-only" onChange={(e) => handleCoverFile(e.target.files?.[0])} />
                  </label>
                  {coverError && <p className="text-xs text-destructive">{coverError}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <Label>Resource file</Label>

                  <label
                    htmlFor="resourceFile"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      handleBrochureFile(e.dataTransfer.files?.[0]);
                    }}
                    className={cn(
                      'group relative flex min-h-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed bg-muted/40 px-4 py-5 text-center transition-colors',
                      fileError ? 'border-destructive' : 'border-border hover:border-secondary/50'
                    )}
                  >
                    {brochureFile || existingFileLabel ? (
                      <>
                        <File className="size-6 text-secondary" strokeWidth={1.5} />
                        <p className="line-clamp-1 max-w-full px-4 text-sm font-medium text-foreground">{brochureFile?.name ?? 'Current file'}</p>
                        <p className="text-xs text-muted-foreground">{brochureFile ? formatFileSize(brochureFile.size) : existingFileLabel}</p>
                        <span className="text-xs font-medium text-secondary opacity-0 transition-opacity group-hover:opacity-100">Click or drop to replace</span>
                      </>
                    ) : (
                      <>
                        <UploadCloud className="size-6 text-muted-foreground" strokeWidth={1.5} />
                        <p className="px-6 text-sm text-muted-foreground">Drop a PDF or document, or click to browse</p>
                        <p className="text-xs text-muted-foreground">Max {formatFileSize(KNOWLEDGE_RESOURCE_FILE_MAX_BYTES)}</p>
                      </>
                    )}
                    <input
                      id="resourceFile"
                      type="file"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                      className="sr-only"
                      onChange={(e) => handleBrochureFile(e.target.files?.[0])}
                    />
                  </label>
                  {fileError && <p className="text-xs text-destructive">{fileError}</p>}
                </div>

                <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3.5">
                  <div className="flex flex-col gap-0.5">
                    <Label htmlFor="featured">Featured</Label>
                    <p className="text-xs text-muted-foreground">Show in the featured brochure section</p>
                  </div>
                  <Controller control={control} name="featured" render={({ field }) => <Switch id="featured" checked={field.value} onCheckedChange={field.onChange} />} />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Eunisell Production Solutions" aria-invalid={!!errors.title} className="h-10 rounded-xl" {...register('title')} />
                  {errors.title && <p className="text-xs text-destructive">{errors.title.message}</p>}
                </div>

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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="description">Description</Label>
                    <span className="font-mono text-[11px] text-muted-foreground">{(watch('description') || '').length}/300</span>
                  </div>
                  <Textarea
                    id="description"
                    rows={4}
                    placeholder="A short summary shown on the Knowledge Centre…"
                    aria-invalid={!!errors.description}
                    className="rounded-xl"
                    {...register('description')}
                  />
                  {errors.description && <p className="text-xs text-destructive">{errors.description.message}</p>}
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

export default AdminKnowledgeCentreFormPage;
