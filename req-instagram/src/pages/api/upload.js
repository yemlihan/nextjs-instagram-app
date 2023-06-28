import { upload } from "./config";

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const uploadFiles = upload.array("files");
      uploadFiles(req, res, (error) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ error: "Dosya yükleme hatası: " + error.message });
        }

        const files = req.files;
        if (!files || files.length === 0) {
          return res.status(400).json({ error: "Yüklenen dosya bulunamadı." });
        }

        res.send({ items: req.files, message: "Successful" });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Beklenmeyen bir hata oluştu." });
    }
  } else if (req.method === "GET") {
    // Buraya GET işlemleri için gerekli kodları ekleyin (isteğe bağlı)
  }
}

