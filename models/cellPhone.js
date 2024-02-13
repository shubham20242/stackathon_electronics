const { Schema } = require('mongoose')

const cellPhones = new Schema(
    {
        name : {type: String, required: true},
        displaySize : {type: String, required: true},
        Storage : {type: Number, required: true},
        color : {type: String, required: true},
        batterLife:{type: String, required: true},
        price:{type: Number, required: true}
    },
    { timestamps: true }
)

module.exports = cellPhones