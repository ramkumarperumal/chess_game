


///check for other piece in box
export const boxOccupied = (x,y,chessPieces) => {
    const piece = chessPieces.find((each) => each.position.x===x && each.position.y===y)
    return piece?true: false
}

///check for the other piece is opponent
export const boxOccupiedByOpp = (x,y,pieceColor,chessPieces) => {
    const oppPiece = chessPieces.find((each) => each.position.x===x && each.position.y===y)
    return oppPiece ? oppPiece.pieceColor!==pieceColor: false
}



