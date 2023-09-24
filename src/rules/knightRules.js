import { boxOccupied, boxOccupiedByOpp } from "./generalRules"


///check valid move for knight
export const knightMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {

    if((Math.abs(x-px) === 2 && Math.abs(y-py)===1 ) || (Math.abs(x-px) === 1 && Math.abs(y-py)===2)){
        if(!boxOccupied(x,y,chessPieces) || boxOccupiedByOpp(x,y,pieceColor,chessPieces)){
            return true 
        }

    }
    return false
}
