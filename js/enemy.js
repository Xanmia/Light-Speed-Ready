
function BaseEnemy ( opt, lvl, optEnemy ) {
	for( var k in opt ) {
		this[k] = opt[k];
	}
	
	
	this.setup = this.setup || function(){};
	this.death = this.death || function(){};
	this.damage = this.damage || 0;
	this.enemyBullet = this.enemyBullet || [];
	
	this.level = lvl;
	this.value += this.level;
	this.health = this.baseHealth + (this.level*this.healthIncrease);
	this.maxHealth = this.baseHealth + (this.level*this.healthIncrease);
		this.init();
	this.enemy = this.enemy || optEnemy;
	
  	var background = BABYLON.Mesh.CreatePlane("COUNT", 20, scene);
	//background.isVisible = false;
  	background.material = new BABYLON.StandardMaterial("background", scene);
  	background.rotation.y = Math.PI;
  	background.rotation.x = Math.PI/2;
  	background.rotation.z = Math.PI *1.5;
    background.position.x = 10000;
    background.position.z = 10000;
  	
	
		//var background = xpmessage.clone("xpmessage");
   var backgroundTexture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
  	background.material.diffuseTexture = backgroundTexture;
  	backgroundTexture.drawText("+"+this.value, null, 350, "bold 285px Arial", "white", "#555555");

	
	var enemyexplosion = new BABYLON.ParticleSystem("enemyexplosion", 250, scene);
	
	enemyexplosion.particleTexture = new BABYLON.Texture("images/Flare.png", scene);
	enemyexplosion.emitter = background; // the starting object, the emitter
	enemyexplosion.minEmitBox = new BABYLON.Vector3(-1, 0, -1); // Starting all From
	enemyexplosion.maxEmitBox = new BABYLON.Vector3(1, 0, 1); // To...

	//enemyexplosion.color1 = new BABYLON.Color4(1.0, 0.8, 1.0, 1.0);
	//enemyexplosion.color2 = new BABYLON.Color4(0.8, 0.6, 1.0, 1.0);
	//enemyexplosion.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    enemyexplosion.color1 = new BABYLON.Color4(0.7, 0.7, .3, 1.0);
    enemyexplosion.color2 = new BABYLON.Color4(0.5, 0.5, .3, 1.0);
    enemyexplosion.colorDead = new BABYLON.Color4(0.5, 0.5, 0.3, 1.0);

	enemyexplosion.minSize = 2.0;
	enemyexplosion.maxSize = 5.5;

	enemyexplosion.minLifeTime = .15;
	enemyexplosion.maxLifeTime = .250;

	enemyexplosion.emitRate = 1000;
	enemyexplosion.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
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

		  	
			this.maxHealth = (this.baseHealth + (this.level*this.healthIncrease));
		    this.health = (this.baseHealth + (this.level*this.healthIncrease));
		    this.damage = this.damage + this.level;
			this.enemy.setEnabled(true);
	    	this.enemy.isVisible = true;
			this.setup();
	}
	  
	this.explode = function()
	{
		if (this.enemy._isEnabled == true){

					 GameSound.play("explode");
				     var spriteManager = new BABYLON.SpriteManager("playerManagr", "images/ExplosionAnimationClear2.png", 1, 150, scene);
				     var fire = new BABYLON.Sprite("player", spriteManager);
					 fire.disposeWhenFinishedAnimating = true;
				     fire.size = 75;
		 	     	fire.position.z = this.enemy.position.z;
		 		 	fire.position.x = this.enemy.position.x;
					fire.position.y = 1;
					fire.playAnimation(0, 10, false, 70);
					
			player.addResources(this.value);
			this.enemy.animations = [];
			this.enemy.setEnabled(false);
		this.enemy.isVisible = false;
		    background.position.x = this.enemy.position.x;
		    background.position.z = this.enemy.position.z;

			enemyexplosion.start();
			
      var animationBox3 = new BABYLON.Animation("xpmessage1", "material.alpha", 40, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                      BABYLON.Animation.ANIMATIONLOOPMODE_LOOP);
      var keys = [];

      keys.push({
          frame: 0,
          value: 1.0
      });

      keys.push({
          frame: 50,
          value: .5
      });

      keys.push({
          frame: 100,
          value: .0
      });
      animationBox3.setKeys(keys);
  	  background.animations.push(animationBox3);
  
        var animationBox4 = new BABYLON.Animation("xpmessage2", "position.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                        BABYLON.Animation.ANIMATIONLOOPMODE_LOOP);

        var keys = [];
        keys.push({
            frame: 0,
            value: .0
        });
        keys.push({
            frame: 50,
            value: -100
        });

        keys.push({
            frame: 100,
            value: -200
        });


        animationBox4.setKeys(keys);
    	  background.animations.push(animationBox4);
  
  		scene.beginAnimation(background, 0, 100, false);
	
		if(this.reSpawn==true){
			this.respawn();
		}
		else{
			this.enemy.position.x = 2000;
			this.enemy.position.z = 2000;
		}
  		}

	}
   
	this.Damage = function(intDamage)
	{
		 GameSound.play("hit");
		this.health -= intDamage;
		/*
        var sun = new BABYLON.ParticleSystem("particles", 3, scene);
    sun.particleTexture = new BABYLON.Texture("images/Flare.png", scene);
    sun.emitter = this.enemy; // the starting object, the emitter
    sun.minEmitBox = new BABYLON.Vector3(0, 0, 0); // Starting all From-z
    sun.maxEmitBox = new BABYLON.Vector3(0, 0, 0); // To...z
    sun.color1 = new BABYLON.Color4(0.5, 0.5, .3, 1.0);
    sun.color2 = new BABYLON.Color4(0.5, 0.5, .3, 1.0);
    sun.colorDead = new BABYLON.Color4(0.5, 0.5, 0.3, 1.0);
    sun.minSize = 100.0;
    sun.maxSize = 100.0;
    sun.minLifeTime = .015;
    sun.maxLifeTime = .021;
    sun.emitRate =50;
    sun.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    sun.targetStopDuration = .05;
    sun.minEmitPower = 1;
    sun.maxEmitPower = 2;
    sun.updateSpeed = 0.005;
    sun.disposeOnStop = false;
    sun.start();
	*/
	 	if(this.health <= 0){
		 	this.explode();
	 	} 
		/////TODO: damage animation
	}
	  
	
	this.update = function(){
		this.behavior();
	 	if(this.health <= 0){
		 	this.explode();
	 	} 
	}
	
	this.dispose = function(){
		this.enemy.animations = [];
		backgroundTexture.dispose();
		enemyexplosion.dispose();
		background.animations = [];
		background.material.dispose();
		background.dispose();
		var totalB = this.enemyBullet.length;
		while(totalB--){
			this.enemyBullet[totalB].graphic.dispose();
			this.enemyBullet.splice(totalB, 1);
	  	  }
		this.enemy.dispose();
	}
};


function SpawnEnemies()
{
	var lvlDetails = levels.filter(function(value){ return value.level==level; });
	if(lvlDetails.length==0){lvlDetails = lastSetup;}
	
		var xEnemy = enemies.length;
		while(xEnemy--){
			enemies[xEnemy].dispose();
		}
		enemies = [];
		var typeAmount = lvlDetails[0].types.length;
		while(typeAmount--){
			var totalItems = lvlDetails[0].types[typeAmount].total;
			while(totalItems--){
				enemies.push(new BaseEnemy( enemiesDEF[ lvlDetails[0].types[typeAmount].type ], level ));
			}
		}
		lastSetup = lvlDetails;
}
