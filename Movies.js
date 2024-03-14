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

const movie3 = new MovieSchema({
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

const movie4 = new MovieSchema({
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

const movie5 = new MovieSchema({
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

// return the model
module.exports = mongoose.model('Movie', MovieSchema);