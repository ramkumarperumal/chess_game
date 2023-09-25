
import { pieceTypeConstant } from "../constants"
import {pawnMove, possiblePawnMove} from './pawnRule'
import { knightMove, possibleKnightMove } from "./knightRules"
import { bishopMove, possibleBishopMove } from "./bishopRules"
import { rookMove, possibleRookMove } from "./rookRules"
import { queenMove, possibleQueenMove } from "./queenRules"
import { kingMove, possibleKingMove } from "./kingRules"




///special move for pawn enpassant
export const isEnpassantMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {

    const direction = pieceColor==='l'?1:-1

    if(pieceType===pieceTypeConstant.pawn){
        if((x-px===-1 | x-px===1) && y-py === direction){
            const piece = chessPieces.find(each => each.position.x===x && each.position.y===y-direction && each.enPassant)
            if(piece){
                return true
            }
        }
    }
    return false
}


export const isValidMove = (px, py, x, y, pieceType, pieceColor, chessPieces) => {

    switch(pieceType){
        case pieceTypeConstant.pawn:
            return pawnMove(px,py,x,y,pieceType,pieceColor,chessPieces)
        case pieceTypeConstant.knight:
            return knightMove(px,py,x,y,pieceType,pieceColor,chessPieces)
        case pieceTypeConstant.bishop:
            return bishopMove(px,py,x,y,pieceType,pieceColor,chessPieces)
        case pieceTypeConstant.rook:
            return rookMove(px,py,x,y,pieceType,pieceColor,chessPieces)
        case pieceTypeConstant.queen:
            return queenMove(px,py,x,y,pieceType,pieceColor,chessPieces)
        case pieceTypeConstant.king:
            return kingMove(px,py,x,y,pieceType,pieceColor,chessPieces)
            default:
            return false
    }
}


export const getPossibleMove = (currentPiece, chessPieces) => {

    switch(currentPiece.pieceType){

        case pieceTypeConstant.pawn:
            return possiblePawnMove(currentPiece, chessPieces)
        case pieceTypeConstant.knight:
            return possibleKnightMove(currentPiece, chessPieces)
        case pieceTypeConstant.bishop:
            return possibleBishopMove(currentPiece, chessPieces)
        case pieceTypeConstant.rook:
            return possibleRookMove(currentPiece, chessPieces)
        case pieceTypeConstant.queen:
            return possibleQueenMove(currentPiece, chessPieces)
        case pieceTypeConstant.king:
            return possibleKingMove(currentPiece, chessPieces)
        default:
            return []

    }

}




