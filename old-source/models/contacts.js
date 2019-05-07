const mongoose = require('mongoose');
const schema = mongoose.Schema;

const contactSchema = new schema({
    contactNumber: {
        type: String,
        required:true
    },
    contactName:{
        type:String,
        required: true
        

    }
});
 module.exports = mongoose.model('Contacts',contactSchema);