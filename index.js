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

//Used For Loop to Evaluate Array and Make Changes
function titleCased() {
  let newTitled = [];
  for(let x = 0; x < tutorials.length ; x++){
    newTitled[x] = tutorials[x].charAt(0).toUpperCase() + tutorials[x].slice(1);
  }
return newTitled.join(' ');
}
console.log(newTitled);
