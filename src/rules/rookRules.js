import { boxOccupied, boxOccupiedByOpp } from "./generalRules"
import { Position } from "../models/position"



///check valid move for rook
export const rookMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {
    if((px===x  || py===y ) && (!boxOccupied(new Position(x,y),chessPieces) || boxOccupiedByOpp(new Position(x,y),pieceColor,chessPieces))){

        ///
        if(x-px!==0){
            let tmpx = x-px>0?px:x 
            const tmpy = y
            const diff = Math.abs(x-px)
            for (let i=1; i<diff; i++){
                tmpx+=1
                if(boxOccupied(new Position(tmpx,tmpy),chessPieces)){
                    return false
                }
            }
        }
        else if(y-py!==0){

            let tmpy = y-py>0?py:y 
            const tmpx = x
            const diff = Math.abs(y-py)
            for (let i=1; i<diff; i++){
                tmpy+=1
                if(boxOccupied(new Position(tmpx,tmpy),chessPieces)){
                    return false
                }
            }

        }
        return true
    }
    return false
}


export const possibleRookMove = (piece, chessPieces) => {

    let possibleMoves = []

    const currX = piece.position.x
    const currY = piece.position.y

    
    for (let i=1; i<8; i++){

        if(currX-i>=0 ){
            if(!boxOccupied(new Position(currX-i,currY), chessPieces)){
            possibleMoves.push(new Position(currX-i, currY)) }
            else if(boxOccupiedByOpp(new Position(currX-i,currY),piece.pieceColor, chessPieces)){
                possibleMoves.push(new Position(currX-i, currY))
                break
            }
            else{
                break
            }
        }
    }

    for (let i=1; i<8; i++){

        if(currX+i<8){
            if(!boxOccupied(new Position(currX+i,currY), chessPieces)){
            possibleMoves.push(new Position(currX+i, currY)) }
            else if(boxOccupiedByOpp(new Position(currX+i,currY),piece.pieceColor, chessPieces)){
                possibleMoves.push(new Position(currX+i, currY))
                break
            }
            else{
                break
            }
        }
    }

    for (let i=1; i<8; i++){

        if(currY-i>=0){
            if(!boxOccupied(new Position(currX,currY-i), chessPieces)){
            possibleMoves.push(new Position(currX, currY-i)) }
            else if(boxOccupiedByOpp(new Position(currX,currY-i),piece.pieceColor, chessPieces)){
                possibleMoves.push(new Position(currX, currY-i))
                break
            }
            else{
                break
            }
        }
    }

    for (let i=1; i<8; i++){

        if(currY+i<8){
            if(!boxOccupied(new Position(currX,currY+i), chessPieces)){
            possibleMoves.push(new Position(currX, currY+i)) }
            else if(boxOccupiedByOpp(new Position(currX,currY+i),piece.pieceColor, chessPieces)){
                possibleMoves.push(new Position(currX, currY+i))
                break
            }
            else{
                break
            }
        }
    }

    return possibleMoves
    
}