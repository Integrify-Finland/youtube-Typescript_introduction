console.log("Hello world!");

// javascript: string, number, boolean

// syntax: name of variable : type
let firstName: string = "Andrea";

const age: number = 7;

const isAdded: boolean = true;

// object or array

// way1
// const instructor: {
//   name: string;
//   course: string;
// } = {
//   name: "Andrea",
//   course: "Full-stack",
// };

// way2
type Instructor = {
  name: string;
  course: string;
};

//
// interface Instructor {
//   name: string;
//   course: string;
// }

const instructor: Instructor = {
  name: "Andrea",
  course: "Full-stack",
};

instructor.course;

// array

// const numberList: number[] = [1, 2, 3, "andrea"];

const numberList: number[] = [1, 2, 3];

// [number] vs number[]

// function
function addNumber(a: number, b: number): number {
  return a + b;
}

function addNumbers(a: number, b: number): void {
  a + b;
}
console.log(addNumber(1, 2));
