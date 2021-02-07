

function arrayTotal (numbers){ 

    var sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
        
    }
 return sum;
}
var numbers = [45, 65, 34, 34, 23, 36, 34];
var result = arrayTotal(numbers);
console.log(result);

 console.log()
// console.log("Total Number:", sum);
