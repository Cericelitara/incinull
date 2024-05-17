interface Person {
  name: string;
  age: number;
  isEmployed: boolean;
}

let sadik: Person = {
  name: 'Sadik',
  age: 30,
  isEmployed: true
};

function displayPerson(person: Person): void {
  console.log(`Name: ${person.name}, Age: ${person.age}, Employed: ${person.isEmployed}`);
}

// Usage
displayPerson(sadik);
