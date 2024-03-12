const user = {
    username:"hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the site`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //in browser the output will be the (windows object).
//                    //ouput for the current content for the this is empty object.

// function chai(){
//     let username="hitesh"
//     console.log(this);
// }

// chai()

// const chai = function(){
//     let username="hitesh"
//     console.log(this.username);  //undefined here
// }

// const chai = () => {
//     let username = "hitesh"
//     console.log(this); //also undefined here
// }

//chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username: "hitesh"})

console.log(addTwo(3,4));