function getSquares(rows){
    const squares = [];
    for (const row of rows){
        for (const square of row){
            square.push(square);
        }
    }
    return squares;
}

function sortSquares(squares){
    squares.sort((a, b) => a.distance - b.distance);
}