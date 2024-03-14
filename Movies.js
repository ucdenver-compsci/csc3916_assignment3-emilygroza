var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.DB);

// Movie schema
const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true},
    releaseDate: Date, 
    genre: {
        type: String,
        enum: [
            'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western', 'Science Fiction'
        ],
    },
    actors: [{
        actorName: String,
        characterName: String,
    }],
});

const movie1 = new MovieSchema({
    title: 'The Lord of the Rings: The Return of the King',
    releaseDate: 2003,
    genre: 'Fantasy',
    actors: [{
        actorName: 'Elijah Wood',
        characterName: 'Frodo Baggins'
    },
    {
        actorName: 'Sean Astin',
        characterName: 'Samwise Gamgee'
    },
    {
        actorName: 'Ian McKellen',
        characterName: 'Gandalf'
    }
]
})

const movie2 = new MovieSchema({
    title: 'Up',
    releaseDate: 2009,
    genre: 'Adventure',
    actors: [{
        actorName: 'Edward Asner',
        characterName: 'Carl Fredricksen'
    },
    {
        actorName: 'Bob Peterson',
        characterName: 'Dug'
    },
    {
        actorName: 'Jordan Nagai',
        characterName: 'Russell'
    }
]
})

const movie3 = new MovieSchema({
    title: "Harry Potter and the Sorcerer's Stone",
    releaseDate: 2001,
    genre: 'Fantasy',
    actors: [{
        actorName: 'Daniel Radcliffe',
        characterName: 'Harry Potter'
    },
    {
        actorName: 'Emma Watson',
        characterName: 'Hermoine Granger'
    },
    {
        actorName: 'Rupert Grint',
        characterName: 'Ron Weasley'
    }
]
})

const movie4 = new MovieSchema({
    title: 'Rogue One: A Star Wars Story',
    releaseDate: 2016,
    genre: 'Science Fiction',
    actors: [{
        actorName: 'Felicity Jones',
        characterName: 'Jyn Erso'
    },
    {
        actorName: 'Diego Luna',
        characterName: 'Cassian Andor'
    },
    {
        actorName: 'Donnie Yen',
        characterName: 'Chirrut Imwe'
    }
]
})

const movie5 = new MovieSchema({
    title: 'Fast & Furious Presents: Hobbs & Shaw',
    releaseDate: 2019,
    genre: 'Action',
    actors: [{
        actorName: 'Dwayne Johnson',
        characterName: 'Luke Hobbs'
    },
    {
        actorName: 'Jason Statham',
        characterName: 'Deckard Shaw'
    },
    {
        actorName: 'Idris Elba',
        characterName: 'Brixton Lore'
    }
]
})

// return the model
module.exports = mongoose.model('Movie', MovieSchema);