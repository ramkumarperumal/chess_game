
import { boxOccupied, boxOccupiedByOpp } from "./generalRules"
import { isEnpassantMove } from "./chessrules"
import { Position } from "../models/position"
 
///check valid move for pawn
export const pawnMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {

    const startRow = pieceColor==='l'?1:6
    const direction = pieceColor==='l'?1:-1

        if(px===x && py===startRow && y-py===2*direction && !boxOccupied(new Position(x,y),chessPieces) && !boxOccupied(new Position(x,y-direction),chessPieces)){
            return true
        }
        if(px===x && y-py===direction && !boxOccupied(new Position(x,y),chessPieces)){
            return true
        }
        if(x-px===-1 && y-py===direction && boxOccupiedByOpp(new Position(x,y),pieceColor,chessPieces)){
            return true
        }
        if(x-px===1 && y-py===direction && boxOccupiedByOpp(new Position(x,y),pieceColor,chessPieces)){
            return true
        }
        return false
}


export const possiblePawnMove = (piece, chessPieces) => {

    const possibleMoves = []
    const startRow = piece.pieceColor==='l'?1:6
    const direction = piece.pieceColor==='l'?1:-1


    

    if(!boxOccupied(new Position(piece.position.x, piece.position.y+direction), chessPieces)){
            possibleMoves.push(new Position(piece.position.x, piece.position.y+direction))
            if(piece.position.y===startRow && !boxOccupied(new Position(piece.position.x, piece.position.y+(direction*2)), chessPieces)){
        
                possibleMoves.push(new Position( piece.position.x, piece.position.y+(direction*2)))
                
            }
        
    }

   
    
    if(boxOccupiedByOpp(new Position(piece.position.x+1, piece.position.y+direction), piece.pieceColor, chessPieces)){
        possibleMoves.push(new Position( piece.position.x+1,  piece.position.y+direction))
    }

    if(boxOccupiedByOpp(new Position(piece.position.x-1, piece.position.y+direction), piece.pieceColor, chessPieces)){
        possibleMoves.push(new Position( piece.position.x-1,  piece.position.y+direction))
    }

    //x-px===-1 | x-px===1) && y-py === direction
    if(isEnpassantMove(piece.position.x,piece.position.y,piece.position.x+1,piece.position.y+direction,piece.pieceType,piece.pieceColor,chessPieces)){
        possibleMoves.push(new Position( piece.position.x+1, piece.position.y+direction))
        possibleMoves.push(new Position( piece.position.x+1, piece.position.y))
    }
    if(isEnpassantMove(piece.position.x,piece.position.y,piece.position.x-1,piece.position.y+direction,piece.pieceType,piece.pieceColor,chessPieces)){
        possibleMoves.push(new Position( piece.position.x-1,  piece.position.y+direction))
        possibleMoves.push(new Position( piece.position.x-1, piece.position.y))
    }

    

    return possibleMoves

}