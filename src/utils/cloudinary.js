require('dotenv').config()
const cloudinary = require("cloudinary").v2;
const InvariantError = require('../../exceptions/InvariantError');

if(process.env.NODE_ENV !== 'production') {
  cloudinary.config({
    cloud_name: "amilin",
    api_key: "111994573248925",
    api_secret: "6UYm_XjLXmJjmMY5ytscGa-DY5A",
    secure: true,
  });
} else {
  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
}

const uploadImage = async (image, subFolder) => {
  const dataUpload = await cloudinary.uploader
    .upload(`${image}`, { folder: subFolder }, function (error, result) {
      if (error) throw new InvariantError("Gagal Upload");
    })
    .then(async (res) => {
      return res.secure_url;
    }).catch(error => {
      console.log(error, 'uploadImage');
      if (error) throw new InvariantError("Gagal Upload");

    })

  return dataUpload;
};

module.exports = uploadImage;
