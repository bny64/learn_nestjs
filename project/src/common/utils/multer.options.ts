import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as fs from 'fs';
import * as multer from 'multer';
import * as path from 'path';

// 폴더 생성
const createFolder = (folder: string) => {
  try {
    console.log(`💾 Create a root uploads folder...`);
    fs.mkdirSync(path.join(__dirname, '..', `uploads`));
  } catch (err) {
    console.log(`The folder already exists...`);
  }
  try {
    console.log(`💾 Create a ${folder} uploads folder...`);
    fs.mkdirSync(path.join(__dirname, '..', `uploads/${folder}`));
  } catch (error) {
    console.log(`The ${folder} folder already exists...`);
  }
};

const storage = (folder: string): multer.StorageEngine => {
  createFolder(folder);

  return multer.diskStorage({
    destination(req, file, cb) {
      //경로 지정
      const folderName = path.join(__dirname, '..', `uploads/${folder}`);
      cb(null, folderName);
    },
    filename(req, file, cb) {
      //파일 이름 지정
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
  //해당하는 폴더 안에 파일을 저장
  const result: MulterOptions = {
    storage: storage(folder),
  };
  return result;
};
