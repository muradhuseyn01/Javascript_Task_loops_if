//Task1.8

let side1 = 4,
    side2 = 4,
    side3 = 4;
if (side1 == side2 && side2 == side3 && side1 == side3) {
    console.log("Beraberterefli ucbucaq");
}
else if ((side1 == side2) || (side2 == side3) || (side3 == side1)) {
    console.log("Beraberyanli ucbucaq");
}
else {
    console.log("Muxtelifterefli ucbucaq");
}
