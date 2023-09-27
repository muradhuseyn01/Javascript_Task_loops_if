//Task1.6

let num= 2;
let year=2013;
if(num==4 || num==6 || num==9 || num==11){
    console.log("30 days month")
}
else if(num==2){
    if((year%4==0) || (year%400 ==0)){
        console.log("Leap year");
    }
    else if(year%100==0){
        console.log("not a leap year");
    }
    else{
        console.log("not a leap year");
    }
}
else {
    console.log("31 days month");
}
