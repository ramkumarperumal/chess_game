
import { pieceTypeConstant } from "../constants"

export const isValidMove = (px, py, x, y, pieceType, pieceColor, chessPieces) => {

///check for other piece in box
    const boxOccupied = (x,y,chessPieces) => {
        const piece = chessPieces.find((each) => each.position.x===x && each.position.y===y)
        return piece
    }
    
///check for the other piece is opponent
    const boxOccupiedByOpp = (x,y,chessPieces) => {
        const oppPiece = chessPieces.find((each) => each.position.x===x && each.position.y===y)
        return oppPiece ? oppPiece.pieceColor!==pieceColor: false
    }


///check valid move for pawn
    if(pieceType===pieceTypeConstant.pawn){
        const startRow = pieceColor==='l'?1:6
        const direction = pieceColor==='l'?1:-1

        if(px===x && py===startRow && y-py===2*direction && !boxOccupied(x,y,chessPieces) && !boxOccupied(x,y-direction,chessPieces)){
            return true
        }
        if(px===x && y-py===direction && !boxOccupied(x,y,chessPieces)){
            return true
        }
        if(x-px===-1 && y-py===direction && boxOccupiedByOpp(x,y,chessPieces)){
            return true
        }
        if(x-px===1 && y-py===direction && boxOccupiedByOpp(x,y,chessPieces)){
            return true
        }
    }

    ///check valid for knight
    if(pieceType===pieceTypeConstant.knight){
        if((Math.abs(x-px) === 2 && Math.abs(y-py)===1 ) || (Math.abs(x-px) === 1 && Math.abs(y-py)===2)){
            if(!boxOccupied(x,y,chessPieces) || boxOccupiedByOpp(x,y,chessPieces)){
                return true 
            }

        }
    }
    return false
}


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




