const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
// find the index of the name that needs to be removed
const index = names.indexOf(nameToRemove)

// Code done
if(index !== -1){
    names.splice(index,1)
}

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// I am adding a new line 
// am from remote
