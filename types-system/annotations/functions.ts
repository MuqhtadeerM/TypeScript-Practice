const multiply = (x: number, y: number) => {
  return x + y;
};

const ad = (x: number, y: number): number => {
  return x * y;
};

function subs(x: number, y: number): number {
  return x - y;
}

function devid(x: number, y: number) {
  return x / y;
}

const earth = {
  date: new Date(),
  velocity: 4.5,
};
const logeVelocity = ({
  date,
  velocity,
}: {
  date: Date;
  velocity: number;
}): void => {
  console.log(date);
  console.log(velocity);
};
