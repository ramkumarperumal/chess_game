
import {  pieceTypeConstant } from "../constants"
import { Position } from "../models/position"
import { boxOccupied, boxOccupiedByOpp } from "./generalRules"


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


    return possibleMoves.concat(kingCastlingMove(piece, chessPieces))
}

export const kingCastlingMove = (piece, chessPieces) => {

    let possibleMoves = []

    if(piece.hasMoved){
        return possibleMoves
    }

    const rooks = chessPieces.filter(each => each.pieceType===pieceTypeConstant.rook && each.pieceColor===piece.pieceColor && !each.hasMoved)

    for(const rook of rooks){


        const direction = (rook.position.x-piece.position.x)>0?1:-1

        const adjPosition = new Position(piece.position.x+direction, piece.position.y)


        if(!rook.possibleMoves.some(each => each.samePosition(adjPosition))){
            continue
        }

        const conceringTiles = rook.possibleMoves.filter(each => each.y===piece.position.y)


        const enemyPieces = chessPieces.filter(each => each.pieceColor!==piece.pieceColor)

        let valid = true

        for(const enemy of enemyPieces){
            if(!enemy.possibleMoves){
                continue 
            }
            if(enemy.possibleMoves.some(each => conceringTiles.some(each2 => each.samePosition(each2)))){
                valid = false
            }

            if(!valid){
                break 
            }

        }


        if(!valid){
            continue
        }

        possibleMoves.push(new Position(rook.position.x, rook.position.y))



        

    }

    return possibleMoves



}
