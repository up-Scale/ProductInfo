mongo productInfo --eval "db.dropDatabase()"
time mongoimport -d productInfo -c Product --type csv --file db/mongo/products.csv --headerline
mongo productInfo --eval "db.Product.count()"
