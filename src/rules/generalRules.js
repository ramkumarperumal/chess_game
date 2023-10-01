


///check for other piece in box
export const boxOccupied = (checkPosition,chessPieces) => {
   
    const piece = chessPieces.find((each) => each.position.samePosition(checkPosition))
    return piece?true: false
}

///check for the other piece is opponent
export const boxOccupiedByOpp = (checkPosition,pieceColor,chessPieces) => {
    const oppPiece = chessPieces.find((each) => each.position.samePosition(checkPosition))
    return oppPiece ? oppPiece.pieceColor!==pieceColor: false
}



