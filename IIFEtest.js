let global = "Hello";

(function something(data) {
    console.log("This is test!");
    var b = "Nothing";
    console.log(data);
    console.log(global);
})("text");