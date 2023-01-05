let global = "Hello";

let res = (function something(data) {
    // console.log("This is test!");
   
    

    return function() {
        console.log(data);
    };
})("text");

res();