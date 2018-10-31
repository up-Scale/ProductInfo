import React from 'react';
import TimeLeft from './styled-components/TimeLeft.jsx';
import UnitsSold from './styled-components/UnitsSold.jsx';

const Shipping = ({shipping}) => {

  const getTimeDiff = (diff) => {
    let days = Math.floor(diff / 86400)
    let hours = Math.floor(diff / 3600) % 24

    if (days > 0) return <TimeLeft style={{color:"rgb(132, 148, 147)"}}>{`${days} days left`}</TimeLeft>
    else return <TimeLeft style={{color:"rgb(255, 114, 118)"}}>{`${hours} hours left`}</TimeLeft>
  }

  return(
    <div>
      {getTimeDiff((new Date(shipping.time * 1000) - new Date()) / 1000)}  
      <UnitsSold>{`${shipping.units_sold} sold `}</UnitsSold> 
      {shipping.shipping_option}
    </div>
  )
}

export default Shipping;