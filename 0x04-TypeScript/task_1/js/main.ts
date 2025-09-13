// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // only modifiable at initialization
  readonly lastName: string; // only modifiable at initialization
  fullTimeEmployee: boolean; // always required
  yearsOfExperience?: number; // optional
  location: string; // always required
  [key: string]: any; // allows any additional attributes
}

// Example usage:
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // extra attribute
};

console.log(teacher3);

// Directors interface extends Teacher
interface Director extends Teacher {
  numberOfReports: number; // required attribute
}

// Example usage
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Function interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher('John', 'Doe')); // Output: J. Doe
console.log(printTeacher('Alice', 'Johnson')); // Output: A. Johnson
