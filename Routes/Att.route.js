// Importing important Attdatas
const express = require('express');
const app = express();
const Attroute = express.Router();
let Attdata = require('../Models/Att');
var nodemailer = require('nodemailer');



Attroute.route('/update').post(function(req, res) {
    Attdata.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            chkouttime:req.body.time,



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Attdata':success});
                }
                
             }
         }
    
      
    )
    

    
});

Attroute.route('/updateptime').post(function(req, res) {
    Attdata.findOneAndUpdate(
        { userid:req.body.user_id,
            date:req.body.date
            }, 
        {
            
            $inc:{
                workingtime:1}



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Attdata':success});
                }
                
             }
         }
    
      
    )
    

    
});

Attroute.route('/updateitime').post(function(req, res) {
    Attdata.findOneAndUpdate(
        { userid:req.body.user_id,
        date:req.body.date
        }, 

        {
            
            $inc:{
                Idletime:1}



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Attdata':success});
                }
                
             }
         }
    
      
    )
    

    
});


Attroute.route('/updatetime').post(function(req, res) {
    console.log(req)
    Attdata.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            chkouttime:req.body.time,



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Attdata':success});
                }
                
             }
         }
    
      
    )
    

    
});

Attroute.route('/add').post(function(req, res) {

    let Attdatas = new Attdata(req.body);
    Attdatas.save()
        .then(Attdata => {
            res.status(200).json({'Attdata': 'Attdata added successfully'});
            
        })
        .catch(err => {
          console.log("erer")
        });
});


Attroute.route('/getall').get(function(req, res) {

    Attdata.find(
        { }).sort({createdAt: -1}).exec(

       
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Attdata':success});
                }
                
             }
         }
    
      
    )
});




Attroute.route('/find').post(function(req, res) {
    Attdata.find(
        { Attdata_id:req.body.Attdata_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Attdata':success});
                }
                
             }
         }
    
      
    )
    

    
});

Attroute.route('/finduserdata').post(function(req, res) {
    Attdata.find(
        { userid:req.body.userid}).sort({createdAt: -1}).exec(
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Attdata':success});
                }
                
             }
         }
    
      
    )
    

    
});


Attroute.route('/findcatt').post(function(req, res) {
    Attdata.find(
        { date:req.body.date},
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Attdata':success});
                }
                
             }
         }
    
      
    )
    

    
});

Attroute.route('/findcattuser').post(function(req, res) {
    Attdata.find(
        { date:req.body.date,
        userid:req.body.userid,
        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Attdata':success});
                }
                
             }
         }
    
      
    )
    

    
});











module.exports = Attroute;
