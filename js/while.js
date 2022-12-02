let num = 2;
while(num <= 65536 ){
    console.log(num);
    (num *= 2);
}
//
// let numMultiplyBy = 2;
// let counter = 0;
// while(counter < 16) {
//     console.log(numMultiplyBy);
//     numMultiplyBy = numMultiplyBy * 2;
//     counter++;
// }

// for (let i = 0, num = 2; i < 16; i++){
//     console.log(num);
//     num *= 2;
// }

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("all cones are " + allCones);

var i = 0;
    do {
        var soldCones = Math.floor(Math.random() * (5 - 1)) + 1;
        if(allCones === 0){
            console.log("Yay! I sold them all");
            break;
        }else if(allCones >= soldCones){
            console.log("Just sold " + soldCones + " cones.");
            allCones = allCones - soldCones;
            console.log("remaining cones " + allCones);
            continue;
        }else if(allCones < soldCones){
            console.log("cannot sell you! I have " + allCones + " because you want " + soldCones);
        }
        i++
    } while (i < 100);

