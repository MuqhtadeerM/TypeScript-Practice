// this is type inference in ts that will automatically identifies the data type of the variable
// const fevoriteShows = ['friends', 'the office', 'breaking bad']

// annotattions:
const fevoriteShowss: String[] = [];
const some: String[][] = [[], []];

// prevent the incomplete values
// fevoriteShowss.push(100);

// help with methods
// fevoriteShowss.map((show: string): string => {
//   return show.concat();
// });

const holidays: (Date | string)[] = [new Date()];
holidays.push("2022-03-03");

holidays.push(new Date());
