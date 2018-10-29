import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './components/Categories.jsx';
import Pricing from './components/Pricing.jsx';
import ReviewInfo from './components/ReviewInfo.jsx';
import Shipping from './components/Shipping.jsx';
import ReminderButton from './components/styled-components/ReminderButton.jsx';
var axios = require('axios');

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminder: false,
      info: {}
    }

    this.toggleReminder = this.toggleReminder.bind(this);
  }

  toggleReminder() {
    this.setState({reminder: !this.state.reminder});
  }

  componentDidMount() {
    let url = window.location.href.split('/');
    let pathEnd = url[url.length - 1];
    console.log(pathEnd);

    axios.get('/item/' + pathEnd)
    .then ( ({data}) => {this.setState({info: data[0]})})
    .catch( (err) => console.log('error on get: ', err));
  }

  render() {
    return (
      <div>
        <Categories />
        <Pricing prices={this.state.info}/>
        <ReviewInfo reviews={this.state.info}/>
        <Shipping />
        <ReminderButton onClick={this.toggleReminder} reminder={this.state.reminder}>Remind Me</ReminderButton>
      </div>
    )
  }
}

ReactDOM.render(<ProductInfo />, document.getElementById('product-info'));