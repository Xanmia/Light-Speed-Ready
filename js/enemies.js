
var enemiesDEF = [
{ // 0 - init enemy, tea cup	
	baseHealth: 25,
	healthIncrease: 10,
	speed: 1,
	reSpawn: true,
	value: 5,
	size: 10,
	init: function(){
		this.enemy = cup.clone("test");
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
	  
      var animationBox = new BABYLON.Animation("tutoAnimation", "rotation.x", Math.random()*20, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
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
	  
      var animationBox2 = new BABYLON.Animation("tutoAnimation", "rotation.z", Math.random()*20, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      animationBox2.setKeys(keys);
	  this.enemy.animations.push(animationBox2);
	  scene.beginAnimation(this.enemy, 0, 100, true);
	  
      var movementbox = new BABYLON.Animation("movementbox", "position", (Math.random()*25)+5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
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
{ // 1- regular rock	
	baseHealth: 50,
	healthIncrease: 10,
	speed: 1,
	reSpawn: true,
	value: 113,
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
	  
      var animationBox = new BABYLON.Animation("tutoAnimation", "rotation.x", Math.random()*20, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
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
	  
      var animationBox2 = new BABYLON.Animation("tutoAnimation", "rotation.z", Math.random()*20, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      animationBox2.setKeys(keys);
	  this.enemy.animations.push(animationBox2);
	  scene.beginAnimation(this.enemy, 0, 100, true);
	  
      var movementbox = new BABYLON.Animation("movementbox", "position", (Math.random()*25)+5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
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
	healthIncrease: 10,
	speed: 1,
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
	  
      var animationBox = new BABYLON.Animation("tutoAnimation", "rotation.x", Math.random()*20, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
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
	  
      var animationBox2 = new BABYLON.Animation("tutoAnimation", "rotation.z", Math.random()*20, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      animationBox2.setKeys(keys);
	  this.enemy.animations.push(animationBox2);
	  scene.beginAnimation(this.enemy, 0, 100, true);
	  
      var movementbox = new BABYLON.Animation("movementbox", "position", (Math.random()*25)+5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
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
	speed: 1,
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
	  
      var movementbox = new BABYLON.Animation("movementbox", "position", 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      keys = [];

      keys.push({
          frame: 0,
          value: this.enemy.position
      });

	  
      keys.push({
          frame: 150,
          value: new BABYLON.Vector3(400,0,800)
      });

      movementbox.setKeys(keys);
	  this.enemy.animations.push(movementbox);
	  scene.beginAnimation(this.enemy, 0, 150, true);
	  
	},
	behavior: function() {
		//this.enemy.position.x += this.speed;
		//this.enemy.location.x += speed;
	}
}	
];
