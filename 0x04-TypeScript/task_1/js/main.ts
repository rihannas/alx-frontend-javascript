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

interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName}. ${lastName}`;
}
