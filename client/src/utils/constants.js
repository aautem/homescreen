import { Chance } from 'chance'

const chance = new Chance()

export const seconds = (
  [
    ...Array(60)
    .keys()
  ]
  .map(second => ({
    second,
    top: (
      String(
        chance
        .integer({
            max: 100,
            min: 0,
        })
      ) + '%'
    ),
    left: (
      String(
        chance
        .integer({
            max: 100,
            min: 0,
        })
      ) + '%'
    ),
  }))
)
