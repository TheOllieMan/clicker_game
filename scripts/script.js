const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;

// Buildings are made from classes here.
let cursor = new Building(15, .1/300);

// Manual click function, add one point to score per click
function scorePlusPlus() {
    score++;
}

function scoreInc() {
    score += cursor.Prod;
    console.log (score);
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    document.getElementById('score').innerHTML = score;
}

//capping at 0 
//function scoreCap(min,max){
    //const Min = min;
   // const MAX = max;
//}


//Add a math.floor
scoreInc();
setInterval(updatePage, tickRate);
