var inch = 156;
var feet = inch / 12;
//console.log(feet);

function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

var totalFeet = inchToFeet(780);

// console.log(totalFeet);


// var marks = [89, 34, 56, 36, 12, 89, 34, 67]
//  for (let i = 0; i < marks.length; i++) {
//      const element = marks[i];
//      console.log(element);
     
//  }


//  function largestNumber(numbers){
//      var larger = numbers[0];
//      for (let i = 0; i < numbers.length; i++) {
//          const element = numbers[i];
//          if(element > larger){
//             var larger = element;
//          }
//      }
//      return larger;
//  }

//  var marks = [89, 34, 56, 36, 12, 89, 34, 67]
//  var result = largestNumber(marks);
//  console.log(result)

// var age = 26;
// var beverage = (age < 21) ? "Beer" : "Juice";
// console.log(beverage); // "Beer"


// var age =20;
// var bevarage = (age >= 25) ? "win" : "water"
// console.log(bevarage);

// hour
// if hour is between 6am and 12pm: Good Morning;
//  if it is between 12pm and 6pm : Good Afternoon;
// otherwise: Good Evening;

let hour = 6;
if(hour >= 6 && hour < 12){
    console.log("Good Morning")
}
else if(hour >= 12 && hour < 6){
    console.log("Good Afternoon");
    }
else{
    console.log("Good Evening")
}