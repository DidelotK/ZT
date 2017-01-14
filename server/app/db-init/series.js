const Promise = require('bluebird');
const Serie = require('./../model/common/series').model;

const initSeries = {
  init(uploader, episodes) {
    const series = [];
    const promisesSerie = [];
    series.push(new Serie({
      name: 'Breaking Bad',
      description: `Walter White, 50, is a chemistry professor at a New Mexico
       high school. To support Skyler, his pregnant wife, and Walt Junior, his
       disabled son, he is forced to work doubly. His already morose daily
       becomes squarely black when he learns that he is suffering from an
       incurable cancer of the lungs. Doctors give him no more than two years to
       live. To quickly raise a lot of money to save his family, Walter sees
       only one solution: to use his chemistry knowledge to make and sell
       crystal meth, a synthetic drug that pays a lot. He proposes to Jesse,
       one of his former pupils become a small dealer of second zone, to team
       up with him.`,
      actors: [
        'Bryan Cranston',
        'Aaron Paul',
        'Anna Gunn'
      ],
      posterLink: 'http://images.amcnetworks.com/amc.com/wp-content/uploads/' +
      'mt-legacy/breaking-bad/TWD-S5-Key-Art-398.jpg',
      productionDate: new Date(2008,1),
      director: 'Vince Gilligan',
      country: 'USA',
      episodes: [episodes[0]._id],
      uploader: uploader._id
    }));

    series.forEach(serie => {
      promisesSerie.push(serie.save());
    });

    series.push(new Serie({
      name: 'Arrow',
      description: `The new adventures of Green Arrow / Oliver Queen,
       ultra-effective fighter from the world of DC Comics and above all archer
       with crazy talent, which belongs to the Justice League. Disappeared at
       sea with his father and his girlfriend, he is found alive 5 years later
       on an island near the Chinese coasts. But he changed: he is strong,
       courageous and determined to rid Starling City of his criminals ...`,
      actors: [
        'Stephen Amell',
        'David Ramsey',
        'Willa Holland'
      ],
      posterLink: 'http://screencrush.com/442/files/2013/08/' +
      'arrow_season2_poster.jpg?cdnnode=1',
      productionDate: new Date(2012,4),
      director: 'Andrew Kreisberg',
      country: 'USA',
      uploader: uploader._id
    }));

    series.push(new Serie({
      name: 'Heroes',
      description: `Across the globe, a number of seemingly ordinary individuals
       appear to be endowed with extraordinary abilities: cellular regeneration
       , teleportation, telepathy ... They do not know what is happening to them
       , nor the repercussions that all this could have. They still do not know
        that they are part of an evolution that will change the world forever!`,
      actors: [
        'Milo Ventimiglia',
        'Greg Grunberg',
        'Hayden Panettiere'
      ],
      posterLink: 'http://lowdownradio.com/wp-content/uploads/2010/05/' +
      'heroes-poster.jpg',
      productionDate: new Date(2006,8),
      director: 'Tim Kring',
      country: 'USA',
      episodes: [episodes[0]._id],
      uploader: uploader._id
    }));

    series.push(new Serie({
      name: 'The Walking Dead',
      description: `After an apocalypse that transformed most of the population
       into zombies, a group of men and women led by officer Rick Grimes tries
       to survive ... Together they will have to deal with this new World become
       unrecognizable, through their journey in the deep South of the United
        States.`,
      actors: [
        'Andrew Lincoln',
        'Steven Yeun',
        'Chandler Riggs'
      ],
      posterLink: 'http://www.moviesonline.ca/wp-content/uploads/2010/09/' +
      'TWD_1-SHEET_WEB.jpg',
      productionDate: new Date(2010,5),
      director: 'Robert Kirkman',
      country: 'USA',
      episodes: [episodes[0]._id],
      uploader: uploader._id
    }));

    series.forEach(serie => {
      promisesSerie.push(serie.save());
    });
    return Promise.all(promisesSerie);
  }
};

module.exports = initSeries;
