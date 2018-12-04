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
import axios from 'axios';

export default class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    if (this.props){
      this.state = {
        reminder: false,
        info: this.props.info,
        categories: this.props.categories
      }
    }
    
    this.getItemData = this.getItemData.bind(this);
    this.toggleReminder = this.toggleReminder.bind(this);
    this.joinDrop = this.joinDrop.bind(this);
  }

  toggleReminder() {
    this.setState({reminder: !this.state.reminder});
  }

  joinDrop() {
    axios.post('/api/drop', this.state.info)
    .then( (response) => {
      this.getItemData(this.state.info.id)
    })
    .catch ( (err) => {console.log('error on post to drop: ', err)});
  }

  getItemData(itemId) {
    axios.get('/api/' + itemId)
    .then( ({data}) => {
        this.setState({
          info: data.info,
          categories: data.info.category[data.info.category.length-1] === 's' ? data.info.category : data.info.category +'s'
        })
      })
      .catch( (err) => {console.log('error on get: ', err)});
  }

  // getCategories(itemName) {
  //   axios.get('/api/categories/' + itemName)
  //   .then( ({data}) => {
  //     console.log(data[0])
  //     this.setState({categories: data})
  //   })
  //   .catch( (err) => {console.log('error on get to categories: ', err)});
  // }

  // getEndPoint() {
  //   let url = window.location.href.split('/');
  //   return url[url.length - 1]
  // }

  // componentDidMount() {
  //   let pathEnd = this.getEndPoint()
  //   this.getItemData(pathEnd);
  //   // this.getCategories(pathEnd);
  // }

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

// window.Info = ProductInfo;
// ReactDOM.hydrate(<ProductInfo />, document.getElementById('Info'));