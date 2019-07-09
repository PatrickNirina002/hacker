var Comment = require('../Model/model.client');
var mailer = require("nodemailer"); 
module.exports.PosteComment = function(req,res) {
//var mailer = require("nodemailer");  
  
    var username = req.body.username
    var gmail = req.body.gmail
    
     
     Comment.find()
            .then(note0 => {
                if(note0.length==0) {
                    id = 0;
                    console.log('mbola',id);
                    
                }else{
                    id = parseInt(note0[note0.length-1].id)+1;
                }

            const insert = new Comment({_id:id,username:username,gmail:gmail});
            ( !username || !gmail)? console.log("non reussi"):insert.save()
                .then(()=>{
                    Comment.find()
                        .then(note=>{
                            res.send(note);
                        })
                })
                .catch(e=>{
                    res.status(500).send({mes:e.mes || "erreur"})
                })
            })
            var smtpTransport = mailer.createTransport({
                service: "Gmail",
                auth: {
                    user: "pjsranaivo@gmail.com",
                    pass: "patricksitraka"
                }
            });
            var mail = {
                from: "pjsranaivo@gmail.com",
                to: "pjsranaivo@gmail.com",
                subject: "leSujetDuMail",
                html: "test"
            }
            // var mail = {
            //     from: "pjsranaivo@gmail.com",
            //     to: "pjsranaivo@gmail.com",
            //     subject: "leSujetDuMail",
            //     html: "leCorpsDeVotreMessageEnHTML",
            //     attachments: [
            //         {
            //           filePath: 'no-reply@accounts.google.com'
            //         },
            //     ]
            // }
            smtpTransport.sendMail(mail, function(error, response){
                if(error){
                    console.log("Erreur lors de l'envoie du mail!");
                    console.log(error);
                }else{
                    console.log("Mail envoyé avec succès!")
                }
                smtpTransport.close();
            });
    }


  