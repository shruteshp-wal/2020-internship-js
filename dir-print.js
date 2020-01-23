var fs = require('fs');
var path = "./dir1"

function printDir(path, len) {
    fs.readdir(path, function (err, items) {
        if (items == undefined)
            return
        let spaces = ""
        for (var j = 0; j < len; j++)
            spaces = spaces + "->"
        len = len + 1

        if (items.length > 4) {
            console.log(spaces+"A"+items.length)
            for (var i = 0; i < 5; i++) {
                let tempPath = path + "/" + items[i];
                console.log(spaces + items[i])
                printDir(tempPath, len)
            }
            console.log(spaces + (items.length - 4) + " more folders/files left");
        }
        else {
            // console.log("B"+items.length)
            for (var i = 0; i < items.length; i++) {
                let tempPath = path + "/" + items[i];
                printDir(tempPath, len)
                console.log(spaces + items[i]);
            }
        }
    });
}

printDir(path, 0);