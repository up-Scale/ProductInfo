import React from 'react';
import Price from './styled-components/Price.jsx';
import SalePrice from './styled-components/SalePrice.jsx';

const Pricing = ({prices}) => {
  
  const convertNumber = (x) => {
    if (x) return x.toFixed(2).toLocaleString();
  }
  
  return(
    <div>
      {prices.sale_price > 0 
        ? <div><SalePrice>{convertNumber(prices.sale_price)}</SalePrice> <Price>{convertNumber(prices.price)}</Price></div> 
        : <SalePrice>{convertNumber(prices.price)}</SalePrice> }
    </div>
  )
}

export default Pricing;