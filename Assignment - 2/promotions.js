const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promotionSchema = new Schema({
    name:  {
        type: String,
        required: true,
        unique  : true,
    },
    image:  {
        type: String,
        required: false
    },
    label:  {
        type: String,
        default   : '',
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    description:  {
        type: String,
        required: true
    },
    featured : {
        type      : Boolean,
        default   : false,
    }
}, {
    timestamps: true
});

var Promotions = mongoose.model('promotion', promotionSchema);
module.exports = Promotions;

