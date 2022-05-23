const fs = require('fs');

const path = 'file.txt';

fs.readFile(path, 'utf8', (err, data) => {
	if(err){
		console.error(err);
		return;
	}
	console.log(data);
});

let content = "Hellow World";

fs.writeFile('newFile.txt', content, err => {
	if(err){
		console.error(err);
	}
	console.log("File written successfully");
});
