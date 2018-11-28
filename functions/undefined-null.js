let getTip = function(total, tipPercent = .2){
 return total * tipPercent
}

let tip = getTip(40, .25)
console.log(`Your tip is $${tip}.`)