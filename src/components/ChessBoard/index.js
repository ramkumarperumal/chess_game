
import { useRef, useState, useEffect } from 'react'
import BoardBox from '../BoardBox'
import { isEnpassantMove, getPossibleMove } from '../../rules/chessrules'
import { Position } from '../../models/position'

import {initialPieces, verticalNotation, horizontalNotation, pieceTypeConstant, pieceColorConstant} from '../../constants'
import './index.css'
import { board } from '../../models/board'

const ChessBoard = () => {
    
    const chessBoardRef = useRef(null)
    const modalRef = useRef(null)
    const [chessPieces, setChessPieces] = useState(initialPieces.pieces)
    const [activePiece, setActivePiece] = useState(null)
    const [grabPosition, setGrabPosition] = useState(new Position(-1,-1))
    const [promotionPawn, setPromotionPawn] = useState({})



    let block = []
    
    for (let i=horizontalNotation.length-1; i>=0; i--){
        for(let j=0; j<verticalNotation.length; j++){
           
            const p = chessPieces.find(each => each.position.samePosition(new Position(j,i))) 
            const image = p ? p.image : undefined

            const currPiece = chessPieces.find(each => each.position.samePosition(grabPosition))
            

            let highlight = false
            if(currPiece && currPiece.possibleMoves){
                
            highlight = currPiece.possibleMoves.some(each => each.samePosition(new Position(j,i)))
            

            }

            block.push(<BoardBox key={verticalNotation[j]+horizontalNotation[i]} image={image} number={i+j} highlight={highlight}/>)

        }
    }

    


useEffect(() => {

    const currentPiece = chessPieces.find(each => each.position.x===grabPosition.x && each.position.y===grabPosition.y)
    setChessPieces(each => {
        const updatedPieces = each.map(piece => {
        
        if(piece.position.samePosition(grabPosition)){
            if(piece.pieceType === pieceTypeConstant.king && currentPiece){
                currentPiece.possibleMoves = getPossibleMove(piece,each)
                for(const piece2 of each){
                    piece2.possibleMoves = getPossibleMove(piece2, each)
                }
            }
            else{
            if(currentPiece){
           currentPiece.possibleMoves = getPossibleMove(piece,each)
           piece.possibleMoves = currentPiece.possibleMoves
           }
        }
          } else{
            piece.possibleMoves  = []
           }
            return piece
        })
        return updatedPieces  
    })
}
 , [grabPosition])

///grab the chess piece on move click
    const grabPiece = (e) => {       
         
        const element = e.target
        const chessBoard = chessBoardRef.current
        if(chessBoard && element.classList.contains('box-piece')){

            const grabX = Math.floor((e.clientX-chessBoard.offsetLeft)/(chessBoard.clientWidth/8))
            const grabY = 7 - Math.floor((e.clientY-chessBoard.offsetTop)/(chessBoard.clientHeight/8))
            setGrabPosition(new Position(grabX, grabY))
            
            const x = e.clientX-(chessBoard.clientWidth/16);
            const y = e.clientY-(chessBoard.clientHeight/16);
            element.style.position = 'absolute';
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            setActivePiece(element)


}}

///move the chess piece on mouse movement
    const movePiece = (e) => {
        const chessBoard = chessBoardRef.current
        if(activePiece && chessBoard){

            const minX = chessBoard.offsetLeft-25
            const minY = chessBoard.offsetTop-15
            const maxX = chessBoard.offsetLeft+chessBoard.clientWidth-65
            const maxY = chessBoard.offsetTop+chessBoard.clientHeight-65
            const x = e.clientX-(chessBoard.clientWidth/16);
            const y = e.clientY-(chessBoard.clientHeight/16);

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
            const x =  Math.floor((e.clientX-chessBoard.offsetLeft)/(chessBoard.clientWidth/8))
            const y = 7 - Math.floor((e.clientY-chessBoard.offsetTop)/(chessBoard.clientHeight/8))

            const currentPiece = chessPieces.find(each => each.position.x===grabPosition.x && each.position.y===grabPosition.y)


            const validTurn = (currentPiece && currentPiece.pieceColor===pieceColorConstant.white && initialPieces.moveCount%2===0) || 
                              (currentPiece && currentPiece.pieceColor===pieceColorConstant.black && initialPieces.moveCount%2!==0)
            


            const validMove = currentPiece && currentPiece.possibleMoves && currentPiece.possibleMoves.some(each => each.samePosition(new Position(x,y)))?true:false



            if(currentPiece){
                
                //special move for pawn
                if(validTurn && isEnpassantMove(grabPosition.x,grabPosition.y,x,y,currentPiece.pieceType,currentPiece.pieceColor, chessPieces)){

                    initialPieces.moveCount+=1

                    const direction = currentPiece.pieceColor==='l'?1:-1
                    const updatedChessPieces = chessPieces.reduce((results, each) => {
                        if(each.position.samePosition(grabPosition)){
                            each.enPassant = false
                            each.position.x = x
                            each.position.y = y 
                            results.push(each)
                        }
                        else if(!(each.position.samePosition(new Position(x,y-direction)))){
                            each.enPassant = false
                            results.push(each)
                        }
                        return results     
                    }, [])
                    setChessPieces(updatedChessPieces)
                }

                else if(validTurn && validMove){
                    initialPieces.moveCount+=1

                    const updatedChessPieces = chessPieces.reduce((results, each) => {
                        if(each.position.samePosition(grabPosition)){

                            const promotionCol = each.pieceColor===pieceColorConstant.white?7:0

                            each.enPassant = Math.abs(y-grabPosition.y)===2 && each.pieceType===pieceTypeConstant.pawn
                            each.position.x = x
                            each.position.y = y

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
        
        <div ref={chessBoardRef} onMouseDown={(e) => grabPiece(e)} onMouseUp={(e)=>dropPiece(e)} onMouseMove={(e) => movePiece(e)} className='board-container'>

        {block}

    </div>
    </>)
}


export default ChessBoard