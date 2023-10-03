
import { useRef, useState, useEffect } from 'react'
import BoardBox from '../BoardBox'
import { isEnpassantMove, checkAllMoves } from '../../rules/chessrules'
import { Position } from '../../models/position'
import { pieces } from '../../constants'

import { verticalNotation, horizontalNotation, pieceTypeConstant, pieceColorConstant} from '../../constants'
import './index.css'
import { board } from '../../models/board'


let initialPieces = new board(pieces.map(each => each.clone()), 0)

const ChessBoard = () => {


    
    const chessBoardRef = useRef(null)
    const modalRef = useRef(null)
    const gameOverModalRef = useRef(null)
    const [chessPieces, setChessPieces] = useState(initialPieces.pieces)
    const [activePiece, setActivePiece] = useState(null)
    const [grabPosition, setGrabPosition] = useState(new Position(-1,-1))
    const [promotionPawn, setPromotionPawn] = useState({})
    const [currentMove, setCurrentMove] = useState(initialPieces.moveCount)
    const [gameResult, setGameResult] = useState("")
    



    let block = []
    
    for (let i=horizontalNotation.length-1; i>=0; i--){
        for(let j=0; j<verticalNotation.length; j++){
           
            const p = chessPieces.find(each => each.position.samePosition(new Position(j,i))) 
            const image = p ? p.image : undefined

            const currPiece = chessPieces.find(each => each.position.samePosition(grabPosition))
            

            let highlight = false
            if(currPiece && currPiece.possibleMoves && currPiece.pieceColor===initialPieces.getTeamTurn()){
                
            highlight = currPiece.possibleMoves.some(each => each.samePosition(new Position(j,i)))
            

            }

            block.push(<BoardBox key={verticalNotation[j]+horizontalNotation[i]} image={image} number={i+j} highlight={highlight}/>)

        }
    }


    useEffect(() => {

        setChessPieces(each => {
            const updatedPieces = each.map(piece => {
                piece.possibleMoves = checkAllMoves(piece, piece.pieceColor, each)        
            
                return piece
            })
            return updatedPieces  
        })

        
    }

     , [currentMove])


useEffect(() => {

    const kingPiece = chessPieces.find(each => each.pieceColor===initialPieces.getTeamTurn() && each.pieceType===pieceTypeConstant.king)

    const oppPieces = chessPieces.filter(each => each.pieceColor!==initialPieces.getTeamTurn())

    const isCheckMate = oppPieces.some(each => each.possibleMoves.some(each1 => each1.samePosition(kingPiece.position)))




    if(!chessPieces.filter(each => each.pieceColor===initialPieces.getTeamTurn()).map(each => each.possibleMoves).some(each => each.length!==0)){
        if(isCheckMate){
            setGameResult(initialPieces.getTeamTurn()===pieceColorConstant.white?'The winner is black':'The winner is white')
        }
        else{
            setGameResult('Thw game is draw')
        }
        gameOverModalRef.current.classList.remove('modal-con-hidden')
    }
    else{
        
    gameOverModalRef.current.classList.add('modal-con-hidden')
    }


}, [chessPieces])

    

const onClickPlayAgain = () => {
    
    initialPieces = new board(pieces.map(each => each.clone()), 0)
    setChessPieces(initialPieces.pieces)
    setCurrentMove(initialPieces.moveCount)
    
}
    


///grab the chess piece on move click
    const grabPiece = (e) => {   

                 
        const element = e.target
        const chessBoard = chessBoardRef.current
  
        if(chessBoard && element.classList.contains('box-piece')){



            const clientX = e.touches ? e.touches[0].clientX:e.clientX
           const clientY = e.touches ? e.touches[0].clientY:e.clientY

          

            const grabX = Math.floor((clientX-chessBoard.offsetLeft)/(chessBoard.clientWidth/8))
            const grabY = 7 - Math.floor((clientY-chessBoard.offsetTop)/(chessBoard.clientHeight/8))
           
            setGrabPosition(new Position(grabX, grabY))
           
            
            const x = clientX-(chessBoard.clientWidth/16);
            const y = clientY-(chessBoard.clientHeight/16);

            
            element.style.position = 'absolute';
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            setActivePiece(element)
            

}
}

///move the chess piece on mouse movement
    const movePiece = (e) => {
        const chessBoard = chessBoardRef.current
        if(activePiece && chessBoard){

            
            const clientX = e.touches ? e.touches[0].clientX:e.clientX
           const clientY = e.touches ? e.touches[0].clientY:e.clientY

            const minX = chessBoard.offsetLeft-10
            const minY = chessBoard.offsetTop-10
            const maxX = chessBoard.offsetLeft+chessBoard.clientWidth-40
            const maxY = chessBoard.offsetTop+chessBoard.clientHeight-40
            const x = clientX-(chessBoard.clientWidth/16);
            const y = clientY-(chessBoard.clientHeight/16);



            if(x<minX){
                activePiece.style.left = `${minX}px`
            }
            else if(x>maxX){
                activePiece.style.left = `${maxX}px`
            }
            else{
                activePiece.style.left = `${x}px`
            }

            if(y<minY){
                activePiece.style.top = `${minY}px`
            }
            else if(y>maxY){
                activePiece.style.top = `${maxY}px`
            }
            else{
                activePiece.style.top = `${y}px`
            }
        }
    }



    const promotingPawn = (promotingType) => {

        const updatedChessPieces = chessPieces.reduce((results, each) => {


            if(each.position.samePosition(promotionPawn.position)){
                promotionPawn.pieceType = promotingType
                const img = `assets/images/Chess_${promotingType+promotionPawn.pieceColor}t60.png` 

                promotionPawn.image = img
                results.push(each)
            }
            else{
                results.push(each)
            }
            return results     
        }, [])

        setChessPieces(updatedChessPieces)

        modalRef.current.classList.add('modal-con-hidden')

    }

    const modalImgColor = () => {
        return promotionPawn.pieceColor
    }


///drop the chess piece on valid box if not reset to initial position
    const dropPiece = (e) => {
        const chessBoard = chessBoardRef.current


        if(activePiece && chessBoard){

            const clientX = e.changedTouches ? e.changedTouches[0].clientX:e.clientX
           const clientY = e.changedTouches ? e.changedTouches[0].clientY:e.clientY

            const x =  Math.floor((clientX-chessBoard.offsetLeft)/(chessBoard.clientWidth/8))
            const y = 7 - Math.floor((clientY-chessBoard.offsetTop)/(chessBoard.clientHeight/8))

            const currentPiece = chessPieces.find(each => each.position.x===grabPosition.x && each.position.y===grabPosition.y)

           
            

            if(currentPiece){

                const validTurn = initialPieces.getTeamTurn() === currentPiece.pieceColor

            const validMove = currentPiece && currentPiece.possibleMoves && currentPiece.possibleMoves.some(each => each.samePosition(new Position(x,y)))?true:false
            

            const destinationPiece = chessPieces.find(each => each.position.samePosition(new Position(x,y)))
         //castling move for king
                if(destinationPiece && currentPiece.pieceType===pieceTypeConstant.king && destinationPiece.pieceType===pieceTypeConstant.rook && currentPiece.pieceColor===destinationPiece.pieceColor && currentPiece.possibleMoves.some(each => each.samePosition(destinationPiece.position))){

                    initialPieces.moveCount+=1

                    const direction = (destinationPiece.position.x-currentPiece.position.x)>0?1:-1
                    const kingNewXDirection = currentPiece.position.x+(direction*2)

                    const updatedChessPieces = chessPieces.map(each => {
                        if(each.position.samePosition(currentPiece.position)){
                            each.position.x = kingNewXDirection
                            each.hasMoved = true
                        }
                        if(each.position.samePosition(destinationPiece.position)){
                            each.position.x = kingNewXDirection-direction
                            each.hasMoved = true
                        }
                        return each
                    })

                    setActivePiece(updatedChessPieces)
                    setCurrentMove(initialPieces.moveCount)

                }


                
                //special move for pawn
                else if(validTurn && isEnpassantMove(grabPosition.x,grabPosition.y,x,y,currentPiece.pieceType,currentPiece.pieceColor, chessPieces)){

                    initialPieces.moveCount+=1

                    const direction = currentPiece.pieceColor==='l'?1:-1
                    const updatedChessPieces = chessPieces.reduce((results, each) => {
                        if(each.position.samePosition(grabPosition)){
                            each.enPassant = false
                            each.position.x = x
                            each.position.y = y
                            each.hasMoved = true 
                            results.push(each)
                        }
                        else if(!(each.position.samePosition(new Position(x,y-direction)))){
                            each.enPassant = false
                            results.push(each)
                        }
                        return results     
                    }, [])
                    setChessPieces(updatedChessPieces)
                    setCurrentMove(initialPieces.moveCount)
                }

                else if(validTurn && validMove){
                    initialPieces.moveCount+=1
                    

                    const updatedChessPieces = chessPieces.reduce((results, each) => {
                        if(each.position.samePosition(grabPosition)){

                            const promotionCol = each.pieceColor===pieceColorConstant.white?7:0

                            each.enPassant = Math.abs(y-grabPosition.y)===2 && each.pieceType===pieceTypeConstant.pawn
                            each.position.x = x
                            each.position.y = y
                            each.hasMoved = true

                            if(y===promotionCol && each.pieceType===pieceTypeConstant.pawn){
                                setPromotionPawn(each)
                                const modal = modalRef.current
                                modal.classList.remove('modal-con-hidden')  
                                
                            }

                            results.push(each)

                    }
                        else if(!(each.position.samePosition(new Position(x,y)))){
                            if(each.pieceType===pieceTypeConstant.pawn){
                                each.enPassant = false
                            }
                            results.push(each)
                        }
                        return results     
                    }, [])
                    setChessPieces(updatedChessPieces)
                    setCurrentMove(initialPieces.moveCount)
                }

                else{
                    activePiece.style.position = 'relative'
                    activePiece.style.removeProperty('top')
                    activePiece.style.removeProperty('left')
                }
            }
            setActivePiece(null)   
            
        }
        
    }
//  
        
    
    
    return (
        <>
        <div ref = {modalRef} className='modal-bg modal-con-hidden'>
            <div className='modal-container '>
                <img onClick={() => promotingPawn(pieceTypeConstant.rook)} className='modal-img' src={`assets/images/Chess_r${modalImgColor()}t60.png`} alt=""/>
                <img onClick={() => promotingPawn(pieceTypeConstant.knight)} className='modal-img' src={`assets/images/Chess_n${modalImgColor()}t60.png`} alt=""/>
                <img onClick={() => promotingPawn(pieceTypeConstant.bishop)} className='modal-img' src={`assets/images/Chess_b${modalImgColor()}t60.png`} alt=""/>
                <img onClick={() => promotingPawn(pieceTypeConstant.queen)} className='modal-img' src={`assets/images/Chess_q${modalImgColor()}t60.png`} alt=""/>
            </div>
        </div>
        
        <div ref={chessBoardRef}  onMouseDown={(e) => grabPiece(e)}  onMouseUp={(e)=>dropPiece(e)} onMouseMove={(e) => movePiece(e)} onTouchStart={(e) => grabPiece(e)} onTouchEnd={(e)=>dropPiece(e)} onTouchMove={(e) => movePiece(e)} className='board-container'>

        {block}
    </div>

    <div ref = {gameOverModalRef} className='modal-bg modal-con-hidden'>
            <div className='modal-container-game-over'>
                <p className='game-over-para'>{gameResult}!!!</p>
                <button className='game-over-btn' onClick={onClickPlayAgain}>Play Again</button>
            </div>
        </div>
    </>)
}


export default ChessBoard