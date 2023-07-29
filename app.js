console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
      for (let i = -1; i >= count; i -= 2) {
        console.log(i);
      }
    } else {
      for (let i = 1; i <= count; i += 2) {
        console.log(i);
      }
    }
  }
  printOdds(-27);
  


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age = 0){
    var aboveSizteen = `Congrats ${userName}, you can drive!`
    var belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`

    if(age >= 16){
        console.log(aboveSizteen);
    } else {
        console.log(belowSixteen);
    }
}

checkAge();


function cartesianPlane(x, y){
    if(x > 0 && y > 0){
        console.log(`(${x}, ${y}) is in Quadrant 1`)
    } else if (x < 0 && y > 0){
        console.log(`(${x}, ${y}) is in Quadrant 2`)
    } else if (x < 0 && y < 0){
        console.log(`(${x}, ${y}) is in Quadrant 3`)
    } else if (x > 0 && y < 0){
        console.log(`(${x}, ${y}) is in Quadrant 4`)
    }
}

cartesianPlane(-3, 2);


function isATriangle(sideA, sideB, sideC) {
    
    let triangle = (sideA + sideB > sideC) && 
                    (sideB + sideC > sideA) && 
                    (sideC + sideA > sideB);

    if (sideA === sideB && sideB === sideC) {
        triangle = `All sides are equal = equilateral.`;
    } else if (triangle && sideA === sideB || sideB === sideC || sideC === sideA) {
        triangle = `At least two sides are equal, leaving you with an isosceles triangle.`;
    } else if (triangle && sideA !== sideB && sideB != sideC && sideC !== sideA){
        triangle = `Got yourself a scalene triangle.`;
    } else if (!triangle){
        triangle = `Invalid triangle.`
    }

    console.log(triangle);
}

isATriangle(3, 4, 7);

function cellData (planLimit, day, usage){
    let yourAverage = usage / day;
    let yourAverageRounded = yourAverage.toFixed(2)
    let daysLeft = 30 - day;
    let dailyAverage = planLimit/30;
    let dailyRounded = dailyAverage.toFixed(2);
    let exceededData = usage / day * daysLeft - planLimit;
    let newDailyplan = (planLimit - usage) / daysLeft;
    let newPlanRounded = newDailyplan.toFixed(2);

    if(yourAverage > dailyAverage){
        console.log(`${day} days in, with ${daysLeft} remaining. Plan average daily use: ${dailyRounded}. Your daily use: ${yourAverageRounded}. At this rate, you will exceed your data plan limit by ${exceededData}. Using no more than ${newPlanRounded}, will make sure you stay below your data plan.`)
    } else if (yourAverage < dailyAverage) {
        console.log(`${day} days in, with ${daysLeft} remaining. Plan average daily use: ${dailyRounded}. Your daily use: ${yourAverageRounded}. At this rate, you will end month under data plan limit. NOTE: data does NOT rollover and will reset to ${planLimit}`)
    } else {
        console.log(`${day} days in, with ${daysLeft} remaining. Plan average daily use: ${dailyRounded}. Your daily use: ${yourAverageRounded}. At this rate, you will reach ${exceededData} data on the final day.`)
    }

    
    /* planLimit - useage = dataleft 
        dataleft / day = youraverage
        planlimit/ 30 = dailyAverage
        dailyAverage - youraverage = exceeding or not
         */
    
}

cellData(100, 15, 49);