console.log('ciao Mundo');

const inputs = document.querySelectorAll('.controls input');

// // Query Selector returns a NODE_LIST not an Array
// console.log(inputs);

function handleUpdate (){
console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
