import { upload } from "./config";

export default function handler(req, res) {
  if (req.method === "POST") {
    const uploadFiles = upload.array("files");
    uploadFiles(req, res, (error) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Dosya yükleme hatası." });
      }

      const files = req.files;
      if (!files || files.length === 0) {
        return res.status(400).json({ error: "Yüklenen dosya bulunamadı." });
      }

      res.send({ items: req.files, message: "Successful" });
    });
  } else if (req.method === "GET") {
  }
}

export const config = {
  api: { bodyParser: false },
};
