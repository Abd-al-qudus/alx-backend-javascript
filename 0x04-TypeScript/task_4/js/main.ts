import { Subjects } from "./subject";

// Step 1: Create the constants for Cpp, Java, and React subjects
const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

// Step 2: Create the cTeacher object with experienceTeachingC = 10
const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// Step 3: Log the results for Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Step 4: Log the results for Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Step 5: Log the results for React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

