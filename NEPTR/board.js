function cell(state)
{
	this.state = state;
	this.getState = function()
	{
		return this.state;
	}
}

function board(matrix)
{
	this.finalMatrix = new Array();
	for (var i = 0; i < matrix.length ; i++)
	{
		this.finalMatrix[i] = new Array();
		for (var a = 0; a < matrix[i].length ; a++)
		{
			this.finalMatrix[i][a] = new cell(matrix[i][a]);
		}
	}
	

}
