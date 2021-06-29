require("dotenv").config();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

//configuration for cloundinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

//storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ArtWorks",
    allowedFormats: ["jpg", "png"],
  },
});

const artUpload = multer({ storage: storage });

module.exports = artUpload;