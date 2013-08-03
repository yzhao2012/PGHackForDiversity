function Robot(health, location) {
	
	this.health = health;
	this.oldLocation = location;
	this.newLocation = location;
	
	
	//try to do move, return true when successful
	this.move = function(direction) {
		this.oldLocation = [this.newLocation[0], this.newLocation[1]];
		switch(direction) {
			case "N":
				this.newLocation[0] = this.newLocation[0] - 1;
				break;
			case "S":
				this.newLocation[0] = this.newLocation[0] + 1;
				break;
			case "E":
				this.newLocation[1] = this.newLocation[1] + 1;
				break;
			case "W":
				this.newLocation[1] = this.newLocation[1] - 1;
				break;
			default:
				return false;
		}
		return true;
		
	}
	
	/*
	this.moveBack = function(direction) {
		switch(direction) {
			case "N":
				this.location[0] = this.location[0] + 1;
				break;
			case "S":
				this.location[0] = this.location[0] - 1;
				break;
			case "E":
				this.location[1] = this.location[1] - 1;
				break;
			case "W":
				this.location[1] = this.location[1] + 1;
				break;
			default:
				return false;
		}
		return true;
	}
	*/
	
	this.damage = function(dmgAmt) {
		this.health = this.health - dmgAmt;
	}
	
	this.isDead = function() {
		if (this.health <= 0) {
			return true;
		} else {
			return false;
		}
	}
	
	
}
