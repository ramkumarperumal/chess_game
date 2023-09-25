
import './index.css'

const BoardBox = (props) => {
    const {number,image,highlight} = props 
    const boxColor = number%2===0?'box-black':'box-white'
    const highlightClass = highlight?'box-highlight':''

    return (
        <div className={`board-box ${boxColor} ${highlightClass}`}>
        {image &&
        (<div className='box-piece' style={{backgroundImage: `url(${image})`}}>
            </div>)}
           
        </div>
    


)

        }

export default BoardBox

