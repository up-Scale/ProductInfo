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

// const genProductName = faker.commerce.productName();
// const genPrice = faker.commerce.price();
// const genSalesPrice = faker.commerce.price() < genPrice ? faker.commerce.price() : genPrice;
// const genAverageScore = faker.random.number();
// const genDealEndDate = faker.date.soon();
// const genUnitsSold = faker.random.number();
// const genShippingOpt = "Free Shipping to USA";
// const genDropCount = 1;
// const insertItem = "insert into items(name, price, sale_price, average_score, deal_ends, units_sold, shipping_option, drop_count) values($1, $2, $3, $4, $5, $6, $7, $8)"
// const insertItemValues = [genProductName, genPrice, genSalesPrice, genAverageScore, genDealEndDate, genUnitsSold, genShippingOpt, genDropCount]
// const genProduct = faker.commerce.product();
// const insertCat = "insert into categories(name) values($1)"
// const insertCatValues = [genProduct];

for (var i = 0; i < 10000; i++){
    var itemArr = [];
    var categoryArr = [];
    for (var j = 0; j < 1000; j++){
        var genProductName = faker.commerce.productName();
        var genPrice = faker.commerce.price();
        var genSalesPrice = faker.commerce.price() < genPrice ? faker.commerce.price() : genPrice;
        var genAverageScore = faker.random.number();
        var genDealEndDate = faker.date.future();
        var genUnitsSold = faker.random.number();
        var genShippingOpt = "Free Shipping to USA";
        var genDropCount = 1;
        var genProduct = faker.commerce.product();
        
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

        // categoryArr.push({name: genProduct})
    }
    setTimeout(() => {
        return knex.transaction((tr) => {
            return knex.batchInsert('items', itemArr)
                       .transacting(tr)
                       .then(tr.commit)
                       .catch(tr.rollback)
                       .catch(err => console.log("Double error"))
                       
        })
        .then(() => console.log("items batch successful"))
        .catch(err => console.log(err, "error in batch items"))
    }, 1000)

    // knex.transaction((tr) => {
    //     return knex.batchInsert('categories', categoryArr)
    //                .transacting(tr)
    // })
    // .then(() => console.log("categories batch successful"))
    // .catch(err => console.log(err, "error in batch categories"))
}

// knex('items').insert({
//     name: genProductName,
//     price: genPrice,
//     sale_price: genSalesPrice,
//     average_score: genAverageScore,
//     deal_ends: genDealEndDate,
//     units_sold: genUnitsSold,
//     shipping_option: genShippingOpt,
//     drop_count: genDropCount,
// })
// knex('categories').insert({
//     name: genProduct,
// })


// Category.sync({force: true})
//         .then(() => {
//             for (var i = 0, p = Promise.resolve(); i < 100000; i++){
//                 p = p.then(_ => new Promise(resolve => {
//                     Category.create({
//                         name: genProduct,
//                     })
//                     resolve();
//                 }))
//                 .catch(err => console.log(err, "err @ Item create"))
//             }
//         })
//         .catch(err => console.log(err, "err @ Item sync"))