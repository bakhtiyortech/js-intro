const movieCollection = {
  movies: [],
  addMovie(title, director, genre, year) {
    let newMovie = {
      title: title,
      director: director,
      genre: genre,
      year: year,
    };
    this.movies.push(newMovie);
  },
  getMovieByTitle: function (title) {
    return `${this.title}`;
  },
  getMoviesByGenre: function (genre) {
    return `${this.genre}`;
  },
};
