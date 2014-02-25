
function ContentLoad(startDisplay)
{
    if (!BABYLON.Engine.isSupported()) {
		startDisplay.innerHTML = "<div class='alert'>Sorry, your browser exudes awesomeness.<br> Just not awesome enough to play this game.<br>  Why don't you try IE 11, Firefox or Google Chrome instead.</div>";
		startDisplay.style.display = "block";
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
	
    bulletobj = BABYLON.Mesh.CreateSphere("bulletmain", 1,1, scene);
	bulletobj.position.y = -500;
	bulletobj.isVisible =false;
	
	bulletobj2 = BABYLON.Mesh.CreateSphere("bulletmain", 4,3, scene);
	bulletobj2.position.x = 15000;
	bulletobj2.position.z = 15000;
	
	bulletpart = new BABYLON.ParticleSystem("bulletPart", 20, scene);
	bulletpart.particleTexture = new BABYLON.Texture("images/Flare.png", scene);
	bulletpart.emitter = bulletobj2; 
    bulletpart.minEmitBox = new BABYLON.Vector3(0, 1, 0); // Starting all From
    bulletpart.maxEmitBox = new BABYLON.Vector3(0, 1, 0); // To...
	bulletpart.color1 = new BABYLON.Color4(0.4, 0.8, 1.0, 1.0);
	bulletpart.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
	bulletpart.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
    bulletpart.direction1 = new BABYLON.Vector3(-2, -1, -2);
    bulletpart.direction2 = new BABYLON.Vector3(2, 1, 2);
	bulletpart.minLifeTime = .01;
    bulletpart.maxLifeTime = .1;
	bulletpart.maxSize = 5.5;
	bulletpart.emitRate = 1000;
    bulletpart.minEmitPower = 10;
    bulletpart.maxEmitPower = 30;
	bulletpart.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
	bulletpart.targetStopDuration = 0;
	bulletpart.disposeOnStop = false;
	
 	var rockmaterial = new BABYLON.StandardMaterial("rockmaterial", scene);
 	rockmaterial.diffuseTexture = new BABYLON.Texture("images/marble.jpg", scene);
  	rockmaterial.bumpTexture = new BABYLON.Texture("images/Rocknormal.jpg", scene);
  	rockmaterial.specularColor = new BABYLON.Color3(0, 0, 0);		
    rockmaterial.diffuseTexture.uScale = .5;
    rockmaterial.diffuseTexture.vScale = .5;
	
    var backgroundSystem = new BABYLON.ParticleSystem("backgroundSystem", 6000, scene);
   	backgroundSystem.particleTexture = new BABYLON.Texture("images/Flare.png", scene);
	backgroundSystem.emitter = bulletobj; 
	backgroundSystem.minEmitBox = new BABYLON.Vector3(2000, 0, 2000); 
	backgroundSystem.maxEmitBox = new BABYLON.Vector3(-2000, 0, -2000);
	backgroundSystem.color1 = new BABYLON.Color4(0.4, 0.8, 1.0, 1.0);
	backgroundSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
	backgroundSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
	backgroundSystem.minSize = 2.0;
	backgroundSystem.maxSize = 5.5;
	backgroundSystem.minLifeTime = 50;
	backgroundSystem.maxLifeTime = 500;
	backgroundSystem.emitRate = 50000;
	backgroundSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
	backgroundSystem.targetStopDuration = 0;
	backgroundSystem.disposeOnStop = false;
	backgroundSystem.start();

	
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
				startDisplay.style.display = "block";
   				//SceneReset();
   			});	
       });
 	});

	
}