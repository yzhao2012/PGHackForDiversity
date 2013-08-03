//function that draws the  table
drawHtmlTable = function(height, width) {
	for (var i = 0; i < height; i++) {
		var newRow = document.createElement("tr");
		for (var j = 0; j < width; j++) {
			var newCol = document.createElement("td");
			$(newCol).attr("id","i"+i+"j"+j);
			$(newCol).html("i"+i+"j"+j);
		}
		$("#gameBoard").before($(newRow));
	}
}

var imageHash = {"empty":"8bit_img/lady_rainicorn.png"};
var size = "40px";

var loadLevel = function(board) {
	console.log("start loading level");
	for (var i = 0; i < board.height; i++) {
		var newRow = document.createElement("tr");
		for (var j = 0; j < board.width; j++) {
			var newCol = document.createElement("td");
			$(newCol).attr("id","i"+i+"j"+j);
			$(newCol).addClass("gameCell");
			//put appropriate background image in cell
			var imgPath = imageHash[board.finalMatrix[i][j].state];
			console.log(imgPath);
			if (imgPath) {
				//$(newCol).css("background-image","url('"+imgPath+"')");	
			}
			
			
			$(newRow).append(newCol);
		}
		$("#gameBoard").append($(newRow));
	}
	//in the future, make board as big as possible and variable
	var size = "40px";
	$(".gameCell").css("height",size);
	$(".gameCell").css("width",size);
}

drawRobot = function(oldLoc, newLoc) {
	var oldi = oldLoc[0];
	var oldj = oldLoc[1];
	var newi = newLoc[0];
	var newj = newLoc[1];
	console.log("let's draw!");
	//delete old robot
	$("#i"+oldi+"j"+oldj).html('');
	//put new robot
	var imgPath = "./8bit_img/neptr.png"; 
	console.log('<img src="'+imgPath+'" width="'+size+' height="'+size+'">');
	$("#i"+newi+"j"+newj).html('<img src="'+imgPath+'" width="'+size+' height="'+size+'">');
}
