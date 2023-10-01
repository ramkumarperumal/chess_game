import { boxOccupied, boxOccupiedByOpp } from "./generalRules"
import { Position } from "../models/position"

///check valid move for bishop
export const bishopMove = (px,py,x,y,pieceType,pieceColor,chessPieces) => {

    ///topright or bottomleft diagonal movement
    if((px-py)===(x-y) && (!boxOccupied(new Position(x,y),chessPieces) || boxOccupiedByOpp(new Position(x,y),pieceColor,chessPieces))){

        const diff = x-px
        let tmpx = diff>0 ? px : x 
        let tmpy = diff>0 ? py : y

            for (let i=1; i<Math.abs(diff); i++){
                tmpx+=1
                tmpy+=1
                if(boxOccupied(new Position(tmpx,tmpy), chessPieces)){
                    return false
                }
            }
        return true
    }
        ///topleft or bottom right diagonal movement
        if((px+py)===(x+y) && (!boxOccupied(new Position(x,y),chessPieces) || boxOccupiedByOpp(new Position(x,y),pieceColor,chessPieces))){

            const diff = x-px
            let tmpx = diff>0 ? px : x 
            let tmpy = diff>0 ? py : y
    
                for (let i=1; i<Math.abs(diff); i++){
                    tmpx+=1
                    tmpy-=1
                    if(boxOccupied(new Position(tmpx,tmpy), chessPieces)){
                        return false
                    }
                }
            return true
        }
        return false
}




export const possibleBishopMove = (piece, chessPieces) => {

    let possibleMoves = []
    const currX = piece.position.x
    const currY = piece.position.y

    for (let i=1; i<8; i++){

        if(currX-i>=0 && currY-i>=0){
            if(!boxOccupied(new Position(currX-i,currY-i), chessPieces)){
            possibleMoves.push(new Position(currX-i, currY-i)) }
            else if(boxOccupiedByOpp(new Position(currX-i,currY-i),piece.pieceColor, chessPieces)){
                possibleMoves.push(new Position(currX-i, currY-i))
                break
            }
            else{
                break
            }
        }
    }

    for (let i=1; i<8; i++){
        if(currX-i>=0 && currY+i<8){
         if(!boxOccupied(new Position(currX-i,currY+i), chessPieces)){
            possibleMoves.push(new Position(currX-i, currY+i))
        }
        else if(boxOccupiedByOpp(new Position(currX-i,currY+i) ,piece.pieceColor, chessPieces)){
            possibleMoves.push(new Position(currX-i, currY+i))
            break
        }
        else{
            break
        }
    }
    }


    for (let i=1; i<8; i++){
        if(currX+i<8 && currY-i>=0){
         if(!boxOccupied(new Position(currX+i,currY-i), chessPieces)){
            possibleMoves.push(new Position(currX+i, currY-i))   
        }
        else if(boxOccupiedByOpp(new Position(currX+i,currY-i), piece.pieceColor, chessPieces)){
            possibleMoves.push(new Position(currX+i, currY-i))
            break
        }
        else{
            break
        }
    }
    }


    for (let i=1; i<8; i++){

        if(currX+i<8 && currY+i<8){
            if(!boxOccupied(new Position(currX+i,currY+i), chessPieces)){
                possibleMoves.push(new Position(currX+i, currY+i))    
            }
            else if(boxOccupiedByOpp(new Position(currX+i,currY+i) ,piece.pieceColor, chessPieces)){
                possibleMoves.push(new Position(currX+i, currY+i))
                break
            }
            else{
                break
            }

        }
    }

    


    return possibleMoves
    
    }