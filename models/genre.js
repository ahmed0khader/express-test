var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenerSchema = new Schema({
    name: {
        type: String,
        min: 3,
        max: 100,
    }
})

// Virtual for GenerSchema URL
GenerSchema.virtual('url').get(() =>{
    return '/catalog/genre/' + this._id;
})

module.exports = mongoose.model('Genre', GenerSchema);