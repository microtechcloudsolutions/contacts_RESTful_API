const express = require('express');
const Contacts = require('../models/contacts');
const Joi = require('joi');

    // validation function to check for errors in clients request
    // returns an object with 'value' and 'error' properties
const validateContact = (contact) =>{
    const schema = {
        number:Joi.string().required(),
        name:Joi.string().required()
    };
    return Joi.validate(contact,schema);

     }

//get all contacts
exports.findAll =(req,res,next) =>{

    Contacts.find()
    .then(results =>{
        return res.status(200).send(results);

    })
    .catch(err =>{
        return res.status(404).send(err);
    })
}


// find one contact
exports.findOne =(req,res,next) =>{
   
    
    Contacts.find({contactNumber:req.params.number})
    .then(results =>{
        console.log(results)
        if(results.length > 0)
        {
            return res.status(200).json({
                result:results,
            message:'get request was successful'})
        }
        return res.status(404).json({error:'contact does not exist....'});
      
    })
    .catch(err => {
        console.log(err)
        return res.status(404).json({
            error:'error couldnt connect to the database'
        });
    })



}


//create one contact
exports.createOne =(req,res,next) =>{
      
    const  { error } = validateContact(req.body);
    
    if(error)
    {
        return res.status(400).send(error.details[0].message);

    }
    // checking if number already exists in the database before creating a new one
     Contacts.findOne({contactNumber:req.body.number.toLowerCase()})
    .then(contact =>{
         if(!contact)
         {
                  
    const contactNumber = req.body.number;
    const contactName   =req.body.name.toString().toLowerCase()
    //saving data to the database
    contacts = new Contacts({
        contactNumber:contactNumber,
        contactName:contactName
    })
    contacts.save()
    .then(results =>{
        
        return res.status(200).send(results);
    })
    .catch(err =>{
        console.log(err);
    return res.status(400).send(err);
    })
         }
         else
         {
             return res.status(404).json({error:"Contact with that number already exists"});
            }
           
    })
  
     

}
//update one contact
exports.updateOne =(req,res,next) =>{
    // checking for errors to ensure data being sent to the database is  in the correct form
    const  { error } = validateContact(req.body)
    
    if(error)
    {
        return res.status(400).send(error.details[0].message);

    }
      // Retriving a contact from database where number equals to the number in the database
       Contacts.findOne({contactNumber:req.params.number})
      .then(contact =>{
          //check if contact exist before updating a contact
          if(!contact)
          {
            return res.status(404).json({error:'contact does not exist....'});
          }
         // getting data from the client for updating contact 
        contact.contactNumber = req.body.number;
        contact.contactName =req.body.name;
        return contact.save()
        .then(results =>{
            return res.status(200).json({response:results,message:'contact updated'});
        })
        .catch(err =>{
            return res.status(404).json({error:err});
        })
    })
    .catch(err => {
        return res.status(404).Json({error:"Contact was not found"});
    })
      

  }

 //Delete a contact
 exports.deleteOne =(req,res) =>{

    Contacts.deleteOne({contactNumber:req.params.number})
    .then(results =>{
        if(results.deletedCount !== 0)
        {
            return res.status(200).json({response:results});
        }
        return res.status(404).json({error:'No contact was deleted'});
        

    })
    .catch(err =>{
        return res.status(404).json({error:err});
    })
     
}
exports.createMore = (req,res) =>{
    const arrayOfcontacts = req.body;
    // validating the data received through 
   const schema = Joi.array().items(Joi.object().keys({
    number:Joi.string().required(),
    name:Joi.string().required()

   }))
    const results = Joi.validate(arrayOfcontacts,schema)
    const {error} = results;
    if(error)
    {
        return res.status(400).send(error.details[0].message);

    }
        



 arrayOfcontacts.forEach(contact =>{
     const contacts = new Contacts({
         contactName: contact.name,
         contactNumber:contact.number

     })
     console.log(contact)
     contacts.save()
    
 })
      return res.status(200).json({response:arrayOfcontacts,message:arrayOfcontacts.length + ' contacts were added'})

}
