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

console.log(this); //in browser the output will be the (windows object).
                   //ouput for the current content for the this is empty object.


                   