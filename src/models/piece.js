


export class Piece {

    image;
    position;
    pieceType;
    pieceColor;
    enPassant;
    possibleMoves;
    hasMoved;

    constructor( position, pieceType, pieceColor, enPassant, possibleMoves, hasMoved){
        this.image = `assets/images/Chess_${pieceType+pieceColor}t60.png`;
        this.position = position;
        this.pieceType = pieceType;
        this.pieceColor = pieceColor;
        this.enPassant = enPassant;
        this.possibleMoves = possibleMoves
        this.hasMoved = hasMoved
    }

    clone(){
        return new Piece(this.position.clone(), this.pieceType, this.pieceColor, this.enPassant, this.possibleMoves.map(each=> each.clone()), this.hasMoved)
    }

}