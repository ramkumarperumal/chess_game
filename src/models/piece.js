

export class Piece {

    image;
    position;
    pieceType;
    pieceColor;
    enPassant;
    possibleMoves;

    constructor( position, pieceType, pieceColor, enPassant, possibleMoves){
        this.image = `assets/images/Chess_${pieceType+pieceColor}t60.png`;
        this.position = position;
        this.pieceType = pieceType;
        this.pieceColor = pieceColor;
        this.enPassant = enPassant;
        this.possibleMoves = possibleMoves
    }

}