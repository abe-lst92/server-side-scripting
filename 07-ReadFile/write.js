const fs = require("fs");


fs.writeFile("movies.txt", "The color purple, sister act", function(err){

    if(err){
        return console.log(err);
    }

    console.log("movies.txt was updated")
});