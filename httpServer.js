/**
 * @author Bassam
 */

var http= require("http");
var count=0;

http.createServer( function( req, rsp){
	count++;
	rsp.writeHead(200, {"Content-Type": "text\plain"});
	rsp.write("helllloooooo" + "visitor No. " + count);
	console.log("hello" + req.url);
	console.log(count);
	rsp.end();
	
}).listen(4444, "localhost");
