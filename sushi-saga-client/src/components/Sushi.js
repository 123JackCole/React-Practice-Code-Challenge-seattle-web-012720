import React, { Fragment } from 'react'

const Sushi = (props) => {

  const handleEatSushi = () => {
    props.onEatSushi(props.id)
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={ handleEatSushi }>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img src={ props.img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        { props.name } - ${ props.price }
      </h4>
    </div>
  )
}

export default Sushi