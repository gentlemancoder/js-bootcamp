// Prototypal Inheritance

class Person {
    constructor(firstName, lastName, age, likes=[]) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
    
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        
        return bio
    }

    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}` 
    }

}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLet() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, grade, age, likes = []) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    
    getBio() {
        return this.grade >= 70 ? `${this.firstName} is passing the course.` : `${this.firstName} is failing the course.`
    }

    updateGrade(points) {
        this.grade += points
    }
}

const me = new Employee('Andrew', 'Mead', 27, 'Teacher', ['Teaching', 'Biking'])
console.log(me.getBio())
console.log(me.getYearsLet())

const him = new Student('Bill', 'Bryson', 45, 21)
console.log(him.getBio())
him.updateGrade(36)
console.log(him.getBio())


const person2 = new Person('Clancy', 'Turner', 54)
person2.fullName ='Ali Ababa'
console.log(person2.getBio())
