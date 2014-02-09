var actionsDEF = [
{
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
{
	cooldown:50,
	image:null,
	init: function(){
		player.Graphic.position = new BABYLON.Vector3(((Math.random()*1400)-700),0,((Math.random()*1400)-700)); 
	},
	behavior: function(){
       	
	}
}
];