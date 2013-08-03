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

var imageHash = {"empty":"8bit_img/lady_rainicorn.png",
	"start":"8bit_img/lumpy_space_princess.png",
	"end":"8bit_img/pie.png",
	"wall":"8bit_img/snail.png"
};


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
			if (imgPath) {
				$(newCol).html('<img src="'+imgPath+'" width="'+size+' height="'+size+'">');	
			}
			
			
			$(newRow).append(newCol);
		}
		$("#gameBoard").append($(newRow));
	}
	//in the future, make board as big as possible and variable
	$(".gameCell").css("height",size);
	$(".gameCell").css("width",size);
}

drawEverything = function(robot, board) {
	console.log("redrawing");
	$("#gameBoard").html('');
	loadLevel(board);
	var newi = robot.newLocation[0];
	var newj = robot.newLocation[1];
	var imgPath = "./8bit_img/neptr.png"
	$("#i"+newi+"j"+newj).html('<img src="'+imgPath+'" width="'+size+' height="'+size+'">');
}
