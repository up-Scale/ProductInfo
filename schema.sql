DROP DATABASE IF EXISTS product_info;
CREATE DATABASE product_info;

USE product_info;

CREATE TABLE items (
  item_id INT(11) NOT NULL auto_increment,
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