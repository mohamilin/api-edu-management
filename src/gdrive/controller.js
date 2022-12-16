//googleapis
require("dotenv").config();
const {
    google
} = require("googleapis");
const {
    OAuth2Client
} = require('google-auth-library');
const readline = require('readline')
const path = require("path");
const fs = require("fs");
const {authenticate} = require('@google-cloud/local-auth');

//client
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.REFRESH_TOKEN_G_DRIVE;

// const TOKEN_PATH = './src/gdrive/token.json';
const TOKEN_PATH = './src/gdrive/token.json';
const formID = '1FAIpQLSfDh_L5XkcN210agoDMKC0u44q5jlwJDKj5fNmY4kEzim6u3AlQsODLEQa0Hew-klKswCwf4AMC-tKSjVKDnK4';
// https://docs.google.com/forms/d/e/1FAIpQLSf5iZO2ism0YRXSx0iZ8kWexQz9M72pNePrH4ngsvFdV8Gjvg/viewform?usp=sf_link
// const SCOPES = ['https://www.googleapis.com/auth/drive'];
const SCOPES = [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.appdata",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/drive.metadata.readonly",
    "https://www.googleapis.com/auth/drive.metadata",
    "https://www.googleapis.com/auth/drive.photos.readonly",
    "https://www.googleapis.com/auth/forms.body.readonly",
    "https://www.googleapis.com/auth/spreadsheets"
  ];
let auth;

function getAuth() {
    fs.readFile('./src/gdrive/credentials.json', (err, content) => {
        if (err) return console.log('Error loading client secret file:', err);
        // Authorize a client with credentials, then call the Google Drive API.
        console.log(JSON.parse(content), 'JSON.parse(content)');
        authorize(JSON.parse(content));
});
}

    //   res.json({data: result.data.files})

function authorize(credentials) {
    const {
        client_secret,
        client_id,
        redirect_uris
    } = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
    );

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getAccessToken(oAuth2Client);
        oAuth2Client.setCredentials(JSON.parse(token));
        console.log(oAuth2Client, 'oAuth2Client');
        auth = oAuth2Client;
    });
}


function getAccessToken(oAuth2Client) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error retrieving access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            // auth = authoAuth2Client;
            auth = oAuth2Client
        });
    });
}


async function uploadFileV2(req, res) {
    await getAuth()
    var fileMetadata = {
        name: 'kamal-hossain', // file name that will be saved in google drive
    };

    var media = {
        mimeType: 'image/jpg',
        body: fs.createReadStream('./src/gdrive/gambar.jpeg'), // Reading the file from our server
    };

    // Authenticating drive API
    const drive = google.drive({
        version: 'v3',
        auth
    });
    // Uploading Single image to drive
    drive.files.create({
            requestBody: {
                name: "gambar-hero.jpeg", // set file name in g drive
                mimeType: "image/jpeg",
                parents: ['0B85NJluQ5KpYflhPMC1lTjJxVm9jZGVVanpjcEJLWVgxUHN4cFRiTFowUkpKLUtkaW9lWEE?resourcekey=0-I8ZjLxwYI0L6VR7Mkb21fw'],
            },
            media: media,
        },
        async (err, file) => {
            if (err) {
                // Handle error
                console.error(err.msg, 'gagal');

                return res
                    .status(400)
                    .json({
                        errors: [{
                            msg: 'Server Error try again later'
                        }]
                    });
            } else {
                // if file upload success then return the unique google drive id
                res.status(200).json({
                    fileID: file.data.id,
                });
            }
        }
    );
}

//file path for out file
async function uploadFile(req, res) {
    //intialize auth client
    const oauth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );

    oauth2Client.setCredentials({
        refresh_token: REFRESH_TOKEN,
        scope: SCOPES
    });

    //initialize google drive
    const drive = google.drive({
        version: "v3",
        auth: oauth2Client,
    });

    const filePath = path.join(__dirname, "gambar.jpeg");
    try {
        const response = await drive.files.create({
            requestBody: {
                name: "bus-gambar.jpeg", // set file name in g drive
                mimeType: "image/jpeg",
                parents: [ '1C0kIDrbdzcdaTqjbaGFPeSlewDD_yJvb'],

            },
            media: {
                mimeType: "image/png",
                body: fs.createReadStream(filePath),
            },
        });
        // report the response from the request
        console.log(response.data);
        res.json({
            message: "Anda berhasil uplod file gambar.jpeg",
            data: response.data,
        });
    } catch (error) {
        //report the error message
        console.log(error.message, "gagal");
        res.json({
            message: error.message,
        });
    }
}

async function runSample(req, res) {
    const oauth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );

    oauth2Client.setCredentials({
        refresh_token: REFRESH_TOKEN,
        scope: SCOPES
    });

    // const auth = path.join(__dirname, 'credentials.json')
    // const auth = await authenticate({
    //     keyfilePath: path.join(__dirname, 'credentials.json'),
    //     scopes: 'https://www.googleapis.com/auth/forms.body.readonly',
    //   });

    // const authClientObject = await oauth2Client.getClient();


      console.log(oauth2Client, 'oauth2Client');
    //initialize google drive
    // const forms = google.forms({
    //     version: "v1",
    //     auth: oauth2Client,
    // });
   

   try {
    const googleSheetsInstance = google.sheets({ version: "v4", auth: oauth2Client });
    const spreadsheetId = "1Rdl2RIqytdZ-czeS5dK90chVBF82_UAf2bqH2wl_Jus";
    const result = await googleSheetsInstance.values.get({
        auth: oauth2Client,
        spreadsheetId: spreadsheetId,
        range: "A:B",
    });


    // const forms = google.forms({
    //     version: 'v1',
    //     auth: auth,
    //   });
    // const result = await forms.forms.responses.list({
    //     formId: '1FAIpQLScmmgf4kUyE5G787uCCZjYi-DX91DMen8bDr-FmVLQqrWzsAw',
    //   });
    //   console.log(result.data);
      return res.json({succes: true, data:result});
   } catch (error) {
    return res.json({succes: false, oauth2Client, data: error});

   }
  }
  
//   if (module === require.main) {
//     runSample().catch(console.error);
//   }

module.exports = {
    // createFolder,
    uploadFile,
    uploadFileV2,
    runSample
};