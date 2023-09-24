export const verticalNotation = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


export const horizontalNotation = ['1', '2', '3', '4', '5', '6', '7', '8']


export const pieceTypeConstant = {

    rook: 'ROOK',knight: 'NIGHT',bishop: 'BISHOP',queen: 'QUEEN',king: 'KING',pawn: 'PAWN'

}

export const pieceColorConstant = {
   white: 'l',
   black: 'd'
}

export const initialPieces = [
    {
        "image": "assets/images/Chess_plt60.png",
        position: {"x": 0,
        "y": 1},
        
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.white,
        "enPassant": false 
    },
    {
        "image": "assets/images/Chess_plt60.png",
        position: {"x": 1,
        "y": 1},
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.white,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_plt60.png",
        position: {"x": 2,
        "y": 1},
        
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.white,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_plt60.png",
        position: {"x": 3,
        "y": 1}
        ,
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.white,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_plt60.png",
        position: {"x": 4,
        "y": 1}
        ,
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.white,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_plt60.png",
        position : {"x": 5,
        "y": 1}
        ,
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.white,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_plt60.png",
        position: {"x": 6,
        "y": 1}
        ,
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.white,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_plt60.png",
        position: {"x": 7,
        "y": 1}
        ,
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.white,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_pdt60.png",
        position: {"x": 0,
        "y": 6}
        ,
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.black,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_pdt60.png",
        position: {"x": 1,
        "y": 6}
        ,
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.black,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_pdt60.png",
        position: {"x": 2,
        "y": 6}
        ,
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.black,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_pdt60.png",
        position: {"x": 3,
        "y": 6}
        ,
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.black,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_pdt60.png",
        position: {"x": 4,
        "y": 6}
        ,
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.black,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_pdt60.png",
        position: {"x": 5,
        "y": 6}
        ,
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.black,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_pdt60.png",
        position: {"x": 6,
        "y": 6}
        ,
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.black,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_pdt60.png",
        position: {"x": 7,
        "y": 6}
        ,
        "pieceType": pieceTypeConstant.pawn,
        "pieceColor": pieceColorConstant.black,
        "enPassant": false
    },
    {
        "image": "assets/images/Chess_rdt60.png",
        position: {"x": 0,
        "y": 7}
        ,
        "pieceType": pieceTypeConstant.rook,
        "pieceColor": pieceColorConstant.black
    },
    {
        "image": "assets/images/Chess_ndt60.png",
        position: {"x": 1,
        "y": 7}
        ,
        "pieceType": pieceTypeConstant.knight,
        "pieceColor": pieceColorConstant.black
    },
    {
        "image": "assets/images/Chess_bdt60.png",
        position: {"x": 2,
        "y": 7}
        ,
        "pieceType": pieceTypeConstant.bishop,
        "pieceColor": pieceColorConstant.black
    },
    {
        "image": "assets/images/Chess_qdt60.png",
        position: {"x": 3,
        "y": 7}
        ,
        "pieceType": pieceTypeConstant.queen,
        "pieceColor": pieceColorConstant.black
    },
    {
        "image": "assets/images/Chess_kdt60.png",
        position: {"x": 4,
        "y": 7}
        ,
        "pieceType": pieceTypeConstant.king,
        "pieceColor": pieceColorConstant.black
        
    },
    {
        "image": "assets/images/Chess_bdt60.png",
        position: {"x": 5,
        "y": 7}
        ,
        "pieceType": pieceTypeConstant.bishop,
        "pieceColor": pieceColorConstant.black
    },
    {
        "image": "assets/images/Chess_ndt60.png",
        position: {"x": 6,
        "y": 7}
        ,
        "pieceType": pieceTypeConstant.knight,
        "pieceColor": pieceColorConstant.black
    },
    {
        "image": "assets/images/Chess_rdt60.png",
        position: {"x": 7,
        "y": 7}
        ,
        "pieceType": pieceTypeConstant.rook,
        "pieceColor": pieceColorConstant.black
    },
    {
        "image": "assets/images/Chess_rlt60.png",
        position: {"x": 0,
        "y": 0}
        ,
        "pieceType": pieceTypeConstant.rook,
        "pieceColor": pieceColorConstant.white
    },
    {
        "image": "assets/images/Chess_nlt60.png",
        position: {"x": 1,
        "y": 0}
        ,
        "pieceType": pieceTypeConstant.knight,
        "pieceColor": pieceColorConstant.white
    },
    {
        "image": "assets/images/Chess_blt60.png",
        position: {"x": 2,
        "y": 0}
        ,
        "pieceType": pieceTypeConstant.bishop,
        "pieceColor": pieceColorConstant.white
    },
    {
        "image": "assets/images/Chess_qlt60.png",
        position: {"x": 3,
        "y": 0}
        ,
        "pieceType": pieceTypeConstant.queen,
        "pieceColor": pieceColorConstant.white
    },
    {
        "image": "assets/images/Chess_klt60.png",
        position: {"x": 4,
        "y": 0}
        ,
        "pieceType": pieceTypeConstant.king,
        "pieceColor": pieceColorConstant.white
    },
    {
        "image": "assets/images/Chess_blt60.png",
        position: {"x": 5,
        "y": 0}
        ,
        "pieceType": pieceTypeConstant.bishop,
        "pieceColor": pieceColorConstant.white
    },
    {
        "image": "assets/images/Chess_nlt60.png",
        position: {"x": 6,
        "y": 0}
        ,
        "pieceType": pieceTypeConstant.knight,
        "pieceColor": pieceColorConstant.white
    },
    {
        "image": "assets/images/Chess_rlt60.png",
        position: {"x": 7,
        "y": 0}
        ,
        "pieceType": pieceTypeConstant.rook,
        "pieceColor": pieceColorConstant.white
    }
]