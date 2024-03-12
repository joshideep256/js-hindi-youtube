//Immediately invoked function expession(IIFE)

(function chai(){
    //this is a named iife
    console.log(`DB CONNECTED`);
})();

//this semicolon adds an and to the two functions 
//and is needed to end the first code

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh")