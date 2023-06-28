import { rootDir, findFileByName } from "./config";
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "GET") {
    const filePath = findFileByName(path.join(process.cwd(), rootDir), "posts_viewed.json");
    if (filePath) {
      fs.readFile(filePath, (err, data) => {
        if (err) return res.status(200).send({ message: "error File!!!" });
        const jsonData = JSON.parse(data);
        res.send(jsonData);
      });
    } else {
      return res.status(200).send({ message: "null upload folder" });
    }
  } else {
    // return res.status(405).json({message: "Method not allowed!"})
  }
}
