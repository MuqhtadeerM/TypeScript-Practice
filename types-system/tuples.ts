const track = {
  genre: "rock",
  exclusive: false,
  duration: 120,
};

// const track1: [string, boolean, number] = ["rock", false, 120];
// we cn aslso write like this

type Track = [string, boolean, number];

const track1: Track = ["rock", false, 120];

const currencytoDollar: [number, number] = [1.38, 2.15];

const current2Dolar = {
  sterling: 1.38,
  euro: 2.15,
};
