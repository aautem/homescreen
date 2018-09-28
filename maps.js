const API_KEY = require('./apiKey')

const googleMapsClient = (
    require('@google/maps')
    .createClient({
        key: API_KEY,
        Promise: Promise,
    })
)

console.log({ googleMapsClient })

googleMapsClient.geocode({address: '1600 Amphitheatre Parkway, Mountain View, CA'})
  .asPromise()
  .then((response) => {
    console.log(response.json.results);
  })
  .catch((err) => {
    console.log(err);
  });

// googleMapsClient.directions({
//     origin: 'Town Hall, Sydney, NSW',
//     destination: 'Parramatta, NSW',
//   })
//   .asPromise()
//   .then(function(response) {
//     console.log({ response })
//   })
//   .catch(error => console.log(error))
