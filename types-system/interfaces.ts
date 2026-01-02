const currentMovie = {
  title: "done",
  date: new Data(2021, 9, 24),
  rating: 8.2,
  genre: ["action", "adventure", "drama"],
};

const logMovie = (movie: {
  title: string;
  date: Date;
  rating: number;
  genre: string[];
}): void => {
  console.log(`title: ${movie.title}`);
  console.log(`title: ${movie.date}`);
  console.log(`title: ${movie.rating}`);
  console.log(`title: ${movie.genre}`);
};
