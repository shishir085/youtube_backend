import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file in cloudnary
    const resposne = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploades successfully
    console.log("file uploaded successfully on cloudinary", resposne.url);
    return resposne;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved temporary file as the operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
