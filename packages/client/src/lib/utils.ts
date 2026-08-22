import axios from 'axios';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getErrorMessage(error: unknown) {
  if (axios.isAxiosError(error)) return error.response?.data?.error ?? error.message;

  return (error as Error).message;
}

export function scrollToView(viewId: string) {
  const view = document.getElementById(viewId);
  if (view) view.scrollIntoView({ behavior: 'smooth' });
}

export function downloadFile(file: string, fileName: string) {
  const a = document.createElement('a');

  a.href = file;
  a.download = fileName;

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
}

export function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;

  const megabytes = bytes / (1024 * 1024);
  if (megabytes >= 0.1) return `${megabytes.toFixed(1)} MB`;

  return `${(bytes / 1024).toFixed(0)} KB`;
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
