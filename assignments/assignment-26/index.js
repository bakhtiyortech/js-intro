/* ----- Task-1 ------ */

const movie = {
  title: "Avatar",
  director: "James Cameron",
  releaseYear: 2009,
  genre: "fantasy",
  rating: 7.9,
};

/* ----- Task-2 ------ */

console.log(movie.title);
console.log(movie.director);
console.log(movie.releaseYear);
console.log(movie.genre);
console.log(movie.rating);

console.log(movie["title"]);
console.log(movie["director"]);
console.log(movie["releaseYear"]);
console.log(movie["genre"]);
console.log(movie["rating"]);

/* ----- Task-3 ------ */

console.log(movie.producer);

/* ----- Task-4 ------ */

movie.rating = 9.1;
console.log(movie.rating);

/* ----- Task-5 ------ */

movie.boxOffice = "$2,923,000,000";
console.log(movie.boxOffice);

/* ----- Task-6 ------ */

delete movie.boxOffice;
console.log(movie.boxOffice);

/* ----- Extra Challenge ----- */

const movieAvatar = function (obj) {
  return `The movie ${obj.title} was directed by ${obj.director} and was released in ${obj.releaseYear}. It is a ${obj.genre} film with a rating of ${obj.rating}.`;
};
console.log(movieAvatar(movie));
