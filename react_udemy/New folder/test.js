////// map() : to iterate on each item
const products = ["product1", "product2", "product3"];
const productList = products.map((p) => `<li> ${p}</li>`);
console.log(productList);

/////filter() : filter an arrayi.e. filter on each item using callback function same as above
//return a new array
const ages = [5, 23, 14, 30, 21];
//const adult = ages.filter((age) => (age > 18 ? age : ""));
const adult = ages.filter((age) => age != 30);
console.log(adult);

//// Object Descrution /////
const user1 = {
  name: "Harley",
  email: "harley07@gmail.com",
};

console.log(user1.email); // Output: harley07@gmail.com
console.log(user1["email"]); // Output: harley07@gmail.com

//////Object Descrution/////
const user2 = {
  name: "Sam",
  email: "samEmail@gmail.com",
  country: "US",
};

// const name = user.name;
// const email = user.email;
// const country = user.country;

const { name: userName, email, country } = user2;
console.log(userName, email, country);

///////Spread operator on Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9, 10];
const arr3 = [5, 6];

//before spread operator
const numbers = arr1.concat(arr3, arr2);
//after spread operator
const nos = [...arr1, 5, 6, ...arr2];

console.log(numbers);
console.log(nos);

///// SPread operator on Objects//////
const obj1 = {
  name: "shoda",
  age: 40,
};
const obj2 = {
  address: "USA",
  mobile: 99999,
};

const user = { ...obj1, sex: "male", ...obj2 };
console.log(user);
