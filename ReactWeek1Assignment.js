class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }

}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    
    // This function takes a single parameter, which takes an object created from the Student class as its argument
    // para: student, tyep: Student object
    registerStudent(student) {
        console.log("Inside registerStudent method.");
        // Creating a temp array that includes a student object that has the same email address as the email address of passed-in student object
        const regStudentCheck = this.students.filter(s => s.email === student.email);

        // If regStudentCheck is empty, it means there is no matching email address 
        if(regStudentCheck.length === 0){
            this.students.push(student);
            console.log(`Registering ${student.email} to the bootcamp ${student.community}.`);
        }
      
        // console.log(this.students);
        return this.students;
    }

    registerStudent2(student) {
        console.log("Inside registerStudent method.");
        // Creating a temp array that includes a student object that has the same email address as the email address of passed-in student object
        const regStudentCheck = this.students.filter(s => s.email === student.email);

        // If regStudentCheck is empty, it means there is no matching email address 
        if(regStudentCheck.length === 0){
            this.students.push(student);
            console.log(`Registering ${student.email} to the bootcamp ${student.community}.`);
        }
      
        // console.log(this.students);
        return this.students;
    }
    

}

// console.log("Starting scripst.");

// const masa = new Student("Masa", "masa@masa.us", "Web Dev Fundamentals");
// const julia = new Student("julia", "julia@masa.us", "Web Dev Fundamentals");

// const nucamp = new Bootcamp("NuCamp", "1");

// nucamp.registerStudent(masa);
// nucamp.registerStudent(masa);
// nucamp.registerStudent(julia);
// console.log(nucamp.registerStudent(julia));


// console.log("Ending scripst.");