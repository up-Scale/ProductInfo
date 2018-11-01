import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './components/Categories.jsx';
import Pricing from './components/Pricing.jsx';
import PricingLine from './components/styled-components/PricingLine.jsx';
import ReviewInfo from './components/ReviewInfo.jsx';
import Shipping from './components/Shipping.jsx';
import ReminderButton from './components/styled-components/ReminderButton.jsx';
import ItemName from './components/styled-components/ItemName.jsx';
var axios = require('axios');

export default class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminder: false,
      info: {},
      categories: []
    }

    this.toggleReminder = this.toggleReminder.bind(this);
  }

  toggleReminder() {
    this.setState({reminder: !this.state.reminder});
  }

  componentDidMount() {
    let url = window.location.href.split('/');
    let pathEnd = url[url.length - 1];
    if (!pathEnd) pathEnd = 'flashlight';

    axios.get('/buy/' + pathEnd)
    .then ( ({data}) => {
      this.setState({info: data[0]});
      axios.get('/categories/' + pathEnd)
      .then ( ({data}) => {
        this.setState({categories: data});
      })
      .catch( (err) => console.log('error on get to categories: ', err));
    })
    .catch( (err) => console.log('error on get: ', err));
  }

  render() {
    return (
      <div>
        <Categories categories={this.state.categories}/>
        <ItemName>{this.state.info.name}</ItemName>

        <PricingLine>
          <Pricing prices={this.state.info}/>
          <ReminderButton onClick={this.toggleReminder} reminder={this.state.reminder}>Remind Me</ReminderButton>
        </PricingLine>
        
        <ReviewInfo reviews={this.state.info}/>
        <Shipping shipping={this.state.info}/>
        
      </div>
    )
  }
}

window.Info = ProductInfo;
// ReactDOM.render(<ProductInfo />, document.getElementById('product-info'));