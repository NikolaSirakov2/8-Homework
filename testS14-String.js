let string =  "Today is a grЕat day for Тest";

let array = string.toLowerCase().split(" ");
let result = [];

for(let i = 0; i < array.length; i++){
    if(array[i].length > 6){
        console.log(`${array[0]}-${array[1]}-${array[2]}`);
        break;
    } 

    if(i === array.length - 1){
        console.log(`${array[0]}-${array[1]}-${array[2]}-${array[3]}`);
    }
}