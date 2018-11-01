import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './components/Categories.jsx';
import Pricing from './components/Pricing.jsx';
import PricingLine from './components/styled-components/PricingLine.jsx';
import ReviewInfo from './components/ReviewInfo.jsx';
import Shipping from './components/Shipping.jsx';
import JoinDropButton from './components/styled-components/JoinDropButton.jsx';
import ReminderButton from './components/styled-components/ReminderButton.jsx';
import ItemName from './components/styled-components/ItemName.jsx';
import ItemNameLine from './components/styled-components/ItemNameLine.jsx';
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
    this.joinDrop = this.joinDrop.bind(this);
  }

  toggleReminder() {
    this.setState({reminder: !this.state.reminder});
  }

  joinDrop() {
    let pathEnd = this.getEndPoint();
    axios.post('/drop/' + pathEnd)
    .then( (response) => {this.getItemData(pathEnd)})
    .catch ( (err) => {console.log('error on post to drop: ', err)});
  }

  getItemData(itemName) {
    axios.get('/buy/' + itemName)
    .then( ({data}) => {
      this.setState({info: data[0]})
    })
    .catch( (err) => {console.log('error on get: ', err)});
  }

  getCategories(itemName) {
    axios.get('/categories/' + itemName)
    .then( ({data}) => {
      this.setState({categories: data})
    })
    .catch( (err) => {console.log('error on get to categories: ', err)});
  }

  getEndPoint() {
    let url = window.location.href.split('/');
    return url[url.length - 1] || 'flashlight';
  }

  componentDidMount() {
    let pathEnd = this.getEndPoint()

    this.getItemData(pathEnd);
    this.getCategories(pathEnd);
  }

  render() {
    return (
      <div>
        <Categories categories={this.state.categories}/>

        <ItemNameLine>
          <ItemName>{this.state.info.name}</ItemName>
          <JoinDropButton onClick={this.joinDrop}>Join Drop</JoinDropButton>
        </ItemNameLine>
        
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