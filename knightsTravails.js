class KnightsTravails{
    constructor(){
        this.moves = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]]
    }

    knightMoves(startSquare, endSquare){
        // item in queue: [square,[move1, move2, move3]]
        let queue = [[startSquare,[]]]
        let squaresBeenTo = []
        let returnList;
        while (queue.length > 0){
            let currentSquare = queue.shift();
            this.availableKnightMoves(currentSquare[0]).forEach(square => {
                if (JSON.stringify(square) == JSON.stringify(endSquare)){
                    returnList = currentSquare[1];
                    returnList.push(currentSquare[0])
                    returnList.push(square);
                    return;
                }
                if (!(JSON.stringify(squaresBeenTo).includes(JSON.stringify(square)))){
                    let prevMoves = [...currentSquare[1]];
                    prevMoves.push(currentSquare[0]);
                    queue.push([square, prevMoves]);
                    squaresBeenTo.push(square)
                }
            })

            if (returnList){
                return returnList
            }
        }
    }

    availableKnightMoves(pos){
        let returnList = []
        this.moves.forEach(move => {
            let x = move[0] + pos[0]
            let y = move[1] + pos[1]
            if (x < 8 && x >= 0 && y < 8 && y >= 0){
                returnList.push([x,y])
            }
        });
        return returnList;
    }
}