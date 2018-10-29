import React from 'react';

const Shipping = ({shipping}) => {

  const getTimeDiff = (diff) => {
    let days = Math.floor(diff / 86400)
    let hours = Math.floor(diff / 3600) % 24
    return `${days} days ${hours} hours remaining `
  }

  return(
    <div>{getTimeDiff((new Date(shipping.time * 1000) - new Date()) / 1000)} 
      {`${shipping.units_sold} sold `} 
      {shipping.shipping_option}
    </div>
  )
}

export default Shipping;