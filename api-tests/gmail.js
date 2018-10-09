const { createInterface } = require('readline')
const { google } = require('googleapis')
const { readFile, writeFile } = require('fs')

const { log } = console
const { parse } = JSON

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']
const TOKEN_PATH = 'gmail_token.json'

// Load client secrets from a local file.
readFile(
    'gmail_credentials.json',
    (error, content) => (
        error
        ? log(error)
        : (
            // Authorize a client with credentials, then call the Gmail API.
            authorize(
                parse(content),
                listMessages,
            )
        )
    )
)

function authorize(credentials, callback) {
  const {
      client_id,
      client_secret,
      redirect_uris,
  } = credentials.installed

  const oAuth2Client = (
      new google
      .auth
      .OAuth2(
        client_id,
        client_secret,
        redirect_uris[0],
      )
  )

  readFile(
      TOKEN_PATH,
      (error, token) => (
          error
          ? (
              getNewToken(
                  oAuth2Client,
                  callback,
              )
          )
          : (
            oAuth2Client
            .setCredentials(parse(token))
            || callback(oAuth2Client)
          )
      )
  )
}

function getNewToken(oAuth2Client, callback) {
  const authUrl = (
      oAuth2Client
      .generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
      })
  )

  log(
      'Authorize this app by visiting this url:',
      authUrl,
  )

  const readline = (
      createInterface({
        input: process.stdin,
        output: process.stdout,
      })
  )

  // If the code does nothing,
  // `writeFile` has a return value
  // and the second `||` should be `&&`
  readline
  .question(
      'Enter the code from that page here: ',
      (code) => {
        readline.close()

        oAuth2Client
        .getToken(
            code,
            (error, token) => (
                error
                ? (
                    log(
                        'Error retrieving access token',
                        error,
                    )
                )
                : (
                    oAuth2Client
                    .setCredentials(token)
                    || (
                        writeFile(
                            TOKEN_PATH,
                            stringify(token),
                            error => (
                                error
                                ? log(error)
                                : (
                                    log(
                                        'Token stored to',
                                        TOKEN_PATH,
                                    )
                                )
                            )
                        )
                    )
                    || callback(oAuth2Client)
                )
            )
        )
    })
}

// function listLabels(auth) {
//   const gmail = (
//       google
//       .gmail({
//           version: 'v1',
//           auth,
//       })
//   )

//   gmail
//   .users
//   .labels
//   .list(
//       { userId: 'me' },
//       (error, res) => (
//         error
//         ? log(error)
//         : (
//             res
//             .data
//             .labels
//             .forEach(({ name }) => (
//                 log(name)
//             ))
//         )
//       ),
//   )
// }

function listMessages(auth) {
  const gmail = (
      google
      .gmail({
          version: 'v1',
          auth,
      })
  )

  gmail
  .users
  .messages
  .get(
      {
          id: '16622182cd01a479',
          userId: 'me',
      },
      (error, res) => (
        error
        ? log(error)
        : (
            res
            .data
            .payload
            .headers
            .forEach(({ name, value }) => (
                (
                    name === 'From'
                    || name === 'Subject'
                )
                && log(value)
            ))
        )
      ),
  )
}
