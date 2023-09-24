import { boxOccupied, boxOccupiedByOpp } from "./generalRules"


///check valid move for bishop
export const bishopMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {

    ///topright or bottomleft diagonal movement
    if((px-py)===(x-y) && (!boxOccupied(x,y,chessPieces) || boxOccupiedByOpp(x,y,pieceColor,chessPieces))){

        const diff = x-px
        let tmpx = diff>0 ? px : x 
        let tmpy = diff>0 ? py : y

            for (let i=1; i<Math.abs(diff); i++){
                tmpx+=1
                tmpy+=1
                if(boxOccupied(tmpx,tmpy, chessPieces)){
                    return false
                }
            }
        return true
    }
        ///topleft or bottom right diagonal movement
        if((px+py)===(x+y) && (!boxOccupied(x,y,chessPieces) || boxOccupiedByOpp(x,y,pieceColor,chessPieces))){

            const diff = x-px
            let tmpx = diff>0 ? px : x 
            let tmpy = diff>0 ? py : y
    
                for (let i=1; i<Math.abs(diff); i++){
                    tmpx+=1
                    tmpy-=1
                    if(boxOccupied(tmpx,tmpy, chessPieces)){
                        return false
                    }
                }
            return true
        }
        return false
    }