// i = 2
// while(i <= 65536 ){
//     console.log(`${i}`);
//     i += i;
// }

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("all cones are " + allCones);

var i = 0;
    do {
        var soldCones = Math.floor(Math.random() * (5 - 1)) + 1;
        if(allCones === 0){
            console.log("Yay! sold them all");
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

