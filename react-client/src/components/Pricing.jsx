import React from 'react';
import Price from './styled-components/Price.jsx';
import SalePrice from './styled-components/SalePrice.jsx';

const Pricing = ({prices}) => {
  
  // const convertNumber = (x) => {
  //   if (x) return x.toFixed(2);
  // }
  
  return(
    <div>
      {prices.sale_price > 0 
        ? <div><SalePrice>{prices.sale_price}</SalePrice> <Price>{prices.price}</Price></div> 
        : <SalePrice>{prices.price}</SalePrice> }
    </div>
  )
}

export default Pricing;