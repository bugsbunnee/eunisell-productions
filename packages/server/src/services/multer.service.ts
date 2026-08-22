import multer from 'multer';
import { MB_IN_BYTES } from '../infrastructure/utils/constants.js';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MB_IN_BYTES * 20 },
  fileFilter: function (req, file, cb) {
    const isAllowed = ['image', 'text/csv', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument'].some(
      (mimetype) => file.mimetype.indexOf(mimetype) !== -1
    );
    cb(null, isAllowed);
  },
});

export default upload;
