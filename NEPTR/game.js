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

