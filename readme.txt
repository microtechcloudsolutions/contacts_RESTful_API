The API uses the following technoligeis
1.node js frame work of java script thats allows java script server side code
2.express js node js frame work 
3.Joi node js package for validation of data received from a request or client data
4.mongodb uses mongodb database management system for data storage
5.mongoose frame of mongodb used for carrying out mongodb operations

HOW TO USE THE API:
To see how the api works,it was tested using post man(software for testing out REstful API's)

in post man to create a single contact,we passed data to the following url:use "POST http method"

http://localhost:3000/api/contact
data should be sent as a json object like so:
{
	"name":"David",
	"number":"0979789839"
}
The API returns a json file with appropriate response

 where 3000 is the port number of the computer where the API is being tested
 TO CREATE MULTIPLE CONTACTS:use "POST http method"
 
 http://localhost:3000/api/contacts
 
 NOTE: "contacts" in the url should be in plural form when adding multiple contacts
 contacts are put in an array of objects like so:
 [{
	"name":"petro",
	"number":"09761565"
},
{
	"name":"Mary",
	"number":"2608395735"
},
{
	"name":"chuck",
	"number":"0977760766"
}]
The API returns a json file with appropriate response

TO DELETE A CONTACT:use "delete http method"

when deleting a contact specify the contact number in the url to be deleted like so:
http://localhost:3000/api/contact/0979789839
The API returns a json file with appropriate response

TO UPDATE A CONTACT:use "PATCH http method"

when updating a contact specify the contact number in the url to be updated like so:
http://localhost:3000/api/contact/0979789839
then the contact to be updated should be given in the format:
{
	"name":"petro",
	"number":"09761565"
}
The API returns a json file with appropriate response
 TO FETCH ALL THE CONTACTS:use "GET http method"
 To retrive all the contacts use the url with the "GET" http method:
 http://localhost:3000/api/contacts
 
  TO FETCH ONE  CONTACT:
  
  To retrive one contact use the url with the "GET" http method:
 http://localhost:3000/api/contact
 NOTE: contact should be singular when fetching one contact
 




 
