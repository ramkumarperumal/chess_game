
import { boxOccupied, boxOccupiedByOpp } from "./generalRules"
 
///check valid move for pawn
export const pawnMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {

    const startRow = pieceColor==='l'?1:6
    const direction = pieceColor==='l'?1:-1

        if(px===x && py===startRow && y-py===2*direction && !boxOccupied(x,y,chessPieces) && !boxOccupied(x,y-direction,chessPieces)){
            return true
        }
        if(px===x && y-py===direction && !boxOccupied(x,y,chessPieces)){
            return true
        }
        if(x-px===-1 && y-py===direction && boxOccupiedByOpp(x,y,pieceColor,chessPieces)){
            return true
        }
        if(x-px===1 && y-py===direction && boxOccupiedByOpp(x,y,pieceColor,chessPieces)){
            return true
        }
        return false
}
