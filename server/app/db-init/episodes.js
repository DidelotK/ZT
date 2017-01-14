const Promise = require('bluebird');
const Episode = require('./../model/common/episodes').model;

const initEpisodes = {
  init(uploader, links) {
    const episodes = [];
    const promisesEpisode = [];
    episodes.push(new Episode({
      saison: '1',
      number: '1',
      name: 'Chute libre',
      resume: 'Professeur de chimie dans un lycée, Walter White travaille ' +
      'parallèlement dans une station de lavage de voitures afin de boucler ' +
      'les fins de mois de sa famille, composée de sa femme Skyler, qui est ' +
      'enceinte, et de son fils Walter Jr, un adolescent handicapé. Alors ' +
      'qu\'il découvre qu\'il est atteint d\'un cancer du poumon en stade ' +
      'terminal, Walter décide de reprendre sa vie en main. Utilisant ses ' +
      'connaissances en chimie, il s\'attelle à la fabrication de ' +
      'méthamphétamines, avec l\'aide de Jesse Pinkman, un ancien ' +
      'élève qui s\'est spécialisé dans le trafic de drogues...',
      links: [links[0]._id,links[1]._id],
      uploader: uploader._id
    }));

    episodes.forEach(episode => {
      promisesEpisode.push(episode.save());
    });

    return Promise.all(promisesEpisode);
  }
};

module.exports = initEpisodes;
