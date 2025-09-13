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
