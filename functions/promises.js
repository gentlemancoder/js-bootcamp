// Callback
const getDataCallback = (num, callback) =>
setTimeout(() => {
    if (typeof num == 'number') {
        callback(undefined, num * 2)
    } else {
        callback('Number must be provided')
    }
}, 2000)

// Callback hell -- deep nesting
getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('Error')
            } else{
                console.log(data)
            }
        })
    }
})

// Promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num*2) : reject('Number must be provided')
    }, 2000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`);
    }, (err) => {
        console.log(data)
    })
}, (err) => {
    console.log(err);
})

// A second way to chain

getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {console.log(err)
})
