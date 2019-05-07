const express = require('express');
const app =express();
const contactsRoutes = require('./routes/contacts')
const mongoose = require('mongoose');
// const mongodbUri = 'mongodb+srv://admin:pass104@cluster0-sj5ef.mongodb.net/contacts'
const mongodbUri = "mongodb://127.0.0.1:27017/smsgateway-contacts"
const bodyParser = require('body-parser');
app.use(express.json());


// app.use(bodyParser.json());
// app.use((req,res,next) => {
//     //set Headers to prevent CORS errors 
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET','POST','PATCH','DELETE','PUT');
//     res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');

// })
//get root page
app.get('/',(req,res,next) =>{

res.send('<p>welcome to the contacts restful api services</p>');
});
app.use(contactsRoutes);

 //environmental variable to access the port number on which the app is running

mongoose.connect(mongodbUri,{useNewUrlParser: true}).then(res =>{
    
    const port = process.env.PORT || 3000;
    app.listen(port)
    console.log('connected to contacts api services')

})
.catch(err => {
    console.log(err);
})