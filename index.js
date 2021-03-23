const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials
}

//Use Map Function to Capitalize Letters
function titleCased(newTitled) {
    newTitled[x] = tutorials[x].charAt(0).toUpperCase() + tutorials[x].slice(1);
    return newTitled.join(' ');
  }
    let result = tutorials.map(titleCased);

console.log(result);
