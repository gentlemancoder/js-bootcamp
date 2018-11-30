const gradeCalc = (grade, max) => {
    if (typeof grade !== 'number' || typeof max !== 'number'){  
        throw Error('Your input was not a number!')
    }
    const percent = grade / max * 100
    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${percent}%)!`    
}

try {
    console.log(gradeCalc(15, 'Fish'))    
} catch (error) {
    console.log(error.message);
    
}


console.log(gradeCalc(12, 15))

console.log(gradeCalc(99, 100))

