import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './components/Categories.jsx';
import Pricing from './components/Pricing.jsx';
import ReviewInfo from './components/ReviewInfo.jsx';
import Shipping from './components/Shipping.jsx';
import ReminderButton from './components/styled-components/ReminderButton.jsx';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminder: false
    }
  }

  render() {
    return (
      <div>
        <Categories />
        <Pricing />
        <ReviewInfo />
        <Shipping />
        <ReminderButton>Remind Me</ReminderButton>
      </div>
    )
  }
}

ReactDOM.render(<ProductInfo />, document.getElementById('product-info'));