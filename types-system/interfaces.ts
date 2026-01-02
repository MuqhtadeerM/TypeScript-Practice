// Basic syntx with interfaces

interface Detail {
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

const track = {
  genre: "rock",
  exclusive: true,
  duration: 129,

  report(): string {
    return `current song: ${this.genre}`;
  },
};

const logDetails = (item: Detail): void => {
  console.log(item.report());
};

// these are generic functions whhich is more reusable qutes
logDetails(currentMovie);
logDetails(track);
