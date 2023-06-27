import { rootDir, findFileByName } from "./config";
import fs from "fs";

export default function handler(req, res) {
  if (req.method === "GET") {
    const filePath = findFileByName(rootDir, "recent_follow_requests.json");
    if (filePath) {
      fs.readFile(filePath, (err, data) => {
        if (err) return res.status(200).send({ message: "error File!!!" });
        const jsonData = JSON.parse(data);
        return res.status(200).send(jsonData);
      });
    } else {
      return res.status(200).send({ message: "null upload folder" });
    }
  } else {
    // return res.status(405).json({message: "Method not allowed!"})
  }
}
