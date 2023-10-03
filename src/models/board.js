import { pieceColorConstant } from "../constants";

export class board {
    pieces;
    moveCount;

    constructor(pieces, moveCount){
        this.pieces = pieces;
        this.moveCount = moveCount

    }


    getTeamTurn() {
        return this.moveCount%2===0?pieceColorConstant.white:pieceColorConstant.black
    }
    


    
}