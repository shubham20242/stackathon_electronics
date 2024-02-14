const mongoose = require('mongoose')
// const Model1Schema = require('./model1')
// const Model2Schema = require('./model2')
const computerSchema = require('./computer')

// const Model1 = mongoose.model('Model1', Model1Schema)
// const Model2 = mongoose.model('Model2', Model2Schema)
const Computer = mongoose.model('computer',computerSchema)

module.exports = {
    // Model1,
    // Model2,
    Computer
}

