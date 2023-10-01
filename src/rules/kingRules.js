import { pieceTypeConstant } from "../constants"
import { Position } from "../models/position"
import { boxOccupied, boxOccupiedByOpp } from "./generalRules"
import { board } from "../models/board"
import { getPossibleMove } from "./chessrules"

export const kingMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {
   

    const xdiff = Math.abs(px-x)
    const ydiff = Math.abs(py-y)

    if((xdiff===0 && ydiff===1) || (xdiff===1 && ydiff===0) || (xdiff===1 && ydiff===1)){
        if(!boxOccupied(new Position(x,y),chessPieces) || boxOccupiedByOpp(new Position(x,y),pieceColor,chessPieces)){
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
            if(currX+i<8 && currX+i>=0 && currY+j<8 && currY+j>=0 && (!boxOccupied(new Position(currX+i,currY+j), chessPieces) || boxOccupiedByOpp(new Position(currX+i, currY+j), piece.pieceColor, chessPieces))){
                possibleMoves.push(new Position(currX+i, currY+j))
            }
        }
    }



    return checkKingMoves(possibleMoves, piece, chessPieces)
    
}

const checkKingMoves = (possibleMoves, piece, chessPieces) => {
    

    for(const move of possibleMoves){
        
        const stimulatedBoard = new board(chessPieces.map(each => {
            return {
                image: each.image,
                position: new Position(each.position.x, each.position.y),
                pieceType: each.pieceType,
                pieceColor: each.pieceColor,
                enPassant: each.enPassant,
                possibleMoves: each.possibleMoves.map(each => new Position(each.x, each.y))
            }
        }))
        

        const pieceAtDestination = stimulatedBoard.pieces.find(p => p.position.samePosition(move))

        if(pieceAtDestination){
            stimulatedBoard.pieces = stimulatedBoard.pieces.filter(p => !p.position.samePosition(move))
        }

        const simulatedKing = stimulatedBoard.pieces.find(each => each.pieceType===pieceTypeConstant.king && each.pieceColor===piece.pieceColor)

        simulatedKing.position = move

        const enemyPieces = stimulatedBoard.pieces.filter(each => each.pieceColor!==piece.pieceColor)
        

        for(const enemy of enemyPieces){
            if(enemy.pieceType===pieceTypeConstant.king){

                let possibleEnemyKingMove = []
    
                const currX = enemy.position.x
                const currY = enemy.position.y

                for(let i=-1; i<2; i++){
                    for(let j=-1; j<2; j++){
                        if(i===0 && j===0){
                            continue 
                        }
                        if(currX+i<8 && currX+i>=0 && currY+j<8 && currY+j>=0 && (!boxOccupied(new Position(currX+i,currY+j), stimulatedBoard.pieces) || boxOccupiedByOpp(new Position(currX+i, currY+j), enemy.pieceColor, stimulatedBoard.pieces))){
                            possibleEnemyKingMove.push(new Position(currX+i, currY+j))
                        }
                    }
                }
                enemy.possibleMoves = possibleEnemyKingMove

            }
            else{
            
            enemy.possibleMoves = getPossibleMove(enemy, stimulatedBoard.pieces)
        }
    }

        let safe = true 

        for(const p of stimulatedBoard.pieces){
            if(p.pieceColor === piece.pieceColor){
                continue
            }
            if(p.pieceType === pieceTypeConstant.pawn){
                const possiblePawnMoves = getPossibleMove(p, stimulatedBoard.pieces)

                if(possiblePawnMoves.some(each => each.x!==p.position.x && each.samePosition(move))){
                    safe = false
                    break 
                }
            }
            else if(p.possibleMoves.some(each =>  each.samePosition(move))){
                safe = false
                break
            }
        }

        if(!safe){
            possibleMoves = possibleMoves.filter(each => !each.samePosition(move))
        }
    }

    return possibleMoves

}