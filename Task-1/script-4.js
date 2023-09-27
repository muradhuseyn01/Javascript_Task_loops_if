//Task1.4

let num = 2,
    year = 2011;
if (num > 1 || num <= 12) {
    console.log("Invalid month");

    if (num == 4 || num == 6 || num == 9 || num == 11) {
        console.log("30 days month")
    }
    else if (num == 2) {
        if ((year % 4 == 0) || (year % 400 == 0)) {
            console.log("29 days");
        }
        else if (year % 100 == 0) {
            console.log("28 days");
        }
        else {
            console.log("28 days");
        }
    }
    else {
        console.log("31 days month");
    }
}
