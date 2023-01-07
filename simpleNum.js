let n = 10103;
let isSimple = true;

function simpleTest(num){
    let notBaseSimpleNums = num !== 2 && num !== 3 && num !== 5;
    let baseNumCheck = num % 2 ===0 || num % 3 === 0 || num % 5 === 0;
    if(notBaseSimpleNums && baseNumCheck){
       return isSimple = false;
    }
}

simpleTest(n);
console.log(isSimple);