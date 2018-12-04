// Callback
const getDataCallback = (callback) =>
setTimeout(() => {
    callback('This is an error', undefined)
    callback('This is an error', undefined)
}, 2000)

getDataCallback((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data)
    }
})

// Promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is my promised sucess data ${data}`)
        // reject('This is my promise error')
        // reject('This is my promise error')
    }, 2000)
})
myPromise = getDataPromise(123)
myPromise.then((data)=> {
    console.log(data)
}, (err) => {
    console.log(err);
})