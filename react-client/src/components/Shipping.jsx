import React from 'react';

const Shipping = ({shipping}) => {
  return(
    <div>{shipping.deal_ends} {`${shipping.units_sold} sold `} {shipping.shipping_option}</div>
  )
}

export default Shipping;