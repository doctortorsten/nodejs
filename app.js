var express = require('express');

var app = express();


var server_port = process.env.OPENSHIFT_NODEJS_PORT;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP;

var server = app.listen(server_port, server_ip_address, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


app.get('/', function (req, res) {
	  var host = server.address().address;
	  var port = server.address().port;
	  
	  res.send('Example app listening at http://%s:%s', host, port);

	});
