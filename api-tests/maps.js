const { GOOGLE_API_KEY } = require('./apiKeys')

const { log } = console

const googleMapsClient = (
    require('@google/maps')
    .createClient({
        key: GOOGLE_API_KEY,
        Promise: Promise,
    })
)

// 50 requests per day

googleMapsClient
.directions({
    origin: '4900 W 108th St, Overland Park, KS 66211',
    destination: 'Liberty, MO',
})
.asPromise()
.then(({ json }) => {
    log({
        travelTime: (
            json
            .routes[0]
            .legs[0]
            .duration
            .text
        )
    })
})
.catch(error => {
    log(error)
})
