const response = await fetch('http://localhost:4001/');

const data = await response.json();

console.log(data);
