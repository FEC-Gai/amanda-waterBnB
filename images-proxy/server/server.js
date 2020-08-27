const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const path = require('path');
const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());

//only want to proxy get request
app.use('/proxy', proxy('www.google.com', {
  filter: function(req, res) {
    return req.method == 'GET';
  }
}));

app.use('/photos', proxy('http://localhost:3001', {
  proxyReqPathResolver: function (req) {
    //localhost:3000?id=10
    let piecesArr = req.url.split('?');
    console.log('💢', piecesArr);
    let query = piecesArr[1];
    return !query ? '/' : `/room_photos/${query}`;
  }
}));


app.listen(PORT, () => {
  console.log(`proxy listening on port http://localhost:${PORT}`);
});