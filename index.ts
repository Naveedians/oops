#!/user/bin/env/ node
import inquirer from "inquirer"; // Importing the inquirer module for user input

class Student {
    name: string; // Property to store the student's name

    constructor(n: string) {
        this.name = n; // Initialize the name property with the provided value
    }
}

class Person {
    students: Student[] = []; // Array to store the list of students

    addStudent(obj: Student) {
        this.students.push(obj); // Method to add a student to the array
    }
}

const persons = new Person(); // Create an instance of the Person class

// Asynchronous function to handle the main program logic
const programmStart = async (persons: Person) => {
    do {
        console.log("Welcome Guest"); // Welcome message

        // Prompt the user to select who they want to talk to
        const answer = await inquirer.prompt([
            {
                type: "list",
                message: "Who would you like to talk to?",
                name: "select",
                choices: ["Myself", "Student"]
            }
        ]);

        // Handle the case where the user selects "Myself"
        if (answer.select === "Myself") {
            console.log("I am talking to myself");
            console.log("I am fine.");
        } 
        // Handle the case where the user selects "Student"
        else if (answer.select === "Student") {
            // Prompt the user to input the name of the student they want to talk to
            const studentAnswer = await inquirer.prompt({
                type: "input",
                message: "Who do you want to talk to?",
                name: "Student"
            });

            // Check if the student already exists in the array
            const student = persons.students.find(s => s.name === studentAnswer.Student);

            // If the student does not exist, add them to the array
            if (!student) {
                const newStudent = new Student(studentAnswer.Student);
                persons.addStudent(newStudent);
                console.log(`Hello, I am ${newStudent.name}, and I am ok`);
                console.log(persons.students); // Print the list of students
            } 
            // If the student already exists, print their information
            else {
                console.log(`Hello, I am ${student.name}, and I am ok ......`);
                console.log(persons.students); // Print the list of students
            }
        }
    } while (true); // Keep repeating the process indefinitely
};

// Start the program
programmStart(persons);
