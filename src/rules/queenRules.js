import { rookMove } from "./rookRules"
import { bishopMove } from "./bishopRules"


export const queenMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {

    if(rookMove(px,py,x,y,pieceType,pieceColor,chessPieces) || bishopMove(px,py,x,y,pieceType,pieceColor,chessPieces)){
        return true
    }
    return false
    
}

export const possibleQueenMove = (piece, chessPieces) => {

    let possibleMoves = []

    return possibleMoves
    
}