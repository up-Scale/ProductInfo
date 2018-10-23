var express = require('express');
var parser = require('body-parser');

let app = express();
app.use(parser.json());
app.use(express.static(__dirname + '../react-client/dist'));

let port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
})