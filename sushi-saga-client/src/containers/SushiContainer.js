import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {

  const renderSushi = () => {
    return props.sushis.map((sushi, index) => {
      if (index < 4) {
        return <Sushi {...sushi} key={index} onEatSushi={props.onEatSushi}/>
      }
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {
 
          // Render Sushi components here!
          renderSushi()
        }
        <MoreButton onMoreSushi={props.onMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer