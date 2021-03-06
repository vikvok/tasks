/* jshint node: true */
'use strict';

var stat=require('node-static'),
http=require('http'),
url=require('url'),
qs=require('querystring'),
fileServer=new stat.Server('./public');

http.createServer(reqProc).listen(8080);
console.log('node-static server is running at port 8080');

function reqProc(req, resp) {

	var u = req.url;
	var parsed = url.parse(req.url);
	var pathName = parsed.pathname;
	var query =  parsed.query;
	console.log('pathname = ', pathName);
	console.log('query = ', parsed.query);


switch(pathName) {
		case '/req1': 
		 setTimeout(function() {
			resp.writeHead(200,{'content-type':'text/plain'});
			resp.write('go');
			resp.end();
		 }, 1500);
		 break;
		case '/req2': 
		 setTimeout(function() {
			resp.writeHead(200,{'content-type':'text/plain'});
			resp.write('go');
			resp.end();
		 }, 500);
			break;
		default:
			fileServer.serve(req, resp);
			break;
	}
}