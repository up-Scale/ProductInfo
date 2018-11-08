const knex = require('./index.js').knex
const faker = require('faker')

// insert into items (
//     name, price, sale_price, number_of_reviews, average_score, deal_ends, units_sold, shipping_option, banner_image_id, drop_count
// )
// select
//     md5(i::text)),
//     TO_NUMBER(md5(random()::text)),
//     md5(random()::text),
//     left(md5(random()::text), 4)
// from generate_series(1, 10000000) s(i)

const genProductName = faker.commerce.productName();
const genPrice = faker.commerce.price();
const genSalesPrice = faker.commerce.price() < genPrice ? faker.commerce.price() : genPrice;
const genAverageScore = faker.random.number();
const genDealEndDate = faker.date.soon();
const genUnitsSold = faker.random.number();
const genShippingOpt = "Free Shipping to USA";
const genDropCount = 1;
// const insertItem = "insert into items(name, price, sale_price, average_score, deal_ends, units_sold, shipping_option, drop_count) values($1, $2, $3, $4, $5, $6, $7, $8)"
// const insertItemValues = [genProductName, genPrice, genSalesPrice, genAverageScore, genDealEndDate, genUnitsSold, genShippingOpt, genDropCount]
const genProduct = faker.commerce.product();
// const insertCat = "insert into categories(name) values($1)"
// const insertCatValues = [genProduct];

// for (var i = 0; i < 100000; i++){
//     db.connection.query(insertItem, insertItemValues)
//                  .catch(err => console.log(err, "error in seed file items"))
//     db.connection.query(insertCat, insertCatValues)
//                  .catch(err => console.log(err, "error in seed file categories"))
// }

knex('items').insert({
    name: genProductName,
    price: genPrice,
    sale_price: genSalesPrice,
    average_score: genAverageScore,
    deal_ends: genDealEndDate,
    units_sold: genUnitsSold,
    shipping_option: genShippingOpt,
    drop_count: genDropCount,
})


knex('categories').insert({
    name: genProduct,
})