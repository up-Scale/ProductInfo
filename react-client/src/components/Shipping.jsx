import React from 'react';
import TimeLeft from './styled-components/TimeLeft.jsx';
import UnitsSold from './styled-components/UnitsSold.jsx';
import ShippingType from './styled-components/ShippingType.jsx';
import { Icon } from 'react-icons-kit';
import {ic_watch_later} from 'react-icons-kit/md/ic_watch_later';

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
      <ShippingType>{shipping.shipping_option}</ShippingType>
    </div>
  )
}

export default Shipping;