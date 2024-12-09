function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution 1: Access the array element
console.log(greeter(user[0])); // Accesses the first element of the array

//Solution 2: Modify function to accept an array
function greeterArray(people: string[]) {
  return "Hello, " + people.join(', ');
}
console.log(greeterArray(user)); //Correctly handles an array input