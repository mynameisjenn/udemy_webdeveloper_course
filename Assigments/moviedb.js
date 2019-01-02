var movies = [
  { title: "Gone With The Wind", rating: 5, isWatched: false },
  { title: "Titanic", rating: 3, isWatched: true },
  { title: "The Matrix", rating: 4, isWatched: true },
  { title: "Home Alone", rating: 2, isWatched: true }
];

function listMovies(movie) {
  var result = "You have ";

  if (movie.isWatched) {
    result += "watched ";
  } else {
    result += "not watched ";
  }
  result += '"' + movie.title + '" - ';
  result += movie.rating + " stars";
  return result;
}

movies.forEach(function(movie) {
  console.log(listMovies(movie));
});
