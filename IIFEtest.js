let global = "Hello";

let res = (function something(data) {
    console.log("This is test!");
    var b = "Nothing";
    console.log(data);
    console.log(global);

    return function() {
        console.log(b);
    };
})("text");

console.log(res());