const gradeCalc = function(grade, max){
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



console.log(gradeCalc(15, 20))

console.log(gradeCalc(12, 15))

console.log(gradeCalc(99, 100))

