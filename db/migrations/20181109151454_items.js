
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('items', function (table) {
        table.increments().primary()
        table.string('name')
        table.decimal('price')
        table.decimal('sale_price')
        table.string('average_score')
        table.date('deal_ends')
        table.integer('units_sold')
        table.string('shipping_option')
        table.integer('drop_count')
        table.string('category')
    })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('items')
    ])
};
