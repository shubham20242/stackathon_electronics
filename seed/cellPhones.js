const db = require('../db')
const { cellPhone } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const models = [
    {
      name : `iPhone 15 Pro Max`,
      displaySize : `6.7"`,
      storage:[128,256,512,1000],
      color : [`Natural Titanium`,`Blue Titanium`,`White Titanium`,`Black Titanium`],
      batteryLife:29,
      price:1100
    },
    {
      name : `iPhone 15 Pro`,
      displaySize : `6.1"`,
      storage:[128,256,512,1000],
      color : [`Natural Titanium`,`Blue Titanium`,`White Titanium`,`Black Titanium`],
      batteryLife:23,
      price:1050
    },
    {
      name : `Samsung Galaxy S24`,
      displaySize : `6.8"`,
      storage:[256,512],
      color : [`Onyx Black`,`Titanium Black`,`Marble Grey`,`Titanium Grey`,`Cobalt Violet`,'Titanium Violet'],
      batteryLife:27,
      price:859.99
    },
    {
      name : `Samsung Galaxy A54`,
      displaySize : `6.3"`,
      storage:[256,512],
      color : [`Awesome Graphite`,`Awesome Violet`],
      batteryLife:28,
      price:449.99
    },

    ]

    await cellPhone.insertMany(models)
    console.log('inserted cellphones!')
}

const run = async () => {
    await main()
    db.close()
}

run()