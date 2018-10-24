import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './components/Categories.jsx';
import Pricing from './components/Pricing.jsx';
import ReviewInfo from './components/ReviewInfo.jsx';
import Shipping from './components/Shipping.jsx';

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
      </div>
    )
  }
}

ReactDOM.render(<ProductInfo />, document.getElementById('product-info'));