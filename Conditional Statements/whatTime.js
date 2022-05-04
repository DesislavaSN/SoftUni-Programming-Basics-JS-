// A function that gets as an input (array) an hour and minutes from a 24-hour day and calculates what time it will be in 15 minutes.

function whatTime(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let totalMins = hours * 60 + minutes + 15;
    let h = Math.floor(totalMins / 60);
    let m = totalMins % 60;

    if ( h > 23 ) {
        h = 0;
    }
    if (m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);
    }
}
