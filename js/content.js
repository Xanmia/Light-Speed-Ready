var mine, radar, enemyship, bulletobj3;
function ContentLoad(startDisplay)
{
    if (!BABYLON.Engine.isSupported()) {
		startDisplay.innerHTML = "<div class='alert'>Sorry, your browser exudes awesomeness.<br> Just not awesome enough to play this game.<br>  Why don't you try IE 11, Firefox or Google Chrome instead.</div>";
		startDisplay.style.display = "block";
		loadingMessage.style.display = "none";
	}
	if(engine != null){engine.dispose()}
	if(scene != null){scene.dispose();}
	loaded = false;
    engine = new BABYLON.Engine(canvas,false)
	   //engine.setHardwareScalingLevel(1);
	scene = new BABYLON.Scene(engine);
	scene.clearColor = new BABYLON.Color3(0,0,0);
    
	camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 500, new BABYLON.Vector3(0, 0, 0), scene);
    camera.maxZ = 20000;

	time = 0;
	var backgroundLoad = document.createElement("img");
	backgroundLoad.src = "images/starb.png";

	
	var backmaterial = new BABYLON.StandardMaterial("texture1", scene);
	backmaterial.diffuseTexture = new BABYLON.Texture(backgroundLoad.src, scene);
	
	particleTexture = new BABYLON.Texture("images/Flare.png", scene);
	
    radar = BABYLON.Mesh.CreateCylinder("12", .1,300, 300,55, scene);
	radar.position.x = 15000;
	radar.position.z = 15000;
  	radar.rotation.x = Math.PI/2;
  	radar.rotation.z = Math.PI *1.5;
		 //radar.rotation.z += Math.PI *2.5;
	var radarmaterial = new BABYLON.StandardMaterial("shieldMaterial",scene);
	radarmaterial.opacityTexture = new BABYLON.Texture("images/radarcircle.png", scene);
	//radarmaterial.wireframe = true;
	
	//radar.isVisible = false;
	radar.material = radarmaterial;
	

 	var enemyShipmaterial = new BABYLON.StandardMaterial("enemymaterial", scene);
 	enemyShipmaterial.diffuseTexture = new BABYLON.Texture("images/Micro.png", scene);
  	enemyShipmaterial.bumpTexture = new BABYLON.Texture("images/grate0_normal.png", scene);
	
	
	enemywing = BABYLON.Mesh.CreateCylinder("12", 3,60, 60,5, scene);
		wingconnector = BABYLON.Mesh.CreateCylinder("12", 15,5, 10,10, scene);
		wingconnector2 = wingconnector.clone("connector2");
		  	wingconnector2.rotation.x = Math.PI;
  	enemywing.rotation.x = Math.PI/2;
	enemywing2 = enemywing.clone("wing2");
		enemywing.material = enemyShipmaterial;
		enemywing2.material = enemyShipmaterial;
	enemyship = BABYLON.Mesh.CreateSphere("12", 10,30, scene);
	enemywing.parent = enemyship;
	enemywing2.parent = enemyship;
	wingconnector.parent = enemywing;
	wingconnector2.parent = enemywing2;
	enemywing.position.z = 25;
	enemywing2.position.z = -25;
	wingconnector.position.y = -7;
	wingconnector2.position.y = 7;
	enemyship.material = enemyShipmaterial;
	enemyship.position.x = 5000;
	enemyship.position.z = 5000;
  
  //	enemywing.rotation.z = Math.PI *.5;
	 //	enemywing.rotation.y = Math.PI;
	
    bulletobj = BABYLON.Mesh.CreateSphere("bulletmain", 1,1, scene);
	bulletobj.position.y = -500;
	bulletobj.isVisible =false;
	
	bulletobj2 = BABYLON.Mesh.CreateSphere("bulletmain2", 4,3, scene);
	bulletobj2.position.x = 15000;
	bulletobj2.position.z = 15000;

	bulletpart = new BABYLON.ParticleSystem("bulletPart", 10, scene);
	bulletpart.particleTexture = new BABYLON.Texture("images/laser.png", scene);
	bulletpart.emitter = bulletobj2; 
    bulletpart.minEmitBox = new BABYLON.Vector3(0, 1, 0); // Starting all From
    bulletpart.maxEmitBox = new BABYLON.Vector3(0, 1, 0); // To...
    bulletpart.direction1 = new BABYLON.Vector3(-2, -1, -2);
    bulletpart.direction2 = new BABYLON.Vector3(2, 1, 2);
	bulletpart.minLifeTime = .01;
    bulletpart.maxLifeTime = .1;
	bulletpart.maxSize = 5.5;
	bulletpart.emitRate = 100;
    bulletpart.minEmitPower = 10;
    bulletpart.maxEmitPower = 30;
	bulletpart.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
	bulletpart.targetStopDuration = 0;
	bulletpart.disposeOnStop = true;
	
	bulletobj3 = BABYLON.Mesh.CreateSphere("bulletmain2", 4,3, scene);
	bulletobj3.position.x = 15000;
	bulletobj3.position.z = 15000;
	
	bulletpart2 = new BABYLON.ParticleSystem("bulletPart", 10, scene);
	bulletpart2.particleTexture = new BABYLON.Texture("images/laserred.png", scene);
	bulletpart2.emitter = bulletobj3; 
    bulletpart2.minEmitBox = new BABYLON.Vector3(0, 1, 0); // Starting all From
    bulletpart2.maxEmitBox = new BABYLON.Vector3(0, 1, 0); // To...
    bulletpart2.direction1 = new BABYLON.Vector3(-2, -1, -2);
    bulletpart2.direction2 = new BABYLON.Vector3(2, 1, 2);
	bulletpart2.minLifeTime = .01;
    bulletpart2.maxLifeTime = .1;
	bulletpart2.maxSize = 5.5;
	bulletpart2.emitRate = 100;
    bulletpart2.minEmitPower = 10;
    bulletpart2.maxEmitPower = 30;
	bulletpart2.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
	bulletpart2.targetStopDuration = 0;
	bulletpart2.disposeOnStop = true;

 	var rockmaterial = new BABYLON.StandardMaterial("rockmaterial", scene);
 	rockmaterial.diffuseTexture = new BABYLON.Texture("images/marble.jpg", scene);
  	rockmaterial.bumpTexture = new BABYLON.Texture("images/Rocknormal.jpg", scene);
  	rockmaterial.specularColor = new BABYLON.Color3(0, 0, 0);		
    rockmaterial.diffuseTexture.uScale = .5;
    rockmaterial.diffuseTexture.vScale = .5;
	
 	var minematerial = new BABYLON.StandardMaterial("rockmaterial", scene);
 	minematerial.diffuseTexture = new BABYLON.Texture("images/bunker_galvanized.jpg", scene);
  	minematerial.bumpTexture = new BABYLON.Texture("images/concrete01_norm.jpg", scene);
  	//minematerial.specularColor = new BABYLON.Color3(0, 0, 0);		
    minematerial.diffuseTexture.uScale = .5;
    minematerial.diffuseTexture.vScale = .5;
	
	var backgroundSystem = new BABYLON.Mesh.CreatePlane("background",3000, scene);
	backgroundSystem.material = backmaterial;//new BABYLON.StandardMaterial("backgroundmat", scene);
  	backgroundSystem.rotation.y = Math.PI;
  	backgroundSystem.rotation.x = Math.PI/2;
  	backgroundSystem.rotation.z = Math.PI *1.5;
	backgroundSystem.position.y = -700;

   light0 = new BABYLON.HemisphericLight("Omni", new BABYLON.Vector3(0, 0, -10), scene);
 // scene.activeCamera.attachControl(canvas);
    BABYLON.SceneLoader.ImportMesh("", "", "Spaceship.babylon", scene, function (newMeshes, particleSystems) {
       newMeshes[0].scaling.x = .015;
       newMeshes[0].scaling.y = .015;
       newMeshes[0].scaling.z = .015;
       playerGraphic = newMeshes[0];
	   //player = new Player();
	   //camera.target = player.BoundingBox.position;
       BABYLON.SceneLoader.ImportMesh("", "", "assets/a6.babylon", scene, function (newMeshes, particleSystems) {
       	rock =  newMeshes[0];
   		rock.position.x = 850;
   		rock.position.z = 850; 
    	rock.material = rockmaterial;
   	        BABYLON.SceneLoader.ImportMesh("", "", "assets/a5.babylon", scene, function (newMeshes, particleSystems) {
   	        	rock2 =  newMeshes[0];
   				rock2.position.x = 850;
   				rock2.position.z = 850; 
   		  	  	rock2.material = rockmaterial;
				
	   	        BABYLON.SceneLoader.ImportMesh("", "", "assets/mine1-2.babylon", scene, function (newMeshes, particleSystems) {
	   	        	mine =  newMeshes[0];
	   				mine.position.x = 850;
	   				mine.position.z = 850; 
				  	mine.rotation.y = Math.PI;
				  	mine.rotation.x = Math.PI/2;
				  	mine.rotation.z = Math.PI *1.5;
	   		  	  	mine.material = minematerial;
				});
   				//SceneReset();
   			});	
       });
 	});
 
	backgroundLoad.onload = function () { 		
				startDisplay.style.display = "block"; 
				loadingMessage.style.display = "none";
			};
	
}