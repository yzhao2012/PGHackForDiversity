function outf(text) {
    var mypre = document.getElementById("gameStatus");
    mypre.innerHTML = mypre.innerHTML + text;
}
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit(robotx, roboty, northInfo, southInfo, eastInfo, westInfo) {
   var prog = "robotx = " + robotx;
   prog += "\nroboty = " + roboty;
   prog += "\nnorthInfo = " + northInfo;
   prog += "\nsouthInfo = " + southInfo;
   prog += "\neastInfo = " + eastInfo;
   prog += "\nwestInfo = " + westInfo;
   prog += "\n" + document.getElementById("givenCode").value; 
   prog += "\n" + document.getElementById("userCode").value;
   var mypre = document.getElementById("gameStatus");
   mypre.innerHTML = '';
   Sk.canvas = "mycanvas";
   Sk.pre = "gameStatus";
   Sk.configure({output:outf, read:builtinRead});
   eval(Sk.importMainWithBody("<stdin>",false,prog));
}