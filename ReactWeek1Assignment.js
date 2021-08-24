class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }

}

class Bootcamp {
    // if students array is not passed in, then initialize it to an empty array
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
        else {
            console.log(`${student.email} already exists.`);
        }
      
        // console.log(this.students);
        return this.students;
    }
}

// const test2 = new Student("Student 2", "student2@email.com", "Web Dev Fundamentals");
// const test1 = new Student("Student 1", "student1@email.com", "Web Dev Fundamentals");

// const nucamp = new Bootcamp("NuCamp", "1");

// nucamp.registerStudent(test2);
// nucamp.registerStudent(test2);
// nucamp.registerStudent(test1);
// console.log(nucamp.registerStudent(test1));


// console.log("Ending scripst.");