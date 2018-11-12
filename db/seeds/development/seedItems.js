const faker = require('faker');

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

exports.seed = async function(knex, Promise) {
  console.time("running")
  for (var i = 0; i < 10000; i++){
    var itemArr = [];
    for (var j = 0; j < 1000; j++){
        var genProductName = faker.commerce.productName();
        var genPrice = faker.commerce.price();
        var genSalesPrice = (faker.commerce.price() < genPrice) ? faker.commerce.price() : genPrice - 5;
        var genAverageScore = getRandomArbitrary(0, 5)
        var genDealEndDate = faker.date.future();
        var genUnitsSold = faker.random.number();
        var genShippingOpt = "Free Shipping to USA";
        var genDropCount = 1;
        
        itemArr.push({
            name: genProductName,
            price: genPrice,
            sale_price: genSalesPrice,
            average_score: genAverageScore,
            deal_ends: genDealEndDate,
            units_sold: genUnitsSold,
            shipping_option: genShippingOpt,
            drop_count: genDropCount,
        })
    }
          await knex.transaction((tr) => {
            return knex.batchInsert('items', itemArr)
                       .transacting(tr)
                       .then(tr.commit)
                       .catch(tr.rollback)
                       .catch(err => console.log("Double error"))            
        })
        .catch(err => {console.log(err, 'error in seed file items')})
      }

      console.timeEnd("running")
};

