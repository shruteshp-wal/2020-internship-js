var fs = require('fs');
var targetPath = "./dir1"

// REQUIREMENTS
// 1. Pass the directory name using command line argument
// 2. Access the input directory in such a way that it should read all the files and subdirectories in it but with a condition that it should not exceed 10 contents .
// 3. If the accessed one is a sub directory repeat the accessing process as in step2
// 4. the output should be in the following manner
// mainDir
//      SubDir1
//              file11
//              file12
//              file13
//              ...others(if there are more than 10 contents)
//      subDir2
//              file21
//              file22
//      file1
//      file2
//      ...others(if there are more than 10 contents)

const isDir = dirEntry => dirEntry.isDirectory()
const isFile = dirEntry => dirEntry.isFile()
const print = (level, text) => console.log(`${Array(level).fill('->').join('')}${text}`)

function traverse(pathToDir, { level, pathPrefix, onFinish }) {
    // const  { pathPrefix } = options;
    // const pathPrefix = options.pathPrefix;
    print(level, pathToDir);

    let pathToRead = pathToDir;
    if (pathPrefix) {
        pathToRead = `${pathPrefix}/${pathToDir}`
    }

    fs.readdir(pathToRead, {
        withFileTypes: true,
    }, (err, contents) => {
        if(err) {
            console.error(err);
            return;
        }

        const afterTraversingChildren = (contents) => {
            for (const content of contents) {
                if(isFile(content)) {
                    print(level + 1, content.name)
                }
            }
        }

        // Got the contents of the directory
        // For each content, if its a directory recurse, else print name
        for (const content of contents) {
            if(isDir(content)) {
                traverse(content.name, {
                    pathPrefix: pathToRead, 
                    onFinish: () => afterTraversingChildren(contents), 
                    level: level + 1,
                })
            }
        }

        if(onFinish) {
            onFinish();
        }
    })
}

traverse(targetPath, {level: 0});