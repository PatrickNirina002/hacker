module.exports = (app) => {

  const pers = require('../Controleur/controle');
  app.post('/profil', pers.PosteComment);
  // app.get('/profil', pers.findAll);
  // app.get('/profil/:profilId', pers.findOne);
  // app.get('/user/:photo_profil', pers.lireImage);
  // // app.put('/profil/:profilId', profil.update);
  // // app.delete('/profil/:profilId', profil.delete);
  
}