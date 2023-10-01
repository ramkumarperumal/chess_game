import { Piece } from "./models/piece"
import { Position } from "./models/position"
import { board } from "./models/board"

export const verticalNotation = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


export const horizontalNotation = ['1', '2', '3', '4', '5', '6', '7', '8']


export const pieceTypeConstant = {

    rook: 'r',knight: 'n',bishop: 'b',queen: 'q',king: 'k',pawn: 'p'

}

export const pieceColorConstant = {
   white: 'l',
   black: 'd'
}



export const initialPieces = new board([
    new Piece(new Position(0, 1), pieceTypeConstant.pawn,
        pieceColorConstant.white, false, []
        ),
   
    
        new Piece(new Position(1, 1),
         pieceTypeConstant.pawn,
         pieceColorConstant.white,
        false , []),
    
        new Piece(new Position(2, 1),
         pieceTypeConstant.pawn,
         pieceColorConstant.white,
         false, []),
    
        new Piece(new Position(3, 1),
         pieceTypeConstant.pawn,
         pieceColorConstant.white,
         false, []),
    
        new Piece(new Position(4, 1),
         pieceTypeConstant.pawn,
         pieceColorConstant.white,
         false, []),
    
        new Piece(new Position(5, 1),
         pieceTypeConstant.pawn,
         pieceColorConstant.white,
         false, []),
    
        new Piece(new Position(6, 1),
         pieceTypeConstant.pawn,
         pieceColorConstant.white,
         false, []),
    
        new Piece(new Position(7, 1),
         pieceTypeConstant.pawn,
         pieceColorConstant.white,
         false, []),
    
        new Piece(new Position(0, 6),
         pieceTypeConstant.pawn,
         pieceColorConstant.black,
         false, []),
    
        new Piece(new Position(1, 6),
         pieceTypeConstant.pawn,
         pieceColorConstant.black,
         false, []),
    
        new Piece(new Position(2, 6),
         pieceTypeConstant.pawn,
         pieceColorConstant.black,
         false, []),
    
        new Piece(new Position(3, 6),
         pieceTypeConstant.pawn,
         pieceColorConstant.black,
         false, []),
    
        new Piece(new Position(4, 6),
         pieceTypeConstant.pawn,
         pieceColorConstant.black,
         false, []),
    
        new Piece(new Position(5, 6),
         pieceTypeConstant.pawn,
         pieceColorConstant.black,
         false, []),
    
        new Piece(new Position(6, 6),
         pieceTypeConstant.pawn,
         pieceColorConstant.black,
         false, []),
    
        new Piece(new Position(7, 6),
         pieceTypeConstant.pawn,
         pieceColorConstant.black,
         false, []),
    
        new Piece(new Position(0, 7),
         pieceTypeConstant.rook,
         pieceColorConstant.black,false, []),
    
        new Piece(new Position(1, 7),
         pieceTypeConstant.knight,
         pieceColorConstant.black,false, []),
    
        new Piece(new Position(2, 7),
         pieceTypeConstant.bishop,
         pieceColorConstant.black,false, []),
    
        new Piece(new Position(3, 7),
         pieceTypeConstant.queen,
         pieceColorConstant.black,false, []),
    
        new Piece(new Position(4, 7),
         pieceTypeConstant.king,
         pieceColorConstant.black,false, []),
    
        new Piece(new Position(5, 7),
         pieceTypeConstant.bishop,
         pieceColorConstant.black,false, []),
    
        new Piece(new Position(6, 7),
         pieceTypeConstant.knight,
         pieceColorConstant.black,false, []),
    
        new Piece(new Position(7, 7),
         pieceTypeConstant.rook,
         pieceColorConstant.black,false, []),
    
        new Piece(new Position(0, 0),
         pieceTypeConstant.rook,
         pieceColorConstant.white,false, []),
    
        new Piece(new Position(1, 0),
         pieceTypeConstant.knight,
         pieceColorConstant.white,false, []),
    
        new Piece(new Position(2, 0),
         pieceTypeConstant.bishop,
         pieceColorConstant.white,false, []),
    
        new Piece(new Position(3, 0),
         pieceTypeConstant.queen,
         pieceColorConstant.white,false, []),
    
        new Piece(new Position(4, 0),
         pieceTypeConstant.king,
         pieceColorConstant.white,false, []),
    
        new Piece(new Position(5, 0),
         pieceTypeConstant.bishop,
         pieceColorConstant.white,false, []),
    
        new Piece(new Position(6, 0),
         pieceTypeConstant.knight,
         pieceColorConstant.white,false, []),
    
        new Piece(new Position(7, 0),
         pieceTypeConstant.rook,
         pieceColorConstant.white,false, [])
], 0)