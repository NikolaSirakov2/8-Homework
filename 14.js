let arr =  [7.1, 8.5, 0.2, 3.7, 0.99, 1.4, -3.5, -110, 212, 341, 1.2, 8];
let newArr = [];

function extractNum(arr, start){
    if(start === arr.length){
        return;
    }

    if(arr[start] > -3 && arr[start] < 3){
        newArr.push(arr[start]);
    }

    return extractNum(arr, ++start);
}

extractNum(arr, 0);

console.log(newArr);