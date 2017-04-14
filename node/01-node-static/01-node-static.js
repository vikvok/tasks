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
	var	queryObj = convert(query);
	console.log('queryObj = ', queryObj);

	switch(pathName) {
		case '/auth': 
			var yes = checkDb(db, queryObj);
			resp.writeHead(200,{'content-type':'text'});
			if (yes) {
				resp.write('Welcom ' + queryObj['user']);
			} else {
				resp.write('Password or login false');
			}
			resp.end();
			break;
		default:
			fileServer.serve(req, resp);
			break;
	}

	switch(pathName) {
		case '/reg': 
			var yes = checkDb(db, queryObj);
			resp.writeHead(200,{'content-type':'text'});
			if (yes) {
				resp.write('This login or password is busy');
			} else {
				db.push(queryObj);
				resp.write('The successful registration');
			}
			resp.end();
			break;
		default:
			fileServer.serve(req, resp);
			break;
	}
}

//user=Max&password=123
function convert(x) {
	var y, z = {};
	if (!x) {return z}
		y = x.split('&'); // ['user=Max','password=123']
	for (var i = 0; i < y.length; i++) {
			var j = y[i].split('='); //['user','Max']
			//z.a =1
			//z['a'] = 1
			z[j[0]] = j[1];
		}
		return z;	//{user: 'Max',	password: '123'}
	}
/* 
db = [
{user: 'Joe',	password: '123'},
{user: 'Max',	password: '123'},
{user: 'Sendi',	password: '123'}
];
*/
function checkDb(db, login) {
	for (var i = 0; i < db.length; i++) {
		var dbUser = db[i];
		if ( dbUser.user == login.user && dbUser.password == login.password) {
			return true;
		}
	}
	return false;
}