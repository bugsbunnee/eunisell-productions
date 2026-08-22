import * as cloudinaryService from './cloudinary.service.js';

const COVER_FOLDER = 'eunisell/knowledge-resources/covers';
const FILE_FOLDER = 'eunisell/knowledge-resources/files';

const EXTENSION_LABELS: Record<string, string> = {
  pdf: 'PDF',
  doc: 'DOC',
  docx: 'DOCX',
  xls: 'XLS',
  xlsx: 'XLSX',
  ppt: 'PPT',
  pptx: 'PPTX',
  csv: 'CSV',
};

class KnowledgeResourceService {
  fileTypeFromName(originalName: string) {
    const extension = originalName.split('.').pop()?.toLowerCase() ?? '';
    return EXTENSION_LABELS[extension] ?? (extension.toUpperCase() || 'FILE');
  }

  async uploadCoverImage(buffer: Buffer) {
    const result = await cloudinaryService.uploadStream(buffer, COVER_FOLDER);
    if (!result) throw new Error('Failed to upload cover image');

    return { coverImage: result.secure_url, coverImageId: result.public_id };
  }

  async deleteCoverImage(publicId?: string | null) {
    if (!publicId) return;
    await cloudinaryService.deleteFile(publicId).catch(() => undefined);
  }

  async uploadFile(buffer: Buffer) {
    const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;
    if (!uploadPreset) throw new Error('CLOUDINARY_UPLOAD_PRESET is not configured');

    const result = await cloudinaryService.uploadUnsignedStream(buffer, uploadPreset, FILE_FOLDER, 'raw');
    if (!result) throw new Error('Failed to upload file');

    return { file: result.secure_url, fileId: result.public_id, fileSizeBytes: result.bytes };
  }

  async deleteFile(publicId?: string | null) {
    if (!publicId) return;
    await cloudinaryService.deleteFile(publicId, 'raw').catch(() => undefined);
  }
}

export default new KnowledgeResourceService();
