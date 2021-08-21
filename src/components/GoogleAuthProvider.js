import { useEffect, useState } from 'react'
import { googleAuthContext } from '../hooks/useGoogleAuth'

const { REACT_APP_GOOGLE_API_KEY, REACT_APP_GOOGLE_CLIENT_ID } = process.env

const GoogleAuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false)

  console.log('GoogleAuthProvider:', { isAuthenticated })

  useEffect(() => {
    if (window.gapi) return

    const script = document.createElement('script')

    script.async = true
    script.defer = true
    script.src = 'https://apis.google.com/js/api.js'

    script.onload = function () {
      this.onload = function () {}

      function initClient() {
        window.gapi.client
          .init({
            apiKey: REACT_APP_GOOGLE_API_KEY,
            clientId: REACT_APP_GOOGLE_CLIENT_ID,
            discoveryDocs: [
              'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
            ],
            scope: 'https://www.googleapis.com/auth/calendar.readonly',
          })
          .then(
            function () {
              // Listen for sign-in state changes
              window.gapi.auth2
                .getAuthInstance()
                .isSignedIn.listen(setAuthenticated)

              // Handle the initial sign-in state
              const isSignedIn = window.gapi.auth2
                .getAuthInstance()
                .isSignedIn.get()

              if (isSignedIn) setAuthenticated(isSignedIn)
              else window.gapi.auth2.getAuthInstance().signIn()
            },
            function (error) {
              console.error(error.details)
            },
          )
      }

      window.gapi.load('client:auth2', initClient)
    }

    script.onreadystatechange = function () {
      if (this.readyState === 'complete') {
        this.onload()
      }
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <googleAuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </googleAuthContext.Provider>
  )
}

export default GoogleAuthProvider
