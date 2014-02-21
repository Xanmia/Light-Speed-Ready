
var enemiesDEF = [
{ // 0 - init enemy, tea cup	
	baseHealth: 25,
	healthIncrease: 10,
	speed: 20,
	reSpawn: true,
	value: 5,
	size: 10,
	init: function(){
		this.enemy = rock.clone("test");
		var actsize = (Math.random()*this.size) + 20; ///min size is 15
	  	this.enemy.scaling.x = actsize;
	  	this.enemy.scaling.y = actsize;
	  	this.enemy.scaling.z = actsize;

	},
	setup: function() {
	  var rando = Math.round(Math.random()*1);
	  var x = ((Math.random()*1500)-750);
	  var z = ((Math.random()*1500)-750);
	  if (rando == 1)
	  {
		  if (x > 0){
		  	x = 800;
		  }
		  else
		  {
			  x=-800;
		  }	
	  }
	  else
	  {
		  if (z > 0){
		  	z = 800;
		  }
		  else
		  {
			  z=-800;
		  }	
	  }
	  this.enemy.position.x = x;
	  this.enemy.position.z = z;
	  
      var enemyRotation = new BABYLON.Animation("rotateAniX", "rotation.x", Math.random()*20, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      keys = [];
      keys.push({
          frame: 0,
          value: 0
      });

      keys.push({
          frame: 50,
          value: 3.12
      });

      keys.push({
          frame: 100,
          value: 6.25
      });

      enemyRotation.setKeys(keys);
      this.enemy.animations.push(enemyRotation);
	  
      var enemyRotation2 = new BABYLON.Animation("rotateAniZ", "rotation.z", Math.random()*20, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      enemyRotation2.setKeys(keys);
	  this.enemy.animations.push(enemyRotation2);
	  scene.beginAnimation(this.enemy, 0, 100, true);

      var enemyMovement = new BABYLON.Animation("movementbox", "position", this.speed, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      keys = [];

      keys.push({
          frame: 0,
          value: this.enemy.position
      });

      keys.push({
          frame: 400,
          value: new BABYLON.Vector3(((Math.random()*1500)-750),0,((Math.random()*1500)-750))
      });
	  
      keys.push({
          frame: 800,
          value: new BABYLON.Vector3(((Math.random()*1500)-750),0,((Math.random()*1500)-750))
      });
	  
      keys.push({
          frame: 1200,
          value: new BABYLON.Vector3(((Math.random()*1500)-750),0,((Math.random()*1500)-750))
      });
	  
      keys.push({
          frame: 1500,
          value: this.enemy.position
      });

      enemyMovement.setKeys(keys);
	  this.enemy.animations.push(enemyMovement);
	    scene.beginAnimation(this.enemy, 0, 1500, true);
	  
	},
	behavior: function() {
		//this.enemy.position.x += this.speed;
		//this.enemy.location.x += speed;
	}
},
{ // 1- regular rock	
	baseHealth: 50,
	healthIncrease: 10,
	speed: 15,
	reSpawn: true,
	value: 13,
	size: 20,
	init: function(){
		this.enemy = rock.clone("test");
		var actsize = (Math.random()*this.size) + 20; ///min size is 15
	  	this.enemy.scaling.x = actsize;
	  	this.enemy.scaling.y = actsize;
	  	this.enemy.scaling.z = actsize;
	},
	setup: function() {
	  var rando = Math.round(Math.random()*1);
	  var x = ((Math.random()*1500)-750);
	  var z = ((Math.random()*1500)-750);
	  if (rando == 1)
	  {
		  if (x > 0){
		  	x = 800;
		  }
		  else
		  {
			  x=-800;
		  }	
	  }
	  else
	  {
		  if (z > 0){
		  	z = 800;
		  }
		  else
		  {
			  z=-800;
		  }	
	  }
	  this.enemy.position.x = x;
	  this.enemy.position.z = z;
	  
      var animationBox = new BABYLON.Animation("rotateAniX", "rotation.x", Math.random()*20, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      keys = [];
      keys.push({
          frame: 0,
          value: 0
      });

      keys.push({
          frame: 50,
          value: 3.12
      });

      keys.push({
          frame: 100,
          value: 6.25
      });

      animationBox.setKeys(keys);
      this.enemy.animations.push(animationBox);
	  
      var animationBox2 = new BABYLON.Animation("rotateAniZ", "rotation.z", Math.random()*20, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      animationBox2.setKeys(keys);
	  this.enemy.animations.push(animationBox2);
	  scene.beginAnimation(this.enemy, 0, 100, true);
	  
      var movementbox = new BABYLON.Animation("movementbox", "position", this.speed, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      keys = [];

      keys.push({
          frame: 0,
          value: this.enemy.position
      });

      keys.push({
          frame: 400,
          value: new BABYLON.Vector3(((Math.random()*1500)-750),0,((Math.random()*1500)-750))
      });
	  
      keys.push({
          frame: 800,
          value: new BABYLON.Vector3(((Math.random()*1500)-750),0,((Math.random()*1500)-750))
      });
	  
      keys.push({
          frame: 1200,
          value: new BABYLON.Vector3(((Math.random()*1500)-750),0,((Math.random()*1500)-750))
      });
	  
      keys.push({
          frame: 1500,
          value: this.enemy.position
      });

      movementbox.setKeys(keys);
	  this.enemy.animations.push(movementbox);
	  scene.beginAnimation(this.enemy, 0, 1500, true);
	  
	},
	behavior: function() {
		//this.enemy.position.x += this.speed;
		//this.enemy.location.x += speed;
	}
},
{ // 2- long rock	
	baseHealth: 50,
	healthIncrease: 20,
	speed: 25,
	reSpawn: true,
	value: 5,
	size: 20,
	init: function(){
		this.enemy = rock2.clone("test");
		var actsize = (Math.random()*this.size) + 20; ///min size is 15
	  	this.enemy.scaling.x = actsize;
	  	this.enemy.scaling.y = actsize;
	  	this.enemy.scaling.z = actsize;
	},
	setup: function() {
	  var rando = Math.round(Math.random()*1);
	  var x = ((Math.random()*1500)-750);
	  var z = ((Math.random()*1500)-750);
	  if (rando == 1)
	  {
		  if (x > 0){
		  	x = 800;
		  }
		  else
		  {
			  x=-800;
		  }	
	  }
	  else
	  {
		  if (z > 0){
		  	z = 800;
		  }
		  else
		  {
			  z=-800;
		  }	
	  }
	  this.enemy.position.x = x;
	  this.enemy.position.z = z;
	  
      var animationBox = new BABYLON.Animation("rotateAniX", "rotation.x", Math.random()*20, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      keys = [];
      keys.push({
          frame: 0,
          value: 0
      });

      keys.push({
          frame: 50,
          value: 3.12
      });

      keys.push({
          frame: 100,
          value: 6.25
      });

      animationBox.setKeys(keys);
      this.enemy.animations.push(animationBox);
	  
      var animationBox2 = new BABYLON.Animation("rotateAniZ", "rotation.z", Math.random()*20, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      animationBox2.setKeys(keys);
	  this.enemy.animations.push(animationBox2);
	  scene.beginAnimation(this.enemy, 0, 100, true);
	  
      var movementbox = new BABYLON.Animation("movementbox", "position", this.speed, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      keys = [];

      keys.push({
          frame: 0,
          value: this.enemy.position
      });

      keys.push({
          frame: 400,
          value: new BABYLON.Vector3(((Math.random()*1500)-750),0,((Math.random()*1500)-750))
      });
	  
      keys.push({
          frame: 800,
          value: new BABYLON.Vector3(((Math.random()*1500)-750),0,((Math.random()*1500)-750))
      });
	  
      keys.push({
          frame: 1200,
          value: new BABYLON.Vector3(((Math.random()*1500)-750),0,((Math.random()*1500)-750))
      });
	  
      keys.push({
          frame: 1500,
          value: this.enemy.position
      });

      movementbox.setKeys(keys);
	  this.enemy.animations.push(movementbox);
	  scene.beginAnimation(this.enemy, 0, 1500, true);
	  
	},
	behavior: function() {
		//this.enemy.position.x += this.speed;
		//this.enemy.location.x += speed;
	}
},
{ //3 - Very large Comet	
	baseHealth: 500,
	healthIncrease: 10,
	speed: 1.5,
	reSpawn: false,
	value: 50,
	size: 100,
	init: function(){
		this.enemy = rock.clone("test");
	  	this.enemy.scaling.x = this.size;
	  	this.enemy.scaling.y = this.size;
	  	this.enemy.scaling.z = this.size;
	},
	setup: function() {		
	  this.enemy.position.x = 400;
	  this.enemy.position.z = -800;
	  
	},
	behavior: function() {
  	  this.enemy.position.x += Math.cos( 2 ) * this.speed;
  	  this.enemy.position.z += Math.sin( 1 ) * this.speed;
	}
},
{ // 4 - dumb drifter	
	baseHealth: 25,
	healthIncrease: 10,
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
	  var rando = Math.round(Math.random()*1);
	  var x = ((Math.random()*1500)-750);
	  var z = ((Math.random()*1500)-750);
	  if (rando == 1)
	  {
		  if (x > 0){
		  	x = 800;
		  }
		  else
		  {
			  x=-800;
		  }	
	  }
	  else
	  {
		  if (z > 0){
		  	z = 800;
		  }
		  else
		  {
			  z=-800;
		  }	
	  }
	  this.enemy.position.x = x;
	  this.enemy.position.z = z;
	 
	  rando = Math.round(Math.random()*1);
	  x = ((Math.random()*1500)-750);
	  z = ((Math.random()*1500)-750);
	 	  if (rando == 1)
	 	  {
	 		  if (x > 0){
	 		  	x = 800;
	 		  }
	 		  else
	 		  {
	 			  x=-800;
	 		  }	
	 	  }
	 	  else
	 	  {
	 		  if (z > 0){
	 		  	z = 800;
	 		  }
	 		  else
	 		  {
	 			  z=-800;
	 		  }	
	 	  }
	  
	  this.toX = x;
	  this.toZ = z;
	  this.rotation =  Math.random() * .02;
	  
	},
	behavior: function() {
		
		var dx = this.toX - this.enemy.position.x;
		var dy = this.toZ - this.enemy.position.z;
		if (dx < 5 && dy < 5){
			this.setup();
		}
		var direction = Math.atan2( dy, dx );
		this.enemy.rotation.z += this.rotation;
		this.enemy.rotation.x += this.rotation;
		this.enemy.rotation.y += this.rotation;
    	  this.enemy.position.x += Math.cos( direction ) * this.speed;
    	  this.enemy.position.z += Math.sin( direction ) * this.speed;
	}
},
{ // 5 - follower	
	baseHealth: 25,
	healthIncrease: 10,
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
	  var rando = Math.round(Math.random()*1);
	  var x = ((Math.random()*1500)-750);
	  var z = ((Math.random()*1500)-750);
	  if (rando == 1)
	  {
		  if (x > 0){
		  	x = 800;
		  }
		  else
		  {
			  x=-800;
		  }	
	  }
	  else
	  {
		  if (z > 0){
		  	z = 800;
		  }
		  else
		  {
			  z=-800;
		  }	
	  }
	  this.enemy.position.x = x;
	  this.enemy.position.z = z;
	 
	  rando = Math.round(Math.random()*1);
	  x = ((Math.random()*1500)-750);
	  z = ((Math.random()*1500)-750);
	 	  if (rando == 1)
	 	  {
	 		  if (x > 0){
	 		  	x = 800;
	 		  }
	 		  else
	 		  {
	 			  x=-800;
	 		  }	
	 	  }
	 	  else
	 	  {
	 		  if (z > 0){
	 		  	z = 800;
	 		  }
	 		  else
	 		  {
	 			  z=-800;
	 		  }	
	 	  }
	  
	  this.toX = x;
	  this.toZ = z;
	  	  this.rotation =  Math.random() * .02;
	},
	behavior: function() {
		
		var dx = player.Graphic.position.x - this.enemy.position.x;
		var dy = player.Graphic.position.z - this.enemy.position.z;

		var direction = Math.atan2( dy, dx );
		this.enemy.rotation.z += this.rotation;
		this.enemy.rotation.x += this.rotation;
		this.enemy.rotation.y += this.rotation;
    	  this.enemy.position.x += Math.cos( direction ) * this.speed;
    	  this.enemy.position.z += Math.sin( direction ) * this.speed;
	}
},
{ // 6- long rock	
	baseHealth: 50,
	healthIncrease: 20,
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
	  var rando = Math.round(Math.random()*1);
	  var x = ((Math.random()*1500)-750);
	  var z = ((Math.random()*1500)-750);
	  if (rando == 1)
	  {
		  if (x > 0){
		  	x = 800;
		  }
		  else
		  {
			  x=-800;
		  }	
	  }
	  else
	  {
		  if (z > 0){
		  	z = 800;
		  }
		  else
		  {
			  z=-800;
		  }	
	  }
	  this.enemy.position.x = x;
	  this.enemy.position.z = z;
	  
	  rando = Math.round(Math.random()*1);
	  x = ((Math.random()*1500)-750);
	  z = ((Math.random()*1500)-750);
	 	  if (rando == 1)
	 	  {
	 		  if (x > 0){
	 		  	x = 800;
	 		  }
	 		  else
	 		  {
	 			  x=-800;
	 		  }	
	 	  }
	 	  else
	 	  {
	 		  if (z > 0){
	 		  	z = 800;
	 		  }
	 		  else
	 		  {
	 			  z=-800;
	 		  }	
	 	  }
	  
	  this.toX = x;
	  this.toZ = z;
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

		this.enemy.rotation.z += this.rotationZ;
		this.enemy.rotation.x += this.rotationX;
		this.enemy.rotation.y += this.rotationY;
		
    	this.enemy.position.x += Math.cos( direction ) * this.speed;
    	this.enemy.position.z += Math.sin( direction ) * this.speed;
	}
}

];
