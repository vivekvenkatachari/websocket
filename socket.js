
var ws = require ("nodejs-websocket");
var myPort = 1337;

function handleConnection (conn) {
	conn.on ("text", function (s) {
		var returnstring = s.toUpperCase () + "!!!";
		console.log ("handleConnection: returning " + returnstring);
		conn.sendText (returnstring)
		});
	}

ws.createServer (handleConnection).listen (myPort);