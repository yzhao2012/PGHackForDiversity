
function cell(state)
{
	this.state = state;
}

function board(matrix)
{
	var finalMatrix = [[]];
	for (var i = 0; i < matrix.length ; i++)
	{
		for (var a = 0; a < matrix[i].length ; a++)
		finalMatrix[i][a] = cell(matrix[i][a]);
	}
	
	
}

