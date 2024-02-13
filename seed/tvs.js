const db = require('../db')
const { TV } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const tv = [
        {
            name: 'enter ',
            location: 'enter',
            url: 'enter'
          },
          {
            name: 'enter ',
            location: 'enter',
            url: 'enter'
          }
    ]

    await TV.insertMany(tv)
    console.log('inserted TV!')
}

const run = async () => {
    await main()
    db.close()
}

run()