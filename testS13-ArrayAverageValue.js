let array = [4, 5, 7, 8 , -25];
let sum = 0;

function arraySum(masiv, start){
    if(start === masiv.length){
        if(sum > 0){
            return "Positive";
        } else {
            return "Non-positive";
        }
    }

    sum += masiv[start];

    return arraySum(masiv, start + 1);
}

console.log(arraySum(array, 0));

