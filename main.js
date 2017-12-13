var childProcess = require('child_process');
var child = childProcess.fork('./child.js',[1,2]);

child.on('message', function(msg) {
    console.log("Main on message: ", msg);
});

child.send({message: "I love you !"});