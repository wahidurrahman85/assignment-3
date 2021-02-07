function reveseWord(words){
    var reverse = " ";
    for (let i = 0; i < words.length; i++) {
        const char = words[i];
        reverse = char + reverse;
    }
    return reverse;
}
var words = "Wahidur Rahman";
var result = reveseWord(words);
console.log(result);