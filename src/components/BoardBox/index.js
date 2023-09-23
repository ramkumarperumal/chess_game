
import './index.css'

const BoardBox = (props) => {
    const {number,image} = props 
    const boxColor = number%2===0?'box-black':'box-white'


    return (
        <div className={`board-box ${boxColor}`}>
        {image &&
        (<div className='box-piece' style={{backgroundImage: `url(${image})`}}>
            </div>)}
           
        </div>
    


)

        }

export default BoardBox

