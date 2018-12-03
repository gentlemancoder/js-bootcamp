const createCounter = () => {
    let count = 0

    return {
        increment(){
            count++
        },
        decrement(){
            count --
        },
        get(){
            return count
        }
    }
}

const counter = createCounter()

counter.increment()
counter.decrement()
counter.decrement()
counter.count = 0
console.log(counter.get())

// Adder
const createAdder = (a) => {
    return (b) => {
        return a+b
    }
}
const add = (a,b) => a+b

const addTen = createAdder(10)


const add100 = createAdder(100)

// Tipper

const createTipper = (tipPercent) => {
    return (bill) => {
        return bill * tipPercent
    }
}

const fifteenPercent = createTipper(.15)
const twelvePercent = createTipper(.12)
const twentyPercent = createTipper(.20)

console.log(fifteenPercent(100))
console.log(twentyPercent(100))
console.log(twelvePercent(100))