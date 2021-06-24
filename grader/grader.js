class App {
    startProject() {
        let student = {
            name: "",
            age: "",
            grade: ""
        }
        this.askName(student);
    }
    askName(student) {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('What is your name?', name => {
            if (name == "" || name == undefined) {
                readline.close();
                this.askName(student);
            }
            else {
                student.name = name;
                readline.close();
                this.askAge(student);
            }
        });
    }
    askAge(student) {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('How old are you?', age => {
            if (isNaN(age)) {
                readline.close();
                this.askAge(student);
            }
            else {
                student.age = age;
                readline.close();
                this.askGrade(student);
            }
        });
    }
    askGrade(student) {
        console.log(student.name);
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('Please enter a number grade no less than 0', grade => {
            if (isNaN(grade) || grade < 0) {
                readline.close();
                this.askGrade(student);
            }
            else {
                student.grade = grade;
                readline.close();
                this.calcGrade(student);
            }
        });
    }
    calcGrade(student) {
        let grade;
        switch (true) {
            case student.grade < 60:
                grade = "F";
                break;
            case student.grade >= 60 && student.grade < 70:
                grade = "D";
                break;
            case student.grade >= 70 && student.grade < 80:
                grade = "C";
                break;
            case student.grade >= 80 && student.grade < 90:
                grade = "B";
                break;
            case student.grade >= 90:
                grade = "A";
                break;
        }
        console.log(`${student.name} you recieved a/an ${grade}`);
    }
}
let app = new App();
app.startProject();