// A toy shop - the owner received a big order and with the money he/she wants to go on a holiday.
// Puzzle - BGN 2.60.
// Talking doll - BGN 3
// Teddy bear - BGN 4.10.
// Minion - BGN 8.20.
// Truck - BGN 2
// If the ordered toys are 50 or more, the store makes a 25% discount on the total price. The owner has to give 10% of the earned money for the rent of the store.
// The function calculates if the money will be enough for a holiday.

function toyShop(input){
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalToys = puzzles + dolls + teddyBears + minions + trucks;
    let totalMoney = puzzles*2.6 + dolls*3 + teddyBears*4.1 + minions*8.2 + trucks*2;
    
    if (totalToys >= 50) {
        totalMoney = totalMoney * 0.75;
    }

    totalMoney = totalMoney * 0.90;
    let difference = Math.abs(totalMoney - tripPrice);

    if (totalMoney >= tripPrice) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }
}
