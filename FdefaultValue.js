function add(num1, num2 = 30) {
  return num1 + num2;
}
const total = add(10, 50);
console.log(total);

//duita number er ekta value jodi ami pass na kori tahole NaN show korbe.
//r jodi parameter e ekta number define kore dei tahole sei value ta nibe.
//r jodi duita value function call er maddhome pathai tahole parameter e define kore dewa valu ta nibena.

function createUser(name, age = 18) {
  const user = {};
  user.name = name;
  user.age = age;
  return user;
}
const result = createUser("mou");
console.log(result);
