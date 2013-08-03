function Cell(state)
{
	this.state = state;
	this.getState = function()
	{
		return this.state;
	}
	
	return this;
}

function Board(matrix)
{
	this.height = matrix.length;
	this.width = matrix[0].length;
	this.finalMatrix = new Array();
	for (var i = 0; i < matrix.length ; i++)
	{
		this.finalMatrix[i] = new Array();
		for (var a = 0; a < matrix[i].length ; a++)
		{
			this.finalMatrix[i][a] = new Cell(matrix[i][a]);
		}
	}
	
	return this;
}
