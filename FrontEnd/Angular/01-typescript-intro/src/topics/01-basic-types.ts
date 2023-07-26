
// identify variable type
let name: string = 'Lorena'; // string

name = '123'; // name = 123 -> type number

// use const if the variable won't change
const lastName: string = 'Rojas';

// give two variable types with | (or)
let hpPoints: number | string = 95;
hpPoints ='string value for HP points.';
hpPoints = 100;

// give a value specific
let points: number | 'FULL' = 95;
points ='FULL';
points = 100;

const isAlive: boolean = true;

console.log({name, lastName, hpPoints, points, isAlive});

export {};