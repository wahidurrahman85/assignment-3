var speech = "i am a good person. i don't   disturb me at night.";
var count = 0;
for (let i = 0; i < speech.length; i++) {
    const char = speech[i];
    if ( char == " " && speech[i - 1] != " "){
        count++
    }
   
}
console.log(count);
