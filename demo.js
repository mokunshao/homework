var fs = require('fs');
var dirName = process.argv[2]; 
try{
    fs.accessSync(dirName);
    process.exit(1);
}catch(e){
    fs.mkdirSync("./" + dirName);
    process.chdir("./" + dirName);
    fs.mkdirSync('css');
    fs.mkdirSync('js'); 
    fs.writeFileSync("./index.html", "<!DOCTYPE>");
    fs.appendFileSync("./index.html", "\n"+"<title>Hello</title>");
    fs.appendFileSync("./index.html", "\n"+"<h1>Hi</h1>");
    fs.writeFileSync("css/style.css", "h1{color: red;}");
    fs.writeFileSync("./js/main.js", 'var string = "Hello World"');
    fs.appendFileSync("./js/main.js", "\n"+"alert(string)");
    process.exit(0);
}