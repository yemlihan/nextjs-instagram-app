import multer from "multer"; 
import fs from "fs";
import path from "path";


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });

// Klasör ve dosya yolumuz
export const rootDir = './uploads';


export function findFileByName(dirPath, fileName) {
  if (!fs.existsSync(dirPath)) {
    throw new Error('Klasör bulunamadı.');
  }

  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const foundFilePath = findFileByName(filePath, fileName);
      if (foundFilePath) {
        return foundFilePath;
      }
    } else if (stat.isFile() && file === fileName) {
      return filePath;
    }
  }

  return null;
}

