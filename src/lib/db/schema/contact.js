const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    _owner:{type:String, required:true},
    groups:[{type:Schema.Types.ObjectId,ref:""}],
    organization:[],
    blocked:{}
})

module.exports = {};