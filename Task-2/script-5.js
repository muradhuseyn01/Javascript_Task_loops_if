//Task2.5

let str2 = "don’t know why";
for (const y in str2) {
    if (str2.hasOwnProperty.call(str2, y)) {
        console.log('yes');
    }
    else{
        console.log('no')
    }
}