import { boxOccupied, boxOccupiedByOpp } from "./generalRules"
import { Position } from "../models/position"

///check valid move for knight
export const knightMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {

    if((Math.abs(x-px) === 2 && Math.abs(y-py)===1 ) || (Math.abs(x-px) === 1 && Math.abs(y-py)===2)){
        if(!boxOccupied(new Position(x,y),chessPieces) || boxOccupiedByOpp(new Position(x,y),pieceColor,chessPieces)){
            return true 
        }

    }
    return false
}


export const possibleKnightMove = (piece, chessPieces) => {

    let possibleMoves = []
    const possiblex = [2,-2]
    const possibley = [1,-1]

    for(let i=0; i<possiblex.length; i++){
        for(let j=0; j<possibley.length; j++){

            const checkx1 = piece.position.x+possiblex[i]
            const checky1 = piece.position.y+possibley[j]
            const checkx2 = piece.position.x+possibley[j]
            const checky2 = piece.position.y+possiblex[i]

            if(checkx1>=0 && checky1>=0 && checkx1<8 && checky1<8){
                if(!boxOccupied(new Position(checkx1, checky1), chessPieces) || boxOccupiedByOpp(new Position(checkx1, checky1), piece.pieceColor, chessPieces)){
                    possibleMoves.push(new Position(checkx1, checky1))
                }
            }
            if(checkx2>=0 && checky2>=0 && checkx2<8 && checky2<8){
                if(!boxOccupied(new Position(checkx2, checky2), chessPieces) || boxOccupiedByOpp(new Position(checkx2, checky2), piece.pieceColor, chessPieces)){
                    possibleMoves.push(new Position(checkx2, checky2))
                }
            }
        }
    }

    return possibleMoves
    
}