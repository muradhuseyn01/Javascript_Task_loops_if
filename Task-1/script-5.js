//Task1.5

let bal = prompt("bali girin");
if (bal <= 40) {
    console.log('telebe bali asagidir.');
}
else if ((bal <= 50) && (bal > 40)) {
    console.log('E grade');
}
else if ((bal <= 60) && (bal > 50)) {
    console.log('D grade');

} else if ((bal <= 70) && (bal > 60)) {
    console.log('C grade');
}
else if ((bal <= 80) && (bal > 70)) {
    console.log('B grade');
}
else if ((bal <= 90) && (bal > 80)) {
    console.log('A grade');
}
else if ((bal <= 100) && (bal > 90)) {
    console.log('S grade');
}
else{
    console.log('invalid marks');
}
