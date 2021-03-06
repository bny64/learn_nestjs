import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as fs from 'fs';
import * as multer from 'multer';
import * as path from 'path';

// ν΄λ μμ±
const createFolder = (folder: string) => {
  try {
    console.log(`πΎ Create a root uploads folder...`);
    fs.mkdirSync(path.join(__dirname, '..', `uploads`));
  } catch (err) {
    console.log(`The folder already exists...`);
  }
  try {
    console.log(`πΎ Create a ${folder} uploads folder...`);
    fs.mkdirSync(path.join(__dirname, '..', `uploads/${folder}`));
  } catch (error) {
    console.log(`The ${folder} folder already exists...`);
  }
};

const storage = (folder: string): multer.StorageEngine => {
  createFolder(folder);

  return multer.diskStorage({
    destination(req, file, cb) {
      //κ²½λ‘ μ§μ 
      const folderName = path.join(__dirname, '..', `uploads/${folder}`);
      cb(null, folderName);
    },
    filename(req, file, cb) {
      //νμΌ μ΄λ¦ μ§μ 
      const ext = path.extname(file.originalname);

      const fileName = `${path.basename(
        file.originalname,
        ext,
      )}${Date.now()}${ext}`;
      cb(null, fileName);
    },
  });
};

export const multerOptions = (folder: string) => {
  //ν΄λΉνλ ν΄λ μμ νμΌμ μ μ₯
  const result: MulterOptions = {
    storage: storage(folder),
  };
  return result;
};
