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

    return possibleMoves
    
}