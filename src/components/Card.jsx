import './card.css'

const Card = (props) => {

  const cardStyles = {
    backgroundColor: props.color
  }


  return (
    <div className='card' style={cardStyles} >
     {props.color}
    </div>
  )
}

export default Card