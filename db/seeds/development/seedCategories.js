const faker = require('faker');

exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  console.time("runningTime")
  for (var i = 0; i < 10000; i++){
    var categoryArr = [];
    for (var j = 0; j < 1000; j++){

        var genProduct = faker.commerce.product();

        categoryArr.push({name: genProduct})
    }
        await knex.transaction((tr) => {
            return knex.batchInsert('categories', categoryArr)
                       .transacting(tr)
                       .then(tr.commit)
                       .catch(tr.rollback)
                       
        })
        .then(() => console.log("categories batch successful"))
        .catch(err => console.log(err, "error in batch categories"))
  }
  console.timeEnd("runningTime");
};
