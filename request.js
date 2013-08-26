var https = require("https");
var username = "vpullela";
var options = {
	host: 'api.github.com',
	path: '/users/'+username+'/repos',
	method: 'GET'
}

var request = https.request(options, function(response){
	var body = '';
	response.on("data", function(chunk){
		body += chunk.toString();
	});
	response.on("end", function(){
		var json = JSON.parse(body);
		console.log("Count: ", json.length);
	});
});

request.end();
