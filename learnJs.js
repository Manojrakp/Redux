const colours = ["red", "blue", "green", "yellow", "rose"];

const a = [1, 2, 3];
const b = [4, 5, 6];
const ab = [...a, "a", ...b];
const id = {
  id: "3",
};
const address = {
  add: "south blocl",
};
const empDep = {
  ...id,
  ...address,
  location: "2345664321asdf",
};
console.log(empDep);
//console.log(ab);
const A = [...a];
//console.log(A);
//const item = colours.map((colour) => console.log(colour));
const Person = {
  name: "john",
  walk() {
    console.log(this);
  },
  talk() {
    // arrow function does not remain this
    var self = this;
    setTimeout(() => {
      console.log("self", self);
    }, 1000);
  },
};

//Person.talk();
// const targetMember = "name";
// Person[targetMember.value] = "john";

//Person.walk();

const walk = Person.walk.bind(Person);

//console.log(walk); // not the reference to the object
// function sayHello() {
//   for (let i = 0; i < 6; i++) {
//     console.log(i);
//   }
//   console.log("latest", i);
// }

// sayHello();
// // not the block scope
// function sayHello1() {
//   for (var i = 0; i < 6; i++) {
//     console.log(i);
//   }
//   console.log("latest", i);
// }

// sayHello1();
