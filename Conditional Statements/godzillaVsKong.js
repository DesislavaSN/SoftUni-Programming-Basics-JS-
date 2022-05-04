// Filming for "Godzilla vs. Kong" begins.
// A function that calculates whether the funds provided are enough to shoot the film.
// The photos will require a number of statistics, clothing for each extra and decor.
// It is known that:
// • The set for the film is worth 10% of the budget.
// • For more than 150 statistics, there is a 10% discount on clothing.

function godzillaVsKong(input){
    let budgetMovie = Number(input[0]);
    let filmExtras = Number(input[1]);
    let clothesPricePerExtra = Number(input[2]);

    let movieSet = budgetMovie * 0.1;
    let totalPriceForClothes = filmExtras * clothesPricePerExtra;

    if (filmExtras > 150 ) {
        totalPriceForClothes = totalPriceForClothes * 0.90;
        //console.log(totalPriceForClothes);
    }

    let movieTotalPrice = (movieSet + totalPriceForClothes).toFixed(3);
    let diff = (Math.abs(budgetMovie - movieTotalPrice)).toFixed(2);

    if (movieTotalPrice > budgetMovie) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff} leva more.`);
    } else if (movieTotalPrice <= budgetMovie){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff} leva left.`);   
    }
}
