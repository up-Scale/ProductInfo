const {Product} = require('../index.js');
// const {promisify} = require('util');
const faker = require('faker');
const fs = require('fs');

// var append = promisify(fs.appendFile);

var getRandomArbitrary = (min, max) => {
  var number = Math.random() * (max - min) + min;
  if(number > 0 && number < 0.75){
    return 0.5
   }
  if(number >= 0.75 && number < 1.25){
    return 1
  }
  if(number >= 1.25 && number < 1.75){
    return 1.5
  }
  if(number >= 1.75 && number < 2.25){
    return 2
  }
  if(number >= 2.25 && number < 2.75){
    return 2.5
  }
  if(number >= 2.75 && number < 3.25){
    return 3
  }
  if(number >= 3.25 && number < 3.75){
    return 3.5
  }
  if(number >= 3.75 && number < 4.25){
    return 4
  }
  if(number >= 4.25 && number < 4.75){
    return 4.5
  }
  if(number >= 4.75 && number < 5){
    return 5
  }
}

var stream = fs.createWriteStream('db/mongo/products.csv', { flags: 'a' });
stream.write(`"name", "price", "sale_price", "average_score", "deal_ends", "units_sold", "shipping_option", "drop_count" \n`);

var seed = () => {
  var prod = ""
  for (var i = 0; i < 10000; i++){
    var genProductName = faker.commerce.productName();
    var genPrice = faker.commerce.price();
    var genSalesPrice = (faker.commerce.price() < genPrice) ? faker.commerce.price() : genPrice - 5;
    var genAverageScore = getRandomArbitrary(0, 5)
    var genDealEndDate = faker.date.future();
    var genUnitsSold = faker.random.number();
    var genShippingOpt = "Free Shipping to USA";
    var genDropCount = 1;

    prod += genProductName + ", " + genPrice + ", " + genSalesPrice + ", " + genAverageScore + ", " + genDealEndDate + ", " + genUnitsSold + ", " + genShippingOpt + ", " + genDropCount + "\n"

  }
  stream.write(prod)
  prod = null;
}

populate = (thisRound, totalRounds) => {
  console.time('data generation took');
  console.log('begin');
  stream.on('drain', () => {
    if (thisRound < totalRounds) {
      thisRound++;
      console.log(thisRound);
      seed();
    } else {
      console.timeEnd('data generation took');
    }
  });
  seed();
};

populate(0, 999)
    
// var newProduct = async (Model) => {
//     await Model.find({name: genProductName}, (err, docs) =>{
//         if (docs.length === 0 || err){
//             new Product({
//                 name: genProductName,
//                 price: genPrice,
//                 sale_price: genSalesPrice,
//                 average_score: genAverageScore,
//                 deal_ends: genDealEndDate,
//                 units_sold: genUnitsSold,
//                 shipping_option: genShippingOpt,
//                 drop_count: genDropCount,
//             })
//             .save((err)=> {
//                 if (err) console.log(err, 'error in creating dummy data')
//                 else console.log('Product saved.')
//               })
//             } else {
//               return newProduct(Model)
//             }
//           })
// }

module.exports = seed;
