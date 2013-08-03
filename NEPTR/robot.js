function Robot(health, location) {
	
	this.health = health;
	this.location = location;
	
	this.getLocation = function() {
		return this.location;
	}
	
	this.getHealth = function() {
		return this.health;
	}
	
	//try to do move, return true when successful
	this.move = function(direction) {
		switch(direction) {
			case "N":
				this.location[0] = this.location[0] - 1;
				break;
			case "S":
				this.location[0] = this.location[0] + 1;
				break;
			case "E":
				this.location[1] = this.location[1] + 1;
				break;
			case "W":
				this.location[1] = this.location[1] - 1;
				break;
			default:
				return false;
		}
		return true;
	}
	
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
	
	this.damage = function(dmgAmt) {
		this.health = this.health - dmgAmt;
	}
	
	this.isDead = function() {
		if (health <= 0) {
			return true;
		} else {
			return false;
		}
	}
	
	
}
