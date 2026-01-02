// Basic syntx with interfaces 

interface Movie {
  title: string;
  date: Date;
  rating: number;
  genre: string[];
  report(): string;
}

const currentMovie = {
  title: "done",
  date: new Date(2021, 9, 24),
  rating: 8.2,
  genre: ["action", "adventure", "drama"],

  report(): string {
    return `title: ${this.title}`;
  },
};

const logMovie = (movie: Movie): void => {
  console.log(movie.report());
};
logMovie(currentMovie);


