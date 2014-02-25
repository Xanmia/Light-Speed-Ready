
var enemiesDEF = [
{ // 0 - dumb drifter	
	baseHealth: 25,
	healthIncrease: 20,
	speed: 1.5,
	reSpawn: true,
	value: 5,
	size: 10,
	init: function(){
		this.enemy = rock.clone("test");
		var actsize = (Math.random()*this.size) + 20; ///min size is 15
	  	this.enemy.scaling.x = actsize;
	  	this.enemy.scaling.y = actsize;
	  	this.enemy.scaling.z = actsize;
		this.speed  = (Math.random()*this.speed) + .1;

	},
	setup: function() {

	  var loc = SpawnOutside();
	  this.enemy.position.x = loc.x;
	  this.enemy.position.z = loc.z;

	  loc = SpawnOutside();
	  this.toX = loc.x;
	  this.toZ = loc.z;
	  this.rotation =  Math.random() * .02;
	  
	},
	behavior: function() {
		
		var dx = this.toX - this.enemy.position.x;
		var dy = this.toZ - this.enemy.position.z;
		if (dx < 5 && dy < 5){
			this.setup();
		}
		var direction = Math.atan2( dy, dx );
		this.enemy.rotation.z += this.rotation*adjmovement;
		this.enemy.rotation.x += this.rotation*adjmovement;
		this.enemy.rotation.y += this.rotation*adjmovement;
    	  this.enemy.position.x += Math.cos( direction ) * (this.speed*adjmovement);
    	  this.enemy.position.z += Math.sin( direction ) * (this.speed*adjmovement);
	}
},
{ // 1 - follower	
	baseHealth: 25,
	healthIncrease: 20,
	speed: .75,
	reSpawn: true,
	value: 5,
	size: 10,
	init: function(){
		this.enemy = rock.clone("test");
		var actsize = (Math.random()*this.size) + 20; ///min size is 15
	  	this.enemy.scaling.x = actsize;
	  	this.enemy.scaling.y = actsize;
	  	this.enemy.scaling.z = actsize;
		this.speed  = (Math.random()*this.speed) + .1;

	},
	setup: function() {
	  	  var loc = SpawnOutside();
	  this.enemy.position.x = loc.x;
	  this.enemy.position.z = loc.z;
	  
	  loc = SpawnOutside();
	  this.toX = loc.x;
	  this.toZ = loc.z;
	  	  this.rotation =  Math.random() * .02;
	},
	behavior: function() {
		
		var dx = player.Graphic.position.x - this.enemy.position.x;
		var dy = player.Graphic.position.z - this.enemy.position.z;

		var direction = Math.atan2( dy, dx );
		this.enemy.rotation.z += this.rotation*adjmovement;
		this.enemy.rotation.x += this.rotation*adjmovement;
		this.enemy.rotation.y += this.rotation*adjmovement;
    	  this.enemy.position.x += Math.cos( direction ) * (this.speed*adjmovement);
    	  this.enemy.position.z += Math.sin( direction ) * (this.speed*adjmovement);
	}
},
{ // 2- long rock	
	baseHealth: 50,
	healthIncrease: 30,
	speed: 2,
	reSpawn: true,
	value: 5,
	size: 15,
	init: function(){
		this.enemy = rock2.clone("test");
		var actsize = (Math.random()*this.size) + 20; ///min size is 15
	  	this.enemy.scaling.x = actsize;
	  	this.enemy.scaling.y = actsize;
	  	this.enemy.scaling.z = actsize;
		this.speed  = (Math.random()*this.speed) + .1;
	},
	setup: function() {

	    var loc = SpawnOutside();
	  this.enemy.position.x = loc.x;
	  this.enemy.position.z = loc.z;

	  loc = SpawnOutside();
	  this.toX = loc.x;
	  this.toZ = loc.z;
	  this.rotationX =  Math.random() * .02;
	  this.rotationY =  Math.random() * .02;
	  this.rotationZ =  Math.random() * .02;
	},
	behavior: function() {
		var dx = this.toX - this.enemy.position.x;
		var dy = this.toZ - this.enemy.position.z;
				var direction = Math.atan2( dy, dx );
				
		if (dx < 5 && dy < 5){
			this.setup();
		}

		this.enemy.rotation.z += this.rotationZ*adjmovement;
		this.enemy.rotation.x += this.rotationX*adjmovement;
		this.enemy.rotation.y += this.rotationY*adjmovement;
		
    	this.enemy.position.x += Math.cos( direction ) * (this.speed*adjmovement);
    	this.enemy.position.z += Math.sin( direction ) * (this.speed*adjmovement);
	}
}

];
