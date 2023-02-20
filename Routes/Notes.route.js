// Importing important Notess
const express = require('express');
const app = express();
const Noteroute = express.Router();
let Notes = require('../Models/Notes');
var nodemailer = require('nodemailer');



Noteroute.route('/update').post(function(req, res) {
    Notes.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            Notesname:req.body.Notesname,
            fullname:req.body.fullname,



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Notes':success});
                }
                
             }
         }
    
      
    )
    

    
});

Noteroute.route('/updatestatus').post(function(req, res) {
    Notes.findByIdAndUpdate(
        { _id:req.body.id},


        {
            status:req.body.status



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Notes':success});
                }
                
             }
         }
    
      
    )
    

    
});

Noteroute.route('/add').post(function(req, res) {

    let Notess = new Notes(req.body);
    Notess.save()
        .then(Notes => {
            res.status(200).json({'Notes': 'Notes added successfully'});
        })
        .catch(err => {
          console.log("erer")
        });
});


Noteroute.route('/getall').get(function(req, res) {

    Notes.find(
        { }, 

       
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Notes':success});
                }
                
             }
         }
    
      
    )
});


Noteroute.route('/find').post(function(req, res) {
    Notes.find(
        { Notes_id:req.body.Notes_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Notes':success});
                }
                
             }
         }
    
      
    )
    

    
});


Noteroute.route('/finduserdata').post(function(req, res) {
    Notes.find(
        { reciever:req.body.reciever}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Notes':success});
                }
                
             }
         }
    
      
    )
    

    
});











module.exports = Noteroute;
