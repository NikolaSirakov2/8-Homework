let num = 5;

// for (let i = 0; i < num; i++){
//     console.log("test");
// }

function print(num, i){
    if(i === 0){
        return;
    }

    console.log("test2");
    print(num, ++i)
}

print(num, 0);