function areaOfFigures(input){
    let shape = input[0];
    let area = 0;

    if (shape === "square") {
        let side = Number(input[1]);
        area = side * side;
        console.log( "square " + area.toFixed(3));

    } else if ( shape === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = sideA * sideB;
        console.log( "rectangle " + area.toFixed(3));

    } else if ( shape === "circle") {
        let radius = Number(input[1]);
        area = Math.PI * radius * radius;
        console.log( "circle " + area.toFixed(3));

    } else if ( shape === "triangle") {
        let lengthSide = Number(input[1]);
        let hightOfSide = Number(input[2]);
        area = (lengthSide * hightOfSide) / 2;
        console.log("triangle " + area.toFixed(3));
    }

}
