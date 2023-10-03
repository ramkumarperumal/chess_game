
import { pieceTypeConstant } from "../constants"
import {pawnMove, possiblePawnMove} from './pawnRule'
import { knightMove, possibleKnightMove } from "./knightRules"
import { bishopMove, possibleBishopMove } from "./bishopRules"
import { rookMove, possibleRookMove } from "./rookRules"
import { queenMove, possibleQueenMove } from "./queenRules"
import { kingMove, possibleKingMove } from "./kingRules"
import { board } from "../models/board"
import { Position } from "../models/position"




///special move for pawn enpassant
export const isEnpassantMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {

    const direction = pieceColor==='l'?1:-1

    if(pieceType===pieceTypeConstant.pawn){
        if((x-px===-1 | x-px===1) && y-py === direction){
            const piece = chessPieces.find(each => each.position.x===x && each.position.y===y-direction && each.enPassant && each.pieceColor!==pieceColor)
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



export const checkAllMoves = (piece, color, chessPieces) => {


        piece.possibleMoves = getPossibleMove(piece, chessPieces)
             

        for (const move of piece.possibleMoves){

            const stimulatedBoard = new board(chessPieces.map(each => {
                return {
                    image: each.image,
                    position: new Position(each.position.x, each.position.y),
                    pieceType: each.pieceType,
                    pieceColor: each.pieceColor,
                    enPassant: each.enPassant,
                    possibleMoves: each.possibleMoves.map(each => new Position(each.x, each.y)), 
                    hasMoved: each.hasMoved
                }
            }))

            const pieceAtDestination = stimulatedBoard.pieces.find(each => each.position.samePosition(move))

            if(pieceAtDestination){
                stimulatedBoard.pieces = stimulatedBoard.pieces.filter(p => !p.position.samePosition(move))
            }

            const clonedPiece = stimulatedBoard.pieces.find(each => each.position.samePosition(piece.position))
            clonedPiece.position = move

            const clonedKing = stimulatedBoard.pieces.find(each => each.pieceType===pieceTypeConstant.king && each.pieceColor===color)
            

            for(const enemy of stimulatedBoard.pieces.filter(each => each.pieceColor!==color)){
                enemy.possibleMoves = getPossibleMove(enemy, stimulatedBoard.pieces)

                if(enemy.pieceType===pieceTypeConstant.pawn){
                    if(enemy.possibleMoves.some(each => each.x!==enemy.position.x && each.samePosition(clonedKing.position))){
                        
                        piece.possibleMoves = piece.possibleMoves.filter(each => !each.samePosition(move))
                        
                        
                    }
                }
                else{
                    if(enemy.possibleMoves.some(each => each.samePosition(clonedKing.position))){
                        
                        piece.possibleMoves = piece.possibleMoves.filter(each => !each.samePosition(move))
                        
                        
                    }
                }
            }

        }

        

        return piece.possibleMoves

    }




