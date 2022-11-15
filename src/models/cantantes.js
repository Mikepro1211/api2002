const mongoose = require('mongoose');
const Schema  =  mongoose.Schema;

const PostSchema = new Schema({
    date:{
        type: Date,
        default: Date.now, 
    },
    imagen:{
        type: String,
        trim: true
    },
    name:{
        type: String,
        trim: true
    },
    album:{
        type: String,
        trim: true
    },
    year:{
        type: String,
        trim:true
    }
});
module.exports =mongoose.model('Cantante',PostSchema);