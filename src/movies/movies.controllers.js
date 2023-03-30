// Base de datos ficticia
const movieDb = [
    {
        id: 1,
        title: "Titanic",
        descrition: "Lorem",
        year: 1997,
        director: "James Cameron"
    },
    {
        id: 2,
        title: "Rescatando al soldado Ryan",
        descrition: "Segunda guerra mundial",
        year: 1998,
        director: "Steven Spielberg"
    }
];

let movieId = 3;

const findAllMovies = async () => {
    return movieDb;
};

const findMovieById = async (id) => {
    const data = movieDb.find(movie => movie.id ===id);
    return data;
};

const createrMovie = async (movieObj) => {
    const newMovie = {
        id: movieId++,
        title: movieObj.title || 'Untitle',
        description: movieObj.description || 'Lorem',
        year: movieObj.year || 2000,
        director: movieObj.director || 'Anonymous'
    }
    movieDb.push(newMovie);
    return newMovie;
};

module.exports = {
    findAllMovies,
    findMovieById,
    createrMovie
}
