import React from 'react';

const Pricing = ({prices}) => {
  return(
    <div>{prices.price} {prices.sale_price}</div>
  )
}

export default Pricing;