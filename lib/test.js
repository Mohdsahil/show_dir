const path = require('path');
const fs = require('fs')
const fileType = require('file-type');

function test(file) {


    if (path.extname(file) === '') {

        openFolder(file)
    } else {
        fs.readdir(file, (err, file) => {
            if (err) {
                console.log(err)
            }

            file.forEach(function (fil) {
                let temp = folderPath + "\\" + fil


                if (path.extname(fil) !== '') {
                    console.log(fil + "   <--- " + file)
                } else {
                    console.log("next folder-->  " + fil)
                    openFolder(folderPath + "\\" + fil)
                }
            })
        })
    }
}

function openFolder(folderPath) {


    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.log(err)
        }

        files.forEach(function (fil) {
            var temp = folderPath + "\\" + fil;

            if (path.extname(fil) !== '' || fil == 'node_modules') {
                console.log(fil + "   <--- " + folderPath)
            } else {
                test(folderPath + "\\" + fil)

            }
        })
    })
}


module.exports = test, openFolder;