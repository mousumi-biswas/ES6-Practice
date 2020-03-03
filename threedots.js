const ages = [12, 45, 67, 89];
const ages2 = [15, 67, 32];

const allAges = ages.concat(ages2).concat([5]);
const allAges2 = [...ages, ...ages2]; //spread operator
//console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
//const maximum = Math.max(business, minister, sochib);
//console.log(maximum);

const numbers = [34, 78, 90];
//const maximum = Math.max(numbers); //it will show NaN
const maximum = Math.max(...numbers);
console.log(maximum);
