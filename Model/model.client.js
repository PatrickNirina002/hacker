const mongoose = require('mongoose');


const commentaireSchema = mongoose.Schema({
  _id:Number,
  username: String,
  gmail: String,


}, {
  timestamps: true
});




  module.exports=mongoose.model('commentaire',commentaireSchema)