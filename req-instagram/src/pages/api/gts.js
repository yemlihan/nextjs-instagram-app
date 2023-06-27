import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "GET") {
    const getFollowers = () => {
      return new Promise((resolve, reject) => {
        const jsonFilesFollowers = [];
        fs.readdir("./uploads", (err, files) => {
          if (err) {
            return reject(err);
          }
          files.forEach((file) => {
            if (path.extname(file) === ".json" && file === "followers_1.json") {
              const filePath = path.join("./uploads", file);
              const jsonData = fs.readFileSync(filePath, "utf-8");
              const jsonDataParsed = JSON.parse(jsonData);
              const newArr = [];
              newArr.push(jsonDataParsed);
              const newJsonData = newArr.map((item) => {
                return item.string_list_data;
              });
              newJsonData.map((item) => {
                jsonFilesFollowers.push(item[0]);
              });
            }
          });
          resolve(jsonFilesFollowers);
        });
      });
    };

    const getFollowing = () => {
      return new Promise((resolve, reject) => {
        const jsonFilesFollowing = [];
        fs.readdir("./uploads", (err, files) => {
          if (err) {
            return reject(err);
          }
          files.forEach((file) => {
            if (path.extname(file) === ".json" && file === "following.json") {
              const filePath = path.join("./uploads", file);
              const jsonData = fs.readFileSync(filePath, "utf-8");
              const followings = JSON.parse(jsonData).relationships_following;
              const newJsonData = followings.map((item) => {
                return item.string_list_data;
              });
              newJsonData.map((item) => {
                jsonFilesFollowing.push(item[0]);
              });
            }
          });
          resolve(jsonFilesFollowing);
        });
      });
    };

    Promise.all([getFollowers(), getFollowing()])
      .then((results) => {
        if (results[0].length > 0 && results[1].length > 0) {
          const followers = results[0];
          const following = results[1];
          const allUsers = [...followers, ...following];
          return res.status(200).send(allUsers);
        } else {
          return res.status(200).send({ message: "null upload folder" });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    // return res.status(405).json({message: "Method not allowed!"})
  }
}
