// https://developers.google.com/calendar/quickstart/nodejs

const addDays = require('date-fns/add_days')
const format = require('date-fns/format')
const fs = require('fs')
const readline = require('readline')
const { google } = require('googleapis')

const scopes = ['https://www.googleapis.com/auth/calendar.readonly']
const tokenPath = 'token.json'

const getAccessToken = (oAuth2Client, callback) => {
  const authUrl = (
    oAuth2Client
    .generateAuthUrl({
      access_type: 'offline',
      scopes,
    })
  )

  console.log(
    'Visit this URL to authorize:',
    authUrl,
  )

  const rl = (
    readline
    .createInterface({
      input: process.stdin,
      output: process.stdout,
    })
  )

  rl
  .question(
    'Enter your code:',
    (err, token) => {
      if (err) {
        console.error('Can\'t get token:', err)
        return
      }

      oAuth2Client
      .setCredentials(token)

      fs
      .writeFile(
        tokenPath,
        JSON.stringify(token),
        err => {
          if (err) {
            console
            .error(
              'Error writing token to file:',
              err,
            )
          }
        }
      )

      callback(oAuth2Client)
    }
  )
}

const authorize = ({ installed }, callback) => {
  const {
    client_id,
    client_secret,
    redirect_uris,
  } = installed

  const oAuth2Client = (
    new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0],
    )
  )

  fs.readFile(
    tokenPath,
    (err, token) => {
      if (err) {
        return (
          getAccessToken(
            oAuth2Client,
            callback,
          )
        )
      }

      oAuth2Client
      .setCredentials(
        JSON.parse(token)
      )

      callback(oAuth2Client)
    },
  )
}

const listEvents = res => auth => {
  const calendar = (
    google
    .calendar({
      auth,
      version: 'v3',
    })
  )

  calendar
  .events
  .list(
    {
      calendarId: 'primary',
      orderBy: 'startTime',
      singleEvents: true,
      timeMax: (
        format(
          addDays(new Date(), 1),
          'YYYY-MM-DD'
        )
        .concat('T06:00:00.000Z')
      ),
      timeMin: (
        format(
          new Date(),
          'YYYY-MM-DD'
        )
        .concat('T06:00:00.000Z')
      ),
    },
    (err, { data }) => {
      if (err) {
        console.error('API Error:', err)
        return
      }

      res
      .json(
        data
        .items
      )
    }
  )
}

const fetchCalendar = (req, res) => {
  fs.readFile(
    'client_secret.json',
    (err, content) => {
      if (err) {
        console.error('Error reading `client_secret.json`')
        return
      }

      authorize(
        JSON.parse(content),
        listEvents(res),
      )
    },
  )
}

module.exports = fetchCalendar
