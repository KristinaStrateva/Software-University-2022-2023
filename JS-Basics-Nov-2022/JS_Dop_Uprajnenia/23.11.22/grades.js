function grades(input) {
    let studentsAmount = Number(input[0]);

    let failedStudents = 0;
    let studentsBetween3And399 = 0;
    let studentsBetween4And499 = 0;
    let topStudents = 0;
    let sumGrades = 0;

    for (let i = 1; i <= studentsAmount; i++) {
        let currentStudentGrade = Number(input[i]);

        if (currentStudentGrade < 3) {
            failedStudents++;
        } else if (currentStudentGrade < 4) {
            studentsBetween3And399++;
        } else if (currentStudentGrade < 5) {
            studentsBetween4And499++;
        } else {
            topStudents++
        }

        sumGrades += currentStudentGrade;
    }

    let failedStudentsPercent = (failedStudents / studentsAmount) * 100;
    let studentsBetween3And399Percent = (studentsBetween3And399 / studentsAmount) * 100;
    let studentsBetween4And499Percent = (studentsBetween4And499 / studentsAmount) * 100;
    let topStudentsPercent = (topStudents / studentsAmount) * 100;
    let averageGrade = sumGrades / studentsAmount;

    console.log(`Top students: ${topStudentsPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${studentsBetween4And499Percent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${studentsBetween3And399Percent.toFixed(2)}%`);
    console.log(`Fail: ${failedStudentsPercent.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}

grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);