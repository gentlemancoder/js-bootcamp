let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book){
    return{
    summary: `${book.title} by ${book.author}.`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//Challeng area

// create function take fahr in return obejects with all three

let tempConverter = function(fahr){
    return{
        degreesFahrenheit: fahr,
        degreesKelvin: (fahr + 459.67) * 5/9,
        degreesCelcius: (fahr -32) * (5/9)
    }
}

let oneHundredDegrees = tempConverter(100)
console.log(oneHundredDegrees)