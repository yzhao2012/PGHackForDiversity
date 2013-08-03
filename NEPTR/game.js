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

imageHash = {"empty":"8bit_img/lady_rainicorn.png"};

loadLevel = function(board) {
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
			
			$(newCol).html("i"+i+"j"+j);
			$(newRow).append(newCol);
		}
		$("#gameBoard").append($(newRow));
	}
	//in the future, make board as big as possible and variable
	var size = "40px";
	$(".gameCell").css("height",size);
	$(".gameCell").css("width",size);
}
