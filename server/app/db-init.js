'use strict';
const User = require('./model/common/users').model;
const Film = require('./model/common/films').model;
/*
 const Link = require('./model/common/links').model;
 const Serie =  require('../model/common/series').model;
 const Episode = require('../model/common/episodes').model;
 */


const db = {
  init() {
    User.findOne({email: 'Admin'}, (err, user) => {
      if (err) {
        console.log(err);
      }

      if (!user) {
        const admin = new User({
          email: 'Admin',
          password: 'admin'
        });
        admin.save();
      }
    });

    // To populate the database in order to test
    /*
     const links = [];
     const downloadLinks = [];
     downloadLinks[0] = new Link({
     host: 'Mega',
     link: 'Link..',
     quality: 'HD'
     });

     downloadLinks.forEach(film => {
     film.save();
     });
     */
    /*
    const film = new Film({
      name: "Le Fondateur",
      synopsis: `Dans les années 50, Ray Kroc rencontre les frères McDonald qui tiennent un restaurant de burgers en Californie. Bluffé par leur concept, Ray leur propose de franchiser la marque et va s'en emparer pour bâtir l'empire que l'on connaît aujourd'hui.`,
      actors: [
        'Michael Keaton',
        'Linda Cardellini'
      ],
      posterLink: 'http://www.zickma.fr/wp-content/uploads/2016/11/Le-fondateur-The-founder-affiche-fr.jpg'
    });
    film.save();
    */
  }
};

module.exports = db;
