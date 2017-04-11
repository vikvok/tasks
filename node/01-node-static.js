/* jshint node: true */
'use strict';

var stat=require('node-static'),
	http=require('http'),
	url=require('url'),
	qs=require('querystring'),
	fileServer=new stat.Server('./public');

http.createServer(reqProc).listen(8080);
console.log('node-static server is running at port 8080');

var db = [
	{user: 'Joe',
		password: '123'}, {user: 'Joe',
		password: '123'}, {user: 'Joe',
		password: '123'}
];

function reqProc(req, resp) {
	//
	var u = req.url;
	//console.log('url = ', u);

	var parsed = url.parse(req.url);

	var pathName = parsed.pathname;
	console.log('pathname = ', pathName);
	console.log('query = ', parsed.query);
	//var path=url.parse(req.url).pathname;
	//req.addListener('end', function() {
		//fileServer.serve(req, resp);
	//}).resume();

	switch(pathName) {
		case '/auth':
			resp.writeHead(200,{'content-type':'text/html'});
			resp.write('<b>1234567890</b>');
			resp.end();
			break;
		default:
			fileServer.serve(req, resp);
			break;
	}
}