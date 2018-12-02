

const Person = function(firstName, lastName, age) {
   this.firstName = firstName
   this.lastName = lastName
   this.age = age
}

const me = new Person('Andrew', 'Mead', 27)
console.log(me)

const person2 = new Person('Clancy', 'Turner', 54)
console.log(person2);
