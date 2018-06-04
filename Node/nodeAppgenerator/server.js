var fs = require("fs");
// var stdin = process.openStdin();
var projectpath, projectname;
// console.log("Enter path to store project:")
// stdin.addListener("data", function(d) {
//     console.log("project path is:" + d.toString().trim());
//     projectpath = d.toString().trim();
//     // fs.mkdir(d.toString().trim() + '/Demoproject')
// });

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Enter path to store project:', (answer) => {
            console.log(`You enters path: ${answer}`)
            projectpath = answer;
            resolve()
        })
    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Enter project name: ', (answer) => {
            console.log(`Projet name is: ${answer}`)
            projectname = answer;
            resolve()
        })
    })
}

const main = async() => {
    await question1()
    await question2()
    fs.mkdir(projectpath + '/' + projectname, function() {
        fs.writeFile(projectpath + '/' + projectname + '/app.js', 'console.log("demo");', function(err, file) {
            if (err) throw err;
            console.log('Saved!');
        });
    })
    rl.close()
}

main()