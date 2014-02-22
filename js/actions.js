var actionsDEF = [
{
	cost:100,
	cooldown:50,
	image:null,
	shieldObj:null,
	init: function(){
		this.shieldObj = BABYLON.Mesh.CreateSphere("shield", 1,50, scene);
		var shieldmaterial = new BABYLON.StandardMaterial("shieldMaterial",scene);
		shieldmaterial.wireframe = true;
		this.shieldObj.material = shieldmaterial;
	},
	behavior: function(){
		this.shieldObj.position.x = player.Graphic.position.x;
		this.shieldObj.position.z = player.Graphic.position.z;
	}
},
{ //standard shot
	cost:100,
	cooldown:0,
	refreshtime:.30,
	image:null,
	lastupdate:0,
	init: function(){
		//player.Graphic.position = new BABYLON.Vector3(((Math.random()*1400)-700),0,((Math.random()*1400)-700)); 
	},
	behavior: function(){
	    if((time-this.lastupdate) > this.refreshtime)
	    {
			var newbullet2 = bulletobj2.clone("bullet");
			newbullet2.position.x = player.Graphic.position.x;
			newbullet2.position.z = player.Graphic.position.z;
			player.bullet.push({'graphic': newbullet2, 'direction':player.currentDirection, 'damage': 25, 'particle': bulletpart});
	   		this.lastupdate = time;
	    }
	}
},
{ //warp
	cost:100,
	cooldown:50,
	image:null,
	init: function(){
		player.Graphic.position = new BABYLON.Vector3(((Math.random()*1400)-700),0,((Math.random()*1400)-700)); 
	},
	behavior: function(){
       	
	}
},
{ //dual shot
	cost:100,
	cooldown:0,
	refreshtime:.30,
	image:null,
	lastupdate:0,
	init: function(){
		//player.Graphic.position = new BABYLON.Vector3(((Math.random()*1400)-700),0,((Math.random()*1400)-700)); 
	},
	behavior: function(){
	    if((time-this.lastupdate) > this.refreshtime)
	    {
			var newbullet2 = bulletobj2.clone("bullet");
			if(player.currentDirection!="left"&&player.currentDirection!="right"&&player.currentDirection!="up"&&player.currentDirection!="down"){
				newbullet2.position.x = player.Graphic.position.x;
				newbullet2.position.z = player.Graphic.position.z-5;
			}
			else{
				newbullet2.position.x = player.Graphic.position.x-5;
				newbullet2.position.z = player.Graphic.position.z-5;
			}
			player.bullet.push({'graphic': newbullet2, 'direction':player.currentDirection, 'damage': player.bulletDamage, 'particle': bulletpart});
			var newbullet3 = bulletobj2.clone("bullet");
			if(player.currentDirection!='left'&&player.currentDirection!='right'&&player.currentDirection!='up'&&player.currentDirection!='down'){
				newbullet3.position.x = player.Graphic.position.x;
				newbullet3.position.z = player.Graphic.position.z+5;
			}		
			else{
				newbullet3.position.x = player.Graphic.position.x+5;
				newbullet3.position.z = player.Graphic.position.z+5;	
			}

			player.bullet.push({'graphic': newbullet3, 'direction':player.currentDirection, 'damage': player.bulletDamage, 'particle': bulletpart});
	   		this.lastupdate = time;
	    }
	}
},
{ //missle
	cost:100,
	cooldown:0,
	refreshtime:5,
	image:null,
	lastupdate:0,
	init: function(){
		//player.Graphic.position = new BABYLON.Vector3(((Math.random()*1400)-700),0,((Math.random()*1400)-700)); 
	},
	behavior: function(){
	    if((time-this.lastupdate) > this.refreshtime)
	    {
			var missleobj = missle.clone("missle");
			missleobj.position.x = player.Graphic.position.x;
			missleobj.position.z = player.Graphic.position.z;
			player.bullet.push({'graphic': missleobj, 'direction':player.currentDirection, 'damage': 50, 'particle': bulletpart});
	   		this.lastupdate = time;
	    }
	}
}
];