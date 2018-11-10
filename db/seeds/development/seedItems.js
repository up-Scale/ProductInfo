const faker = require('faker');

exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  console.time("running")
  for (var i = 0; i < 10000; i++){
    var itemArr = [];
    for (var j = 0; j < 1000; j++){
        var genProductName = faker.commerce.productName();
        var genPrice = faker.commerce.price();
        var genSalesPrice = faker.commerce.price() < genPrice ? faker.commerce.price() : genPrice;
        var genAverageScore = faker.random.number();
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

