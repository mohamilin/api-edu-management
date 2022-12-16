/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable camelcase */
// [START sheets_quickstart]
const fs = require("fs").promises;
const path = require("path");
const process = require("process");
const {
    authenticate
} = require("@google-cloud/local-auth");
const {
    google
} = require("googleapis");

// If modifying these scopes, delete token.json.
const SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets.readonly",
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.appdata",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/drive.metadata.readonly",
    "https://www.googleapis.com/auth/drive.metadata",
    "https://www.googleapis.com/auth/drive.photos.readonly",
    "https://www.googleapis.com/auth/forms.body.readonly",
    "https://www.googleapis.com/auth/spreadsheets",
];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), "token.json");
const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
    try {
        const content = await fs.readFile(TOKEN_PATH);
        const credentials = JSON.parse(content);
        return google.auth.fromJSON(credentials);
    } catch (err) {
        return null;
    }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
        type: "authorized_user",
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
    let client = await loadSavedCredentialsIfExist();
    if (client) {
        return client;
    }
    client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
    });
    if (client.credentials) {
        await saveCredentials(client);
    }
    return client;
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @see https://docs.google.com/spreadsheets/d/1Rdl2RIqytdZ-czeS5dK90chVBF82_UAf2bqH2wl_Jus/edit?resourcekey#gid=0
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
async function listMajors(auth) {
    const sheets = google.sheets({
        version: "v4",
        auth
    });
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: "1Rdl2RIqytdZ-czeS5dK90chVBF82_UAf2bqH2wl_Jus",
        range: "A2:Z",
    });
    try {



        const rows = res.data.values;
        if (!rows || rows.length === 0) {
            console.log("No data found.");
            return;
        }

        const values = rows;
        for (let i = 0; i < values.length; i++) {
            const row = values[i];

            console.log(row, "row");
        }
    } catch (error) {
        // console.log(error, 'gagal');

    }
}


authorize()
    .then((auth) => {
        listMajors(auth);
    }).catch(e => {
        console.log(console.error, 'gagals');
    })