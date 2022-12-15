//googleapis
require('dotenv').config()
const { google } = require('googleapis');

//path module
const path = require('path');

//file system module
const fs = require('fs');

//client id
const CLIENT_ID ='348804555336-5rgg4eicnqoi9tu10bpi98otoe9910sv.apps.googleusercontent.com'

//client secret
const CLIENT_SECRET ='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'
//redirect URL
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

//refresh token
const REFRESH_TOKEN ='1//046JlOK1kcKvACgYIARAAGAQSNwF-L9IrkdnEZNXcHhj-vtQDhWToHEqIs8cWvqbY5fHQdPhaMmbyMOjGjdH2tFStUi1R4uL25Oc'
//intialize auth client
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

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