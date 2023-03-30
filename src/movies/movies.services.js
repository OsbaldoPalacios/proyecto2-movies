const movieControllers = require('./movies.controllers');

const getAllMovies = (req, res) => {
    movieControllers.findAllMovies()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: 'Bad request', err})
        })
};

const getMovieById = (req, res) => {
    const id = Number(req.params.id)
    movieControllers.findMovieById(id)
    .then((data) => {
        if(!data){
            return res.status(404).json({message: `Movie with id ${id}, not found`})
        }
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(400).json({message: 'Bad request', err})
    })
};

const postNewMovie = (req, res) => {
    const movieObj = req.body
    movieControllers.createrMovie(movieObj)
    .then((data) => {
        res.status(201).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: 'Bad request', err})
    })
};

module.exports = {
    getAllMovies,
    getMovieById,
    postNewMovie
}
