const fs = require('fs');

const text = process.argv[2];

fs.appendFile("sample.txt", "text", function(err){
    if (err){
        console.log(err);

    }else{
        console.log("Content Added");

    }
});