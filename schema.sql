DROP DATABASE IF EXISTS product_info;
CREATE DATABASE product_info;

USE product_info;

CREATE TABLE items (
  item_id INT(11) NOT NULL auto_increment,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(11,2) NOT NULL,
  sale_price DECIMAL(11,2),
  number_of_reviews INT(11) DEFAULT 0,
  average_score DECIMAL(3,2) DEFAULT 0,
  deal_ends DATETIME,
  units_sold INT(11) DEFAULT 0,
  shipping_option VARCHAR(255),
  banner_image_id INT(11),
  PRIMARY KEY(item_id) 
);

CREATE TABLE categories (
  category_id INT(11) NOT NULL auto_increment,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(category_id)
);

CREATE TABLE items_categories(
  id INT(11) NOT NULL auto_increment,
  itemID INT(11) NOT NULL,
  catID INT(11) NOT NULL,
  PRIMARY KEY(id)
);

ALTER TABLE items_categories ADD FOREIGN KEY (itemID) REFERENCES items(item_id);
ALTER TABLE items_categories ADD FOREIGN KEY (catID) REFERENCES categories(category_id);


-- LOAD CATEGORY DATA

load data local infile "./db/categories.txt" into table categories
fields terminated by '\n'
(name)
set category_id = null;

-- LOAD ITEMS DATA

load data local infile "./db/data.txt" into table items
fields terminated by '|'
(name, price, sale_price, number_of_reviews, average_score, deal_ends, units_sold, shipping_option)
set item_id = NULL;

-- LOAD ITEMS_CATEGORIES

load data local infile "./db/items_cats.txt" into table items_categories
fields terminated by '|'
(@item.name, @cat.name)
set id = NULL,
itemID = (select item_id from items where items.name = @item.name),
catID = (select category_id from categories where categories.name = @cat.name);