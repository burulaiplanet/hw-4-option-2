import './VisaCard.css'
import img from './img/image.png'
function CardHeader(){
    return(
<div className='card_header'> 
             <img className='img' src={img} alt=""></img>
                 <h1>VISA</h1>
             </div>
    )
}

export default CardHeader