
var enemiesDEF = [
{ // 0 - dumb drifter	
	baseHealth: 25,
	healthIncrease: 20,
	speed: 1.5,
	reSpawn: true,
	value: 5,
	size: 10,
	refreshtime:.30,
	lastupdate:0,
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
{ // 1 - follower mine
	baseHealth: 25,
	healthIncrease: 20,
	speed: .75,
	reSpawn: true,
	value: 5,
	size: 1,
	refreshtime:.30,
	lastupdate:0,
	init: function(){
		this.enemy = mine.clone("test");
		var actsize = (Math.random()*this.size) + 15; ///min size is 15
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
		//this.enemy.rotation.y += this.rotation*adjmovement;
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
	refreshtime:.30,
	lastupdate:0,
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
		var dx = this.toX - this.enemy.position.x;
		var dy = this.toZ - this.enemy.position.z;
			this.direction = Math.atan2( dy, dx );
	},
	behavior: function() {
		var dx = this.toX - this.enemy.position.x;
		var dy = this.toZ - this.enemy.position.z;
				
		if (dx < 5 && dy < 5){
			this.setup();
		}

		this.enemy.rotation.z += this.rotationZ*adjmovement;
		this.enemy.rotation.x += this.rotationX*adjmovement;
		this.enemy.rotation.y += this.rotationY*adjmovement;
		
    	this.enemy.position.x += Math.cos( this.direction ) * (this.speed*adjmovement);
    	this.enemy.position.z += Math.sin( this.direction ) * (this.speed*adjmovement);
	}
},
{ // 3-enemyship
	baseHealth: 400,
	healthIncrease: 30,
	speed: .7,
	reSpawn: false,
	value: 15,
	size: 15,
	refreshtime:1.0,
	lastupdate:0,
	damage:5,
	init: function(){

		this.enemyBullet = [];
		this.enemy = enemyship.clone("test");
		this.radar = radar.clone("radar");
		this.radar.parent = this.enemy;
	  	this.radar.rotation.x += Math.PI/2;
	  	this.radar.rotation.z += Math.PI *.5;

		this.speed  = (Math.random()*this.speed) + .1;
	},
	setup: function() {
	    var loc = SpawnInsideEdge();
	  	this.enemy.position.x = loc.x;
	  	this.enemy.position.z = loc.z;
	  this.radar.position.x = 0;//this.enemy.position.x;
	  this.radar.position.z = 0;//this.enemy.position.z;
  	  loc = SpawnInsideEdge();
  	  this.toX = loc.x;
  	  this.toZ = loc.z;
 		var dx = this.toX - this.enemy.position.x;
 		var dy = this.toZ - this.enemy.position.z;
		this.direction = Math.atan2( dy, dx );
	},
	behavior: function() {

	 if(this.radar.intersectsMesh(player.BoundingBox,true)){
		var dx = player.Graphic.position.x - this.enemy.position.x;
		var dy = player.Graphic.position.z - this.enemy.position.z;
		this.direction = Math.atan2( dy, dx );
	    if((time-this.lastupdate) > this.refreshtime)
	    {			
			var newbullet2 = bulletobj3.clone("bullet");
			newbullet2.position.x = this.enemy.position.x;
			newbullet2.position.z = this.enemy.position.z;
			this.enemyBullet.push({'graphic': newbullet2, 'direction':this.direction});

			this.lastupdate = time;
		}

	  }
	  if((this.enemy.position.x  > height || this.enemy.position.x < -height) || (this.enemy.position.z > width || this.enemy.position.z  < -width)){
	  	  loc = SpawnInsideEdge();
	 		var dx = loc.x - this.enemy.position.x;
	 		var dy = loc.z - this.enemy.position.z;
			this.direction = Math.atan2( dy, dx );
	  }
	  
	var totalB = this.enemyBullet.length;
	while(totalB--){
	
  		this.enemyBullet[totalB].graphic.position.x += Math.cos(  this.enemyBullet[totalB].direction ) * ((this.speed*adjmovement)+ (2 * adjmovement));
  		this.enemyBullet[totalB].graphic.position.z += Math.sin(  this.enemyBullet[totalB].direction ) * ((this.speed*adjmovement)+ (2 * adjmovement));
		if(this.enemyBullet[totalB].graphic.intersectsMesh(player.BoundingBox,true)){
			player.Damage(this.damage);
			this.enemyBullet[totalB].graphic.dispose();
			this.enemyBullet.splice(totalB, 1);
		}
		else if (this.enemyBullet[totalB].graphic.position.z > width+50 || this.enemyBullet[totalB].graphic.position.z < -width-50 || this.enemyBullet[totalB].graphic.position.x > height+50 || this.enemyBullet[totalB].graphic.position.x < -height-50)
		{
			this.enemyBullet[totalB].graphic.dispose();
			this.enemyBullet.splice(totalB, 1);
		}
  	  }
	  
  		this.enemy.position.x += Math.cos( this.direction ) * (this.speed*adjmovement);
  		this.enemy.position.z += Math.sin( this.direction ) * (this.speed*adjmovement);
	    this.enemy.rotation.y = Math.PI - this.direction ;
	}
},
{ // 4 - static mine, close prox will explode
	baseHealth: 100,
	healthIncrease: 20,
	speed: .75,
	reSpawn: false,
	value: 5,
	size: 1,
	refreshtime:1.0,
	lastupdate:0,
	init: function(){
		this.enemy = mine.clone("test");
		var actsize = (Math.random()*this.size) + 15; ///min size is 15
		this.radar = radar.clone("radar");
	  	this.enemy.scaling.x = actsize;
	  	this.enemy.scaling.y = actsize;
	  	this.enemy.scaling.z = actsize;
		this.radar.parent = this.enemy;

  	  this.radar.position.x = 0;//this.enemy.position.x;
  	  this.radar.position.z = 0;//this.enemy.position.z;
		this.radar.scaling.x = .0010;
		this.radar.scaling.y = .0010;
		this.radar.scaling.z = .0010;
	   this.radar.rotation.z += Math.PI*.5; // *1.5;

	},
	setup: function() {
	  	  var loc = SpawnInside();
	  this.enemy.position.x = loc.x;
	  this.enemy.position.z = loc.z;
	},
	behavior: function() {

		 if(this.radar.intersectsMesh(player.BoundingBox,true)){

			  	if((time-this.lastupdate) > this.refreshtime ){
	   			  this.explode();
				   player.Damage(this.maxHealth/4);
				 this.lastupdate = time;
				}

		 }
		 else{
			this.lastupdate = time;
	 		this.radar.scaling.x += .00015;
	 		this.radar.scaling.y += .00015;
	 		this.radar.scaling.z += .00015;
	 		if(this.radar.scaling.x>=.03){
	 			this.radar.scaling.x = .001;
	 			this.radar.scaling.y = .001;
	 			this.radar.scaling.z = .001;
	 		}
		 }
		 
	}
}

];
