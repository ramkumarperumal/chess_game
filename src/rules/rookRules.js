import { boxOccupied, boxOccupiedByOpp } from "./generalRules"




///check valid move for rook
export const rookMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {
    if((px===x  || py===y ) && (!boxOccupied(x,y,chessPieces) || boxOccupiedByOpp(x,y,pieceColor,chessPieces))){

        ///
        if(x-px!==0){
            let tmpx = x-px>0?px:x 
            const tmpy = y
            const diff = Math.abs(x-px)
            for (let i=1; i<diff; i++){
                tmpx+=1
                if(boxOccupied(tmpx,tmpy,chessPieces)){
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
                if(boxOccupied(tmpx,tmpy,chessPieces)){
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

    return possibleMoves
    
}