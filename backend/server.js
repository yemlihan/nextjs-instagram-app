const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors()); //cors hatalarından kurtuluyoruz

//upload edilen dosyaları multer ile kayıt edecegimiz dizini veriyoruz
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//upload ettigimiz method
app.post("/api/upload", upload.array("files"), (req, res) => {
  const files = req.files;
  if (files.length === 0) {
    return res.status(200).send({ message: "Wrong File!!!" });
  }
  res.send({ items: req.files, message: "Successful" });
});


//klasörlerin icinde sadece istedigimiz dosyayı veren method


function findFileByName(dirPath, fileName) {
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

// Klasör ve dosya yolumuz
const rootDir = './uploads';



//takip ettigimiz ama takip etmeyenler listesi
app.get("/api/gts", (req, res) => {
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
            const newJsonData =  newArr.map((item) => {
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
     }else {
      return res.status(200).send({message: "null upload folder"})
     }
    })
    .catch((err) => {
      console.error(err);
    });
});

//Takip istegine dönmeyenler
app.get("/api/recent", (req, res) => {
  const filePath = findFileByName(rootDir, "recent_follow_requests.json");
  if (filePath) {
    fs.readFile(filePath, (err, data) => {
      if (err) return res.status(200).send({ message: "error File!!!" });
      const jsonData = JSON.parse(data);
      res.send(jsonData);
    });
  } else {
    return res.status(200).send({message: "null upload folder"})
  }
});

//son takipten cıktıklarımız
app.get("/api/unfollow", (req, res) => {
  const filePath = findFileByName(rootDir, "recently_unfollowed_accounts.json");
  if (filePath) {
    fs.readFile(
      filePath,
      (err, data) => {
        if (err) return res.status(200).send({ message: "error File!!!" });
        const jsonData = JSON.parse(data);
        res.send(jsonData);
      }
    );
  } else {
    return res.status(200).send({ message: "null upload folder"})
  }
});

//gezdigin profiller
app.get("/api/postsviewed", (req, res) => {
  const filePath = findFileByName(rootDir, "posts_viewed.json");
  if (filePath) {
    fs.readFile(
      filePath,
      (err, data) => {
        if (err) return res.status(200).send({ message: "error File!!!" });
        const jsonData = JSON.parse(data);
        res.send(jsonData);
      }
    );
  } else {
    return res.status(200).send({ message: "null upload folder"})
  }
});

//server başlatma

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
