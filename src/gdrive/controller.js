//googleapis
require('dotenv').config()
const { google } = require('googleapis');

//path module
const path = require('path');

//file system module
const fs = require('fs');

//client id
const CLIENT_ID =process.env.CLIENT_ID

//client secret
const CLIENT_SECRET =process.env.CLIENT_SECRET
//redirect URL
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

//refresh token
const REFRESH_TOKEN =''
//intialize auth client
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN_G_DRIVE });

//initialize google drive
const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
});

//file path for out file
const filePath = path.join(__dirname, 'gambar.jpeg');
console.log(filePath);
async function uploadFile(req, res) {
    try{
      const response = await drive.files.create({
            requestBody: {
                name: 'gambar-hero.jpeg', //file name
                mimeType: 'image/jpeg',
            },
            media: {
                mimeType: 'image/png',
                body: fs.createReadStream(filePath),
            },
        });  
        // report the response from the request
        console.log(response.data);
       res.json({message: 'Anda berhasil uplod file gambar.jpeg', data:response.data})
    }catch (error) {
        //report the error message
        console.log(error.message, 'gagal');
        res.json({message:error.message})

    }
}  

module.exports = {
    uploadFile
}