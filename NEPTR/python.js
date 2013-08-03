function outf(text) {
    var mypre = document.getElementById("gameStatus");
    mypre.innerHTML = mypre.innerHTML + text;
}
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}


function runit(robot, board) {
   var prog = "robotHealth = " + robot.getHealth();
   prog += "\nrobotLocation = " + robot.getLocation();
   
   
   prog += "\nnorthInfo = 1";
   prog += "\nsouthInfo = 2";
   prog += "\neastInfo = 3";
   prog += "\nwestInfo = 4";
   
   
   prog += "\n" + document.getElementById("givenCode").value; 
   prog += "\n" + document.getElementById("userCode").value;
   var mypre = document.getElementById("gameStatus");
   mypre.innerHTML = '';
   Sk.canvas = "mycanvas";
   Sk.pre = "gameStatus";
   Sk.configure({output:outf, read:builtinRead});
   eval(Sk.importMainWithBody("<stdin>",false,prog));
   
}