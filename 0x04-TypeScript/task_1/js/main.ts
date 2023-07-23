interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
};

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Step 1: Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstLetter}. ${formattedLastName}`;
};

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}
  
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}
  
class Student implements StudentClass {
  private firstName: string;
  private lastName: string;
  
constructor(firstName: string, lastName: string) {
  this.firstName = firstName;
  this.lastName = lastName;
}
  
workOnHomework(): string {
  return 'Currently working';
}
  
displayName(): string {
  return this.firstName;
}
}
  