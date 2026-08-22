export const EMAILS = {
  ADMIN: ['info@eunisell.com', 'marcel.chukwuma00@gmail.com'],
  HR: ['hr@eunisell.com', 'marcel.chukwuma00@gmail.com'],
};

export const MB_IN_BYTES = 1_048_576;

// Cloudinary's account hard-caps `raw` resource uploads at exactly 1,048,576 bytes (1MB),
// in both signed and unsigned mode, regardless of preset config. Cap comfortably below that
// until the account/plan-level limit is resolved with Cloudinary.
export const KNOWLEDGE_RESOURCE_FILE_MAX_BYTES = 1000 * 1024;

export const BLOG_IMAGE_MAX_BYTES = 5 * MB_IN_BYTES;
