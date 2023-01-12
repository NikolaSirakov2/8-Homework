let array = [4, 6, 11, -1, 0, 15];
let oddOrEven = 0;

function oddOrEvenCheck(arr, start){
    if(start === arr.length){
        return;
    }

    if(arr[start] % 2 === 0){
        oddOrEven += 1;
    } else {
        oddOrEven = oddOrEven-1;
    }

    return oddOrEvenCheck(arr, start + 1);
}

oddOrEvenCheck(array, 0);

if(oddOrEven > 0){
    console.log("Четните числа са повече");
} else if(oddOrEven < 0){
    console.log("Нечетните числа са повече");
} else {
    console.log("Четните и нечетните са равен брой");
}