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

    this.toggleReminder = this.toggleReminder.bind(this);
  }

  toggleReminder() {
    this.setState({reminder: !this.state.reminder});
  }

  render() {
    return (
      <div>
        <Categories />
        <Pricing />
        <ReviewInfo />
        <Shipping />
        <ReminderButton onClick={this.toggleReminder} reminder={this.state.reminder}>Remind Me</ReminderButton>
      </div>
    )
  }
}

ReactDOM.render(<ProductInfo />, document.getElementById('product-info'));