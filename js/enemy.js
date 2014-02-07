
function BaseEnemy ( opt ) {
	for( var k in opt ) {
		this[k] = opt[k];
	}
	
	this.setup = this.setup || function(){};
	this.death = this.death || function(){};
	
	this.level = 0;
	this.health = this.baseHealth + (this.level*this.healthIncrease);
	var maxHealth = this.baseHealth + (this.level*this.healthIncrease);
		this.init();

  	var background = BABYLON.Mesh.CreatePlane("COUNT", 20, scene);
  	background.material = new BABYLON.StandardMaterial("background", scene);
  	background.rotation.y = Math.PI;
  	background.rotation.x = Math.PI/2;
  	background.rotation.z = Math.PI + (Math.PI/2);
    background.position.x = 10000;
    background.position.z = 10000;
  	var backgroundTexture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
  	background.material.diffuseTexture = backgroundTexture;
  	backgroundTexture.drawText("+"+this.value, null, 350, "bold 325px Segoe UI", "white", "#555555");

	var enemyexplosion = new BABYLON.ParticleSystem("enemyexplosion", 250, scene);
	enemyexplosion.particleTexture = new BABYLON.Texture("images/Flare.png", scene);
	enemyexplosion.emitter = background; // the starting object, the emitter
	enemyexplosion.minEmitBox = new BABYLON.Vector3(-1, 0, -1); // Starting all From
	enemyexplosion.maxEmitBox = new BABYLON.Vector3(1, 0, 1); // To...

	enemyexplosion.color1 = new BABYLON.Color4(1.0, 0.8, 1.0, 1.0);
	enemyexplosion.color2 = new BABYLON.Color4(0.8, 0.6, 1.0, 1.0);
	enemyexplosion.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

	enemyexplosion.minSize = 2.0;
	enemyexplosion.maxSize = 5.5;

	enemyexplosion.minLifeTime = .25;
	enemyexplosion.maxLifeTime = .550;

	enemyexplosion.emitRate = 15000;
	enemyexplosion.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
	enemyexplosion.direction1 = new BABYLON.Vector3(-8, -8, 0);
	enemyexplosion.direction2 = new BABYLON.Vector3(8, 8, 0);
	enemyexplosion.minAngularSpeed = 0;
	enemyexplosion.maxAngularSpeed = Math.PI;

	enemyexplosion.targetStopDuration = .1;
	enemyexplosion.minEmitPower = 60;
	enemyexplosion.maxEmitPower = 75;
	enemyexplosion.updateSpeed = 0.005;
	enemyexplosion.disposeOnStop = false;

	this.setup();
  
	this.respawn = function(level)
	{
		if (level == null){
			this.level += 1;
		}
		else{
			this.level = level;
		}
			
		  	this.maxHealth = this.baseHealth + (this.level*healthIncrease);
		    this.health = this.maxHealth;
		    
			this.enemy.setEnabled(true);
	    	this.enemy.isVisible = true;
			this.setup();
	}
	  
	this.explode = function()
	{
		if (this.enemy._isEnabled == true){
			//explodeaudio.volume =.2;
			//explodeaudio.play();
			player.LightSpeedGauge += this.value;
			this.enemy.animations = [];
			this.enemy.setEnabled(false);
		
		    background.position.x = this.enemy.position.x;
		    background.position.z = this.enemy.position.z;

			enemyexplosion.start();
	
      var animationBox3 = new BABYLON.Animation("tutoAnimation3", "material.alpha", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_LOOP);

      // Animation keys
      var keys = [];
      //At the animation key 0, the value of scaling is "1"
      keys.push({
          frame: 0,
          value: 1.0
      });

      //At the animation key 20, the value of scaling is "0.2"
      keys.push({
          frame: 50,
          value: .5
      });

      //At the animation key 100, the value of scaling is "1"
      keys.push({
          frame: 100,
          value: .0
      });

      //Pluging the sequence of keys to the animation object
      animationBox3.setKeys(keys);
  	  background.animations.push(animationBox3);
  
        var animationBox4 = new BABYLON.Animation("tutoAnimation4", "position.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                        BABYLON.Animation.ANIMATIONLOOPMODE_LOOP);

        // Animation keys
        var keys = [];
        //At the animation key 0, the value of scaling is "1"
        keys.push({
            frame: 0,
            value: .0
        });

        //At the animation key 20, the value of scaling is "0.2"
        keys.push({
            frame: 50,
            value: -100
        });

        //At the animation key 100, the value of scaling is "1"
        keys.push({
            frame: 100,
            value: -200
        });

        //Pluging the sequence of keys to the animation object
        animationBox4.setKeys(keys);
    	  background.animations.push(animationBox4);
  
  		scene.beginAnimation(background, 0, 100, false);
		
		if(this.reSpawn==true){
			this.respawn();
		}
  		}

	}
   
	this.Damage = function(intDamage)
	{
		this.health -= intDamage;
	 	if(this.health <= 0){
		 	this.explode();
	 	} 
		//damage animation
	}
	  
	
	this.update = function(){
		this.behavior();
	 	if(this.health <= 0){
		 	this.explode();
	 	} 
	}
	
	this.dispose = function(){
		enemyexplosion.dispose();
		background.dispose();
		this.enemy.dispose();
	}
};
