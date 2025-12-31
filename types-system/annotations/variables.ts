let age = "three";

let firstName: string = "MM";
let lastName: string = "MMM";

let isVoted: boolean = false;
let notAssigned: undefined = undefined;
let today: Date = new Date();

let Planets: string[] = ["earth", "Mars"];
let lukyNumber: number[] = [3, 4, 7];
let completed: boolean[] = [true, false, true, false];

// classes
class Phone {}
let phone: Phone = new Phone();

// objects
let product: { name: string; price: number } = {
  name: "pen",
  price: 15,
};

let students: {
  name: string;
  age: number;
  isAbleToVote: boolean;
  isEngineer: boolean;
  isWorking: boolean;
} = {
  name: "M",
  age: 15,
  isAbleToVote: true,
  isEngineer: true,
  isWorking: false,
};

// functions

const printer: (content: string) => void = (content: string) => {
  console.log(content);
};

const forecast = ["sunny", "rain", "wind", "cloudy"];
let isSunny;
for (let i = 0; i < forecast.length; i++) {
  if (forecast[i] === "sunny") {
    isSunny = true;
  }
}

// type cannnt be inferred correctly
let tempratures = [8, 5, -2];
let zero: boolean | number = false;

for (let i = 0; i < tempratures.length; i++) {
  if (tempratures[i] < 0) {
    zero = tempratures[i];
  }
}
