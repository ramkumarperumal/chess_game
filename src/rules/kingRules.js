import { boxOccupied, boxOccupiedByOpp } from "./generalRules"



export const kingMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {

    const xdiff = Math.abs(px-x)
    const ydiff = Math.abs(py-y)

    if((xdiff===0 && ydiff===1) || (xdiff===1 && ydiff===0) || (xdiff===1 && ydiff===1)){
        if(!boxOccupied(x,y,chessPieces) || boxOccupiedByOpp(x,y,pieceColor,chessPieces)){
            return true
        }
    }

    return false
}


export const possibleKingMove = (piece, chessPieces) => {

    

    let possibleMoves = []
    const currX = piece.position.x
    const currY = piece.position.y

    for(let i=-1; i<2; i++){
        for(let j=-1; j<2; j++){
            if(i===0 && j===0){
                continue 
            }
            if(currX+i<8 && currX+i>=0 && currY+j<8 && currY+j>=0 && (!boxOccupied(currX+i,currY+j, chessPieces) || boxOccupiedByOpp(currX+i, currY+j, piece.pieceColor, chessPieces))){
                possibleMoves.push({x:currX+i, y: currY+j})
            }
        }
    }


    return possibleMoves
    
}