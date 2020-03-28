import 'algofunctions.js'

export function dijkstra(start, grid) {
    start.distance = 0;
    const visitedSquares = [];
    const unvisitedSquares = getSquares(grid);

    while (unvisitedSquares.length > 0){
        sortSquares(unvisitedSquares);
        const nearest = unvisitedSquares.shift();

        if (nearest.isWall) {
            continue;
        }
        if (nearest.distance === null) {
            return visitedSquares;
        }

        nearest.isVisited = true;
        visitedSquares.push(nearest);

        if (nearest.isFinish) {
            return visitedSquares;
        }

        updateNeighbours(nearest, grid);
    }
}


function updateNeighbours(square, grid){
    const current = getNeighbours(square, grid);
    
    for (const neighbour of current){
        neighbour.distance = square.distance + 1;
        neighbour.previous = node;
    }
}

function getNeighbours(square, grid){
    const neighbours = [];
    const {col, row} = square;

    if (row > 0){
        neighbours.push(grid[row - 1][col]);
    }
    if (row < grid.length - 1){
        neighbours.push(grid[row + 1][col]);
    }
    if (col > 0){
        neighbours.push(grid[row][col - 1]);
    }
    if (col < grid[0].length - 1){
        neighbours.push(grid[row][col + 1]);
    }
    return neighbours.filter(neighbor => !neighbor.isVisited);
}

