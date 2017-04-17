/* jshint node: true */
'use strict';

var stat=require('node-static'),
http=require('http'),
url=require('url'),
qs=require('querystring'),
fileServer=new stat.Server('./public');

http.createServer(reqProc).listen(8080);
console.log('node-static server is running at port 8080');

var db = ['Cat','Lynx','Tiger','Lion','Leopard','Panther'];
//var db = 'Lion';
function reqProc(req, resp) {

	var u = req.url;
	var parsed = url.parse(req.url);
	var pathName = parsed.pathname;
	var query =  parsed.query;
	console.log('pathname = ', pathName);
	console.log('query = ', parsed.query);


switch(pathName) {
		case '/add':
			var wordCheck = checkDb(query, db); 
			resp.writeHead(200,{'content-type':'text/plain'});
			if (!wordCheck) {
				db.push(query);
				resp.write('Word added');
			} else {
				resp.write('Busy Word')
			}
			resp.end();
		 break;
		case '/get': 
			resp.writeHead(200,{'content-type':'text/plain'});
			var s = db.join('&');
			resp.write(s);
			resp.end();
			break;
		default:
			fileServer.serve(req, resp);
			break;
	}
}

function checkDb(word, db) {
	for(var i = 0; i < db.length; i++) {
	 var a = db[i].toUpperCase();
	 var b = word.toUpperCase();
		if (a == b) {
			return true;}
	}
}