//Task2.7

var str1 = "racecar";
var str2 = "eye";
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
function isPalindrome(str) {
    var emptystr="";
    for(var i=str.length-1; i>=0; i--){
        emptystr+= str[i];
    }
    if(emptystr==str){
        return true 
    } else{
        return false;
    }
}
