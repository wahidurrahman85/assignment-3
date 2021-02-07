var names = [3, 4, 5, 6, 4, 6, 3, 45];
var uniqueName = [];
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    var index = uniqueName.indexOf(element);
    if(index == -1);
    uniqueName.push(element);
}

console.log(uniqueName);