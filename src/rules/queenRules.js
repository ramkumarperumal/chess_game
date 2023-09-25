import { rookMove,possibleRookMove } from "./rookRules"
import { bishopMove, possibleBishopMove } from "./bishopRules"


export const queenMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {

    if(rookMove(px,py,x,y,pieceType,pieceColor,chessPieces) || bishopMove(px,py,x,y,pieceType,pieceColor,chessPieces)){
        return true
    }
    return false
    
}

export const possibleQueenMove = (piece, chessPieces) => {

    let possibleMoves = []

    possibleMoves.push(...possibleBishopMove(piece,chessPieces))
    possibleMoves.push(...possibleRookMove(piece, chessPieces))
    

    return possibleMoves
    
}