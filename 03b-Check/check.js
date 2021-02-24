// * Create a command line node application that takes in 
// two parameters and outputs whether they are equal or not.
// * Start by simply logging the value of each argument to console. 
// Then use your usual JavaScript approach (recall that Node is still just JavaScript).


const a = process.argv[2];
const b = process.argv[3];

if (a === b){
    console.log(true);

} else {
    console.log(false);
}
