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
	{user: 'Joe',	password: '123'},
	{user: 'Max',	password: '123'},
	{user: 'Sendi',	password: '123'}
];

function reqProc(req, resp) {

	var u = req.url;
	//console.log('url = ', u);

	var parsed = url.parse(req.url);
	var pathName = parsed.pathname;
	var query =  parsed.query;
	console.log('pathname = ', pathName);
	console.log('query = ', parsed.query);
	//var path=url.parse(req.url).pathname;
	//req.addListener('end', function() {
		//fileServer.serve(req, resp);
	//}).resume();

	switch(query) {
		case 'Joe':
			resp.writeHead(200,{'content-type':'text'});
			resp.write('Welcom joe');
			resp.end();
			break;
		case 'Max':
			resp.writeHead(200,{'content-type':'text'});
			resp.write('Welcom Max');
			resp.end();
			break;
		case 'Sendi':
			resp.writeHead(200,{'content-type':'text'});
			resp.write('Welcom Sendi');
			resp.end();
			break;
		default:
			fileServer.serve(req, resp);
			break;
	}
}