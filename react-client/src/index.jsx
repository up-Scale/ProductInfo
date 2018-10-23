import React from 'react';
import ReactDOM from 'react-dom';

class ProductInfo extends React.Component {
  render() {
    return (
      <div>Hello, Future Product Component Info!</div>
    )
  }
}

ReactDOM.render(<ProductInfo />, document.getElementById('product-info'));