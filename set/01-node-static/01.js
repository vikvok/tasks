/* jshint node: true */
'use strict';

var stat=require('node-static'),
	http=require('http'),
	fileServer=new stat.Server('./public');

http.createServer(reqProc).listen(8080);
console.log('node-static server is running at port 8080');

function reqProc(req, resp) {
	req.addListener('end', function() {
		fileServer.serve(req, resp);
	}).resume();
}