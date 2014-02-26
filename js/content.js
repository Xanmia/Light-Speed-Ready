
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
	
	particleTexture = new BABYLON.Texture("images/Flare.png", scene);
	
    bulletobj = BABYLON.Mesh.CreateSphere("bulletmain", 1,1, scene);
	bulletobj.position.y = -500;
	bulletobj.isVisible =false;
	
	bulletobj2 = BABYLON.Mesh.CreateSphere("bulletmain2", 4,3, scene);
	bulletobj2.position.x = 15000;
	bulletobj2.position.z = 15000;
	
	bulletpart = new BABYLON.ParticleSystem("bulletPart", 20, scene);
	bulletpart.particleTexture = particleTexture;//new BABYLON.Texture("images/Flare.png", scene);
	bulletpart.emitter = bulletobj; 
    bulletpart.minEmitBox = new BABYLON.Vector3(0, 1, 0); // Starting all From
    bulletpart.maxEmitBox = new BABYLON.Vector3(0, 1, 0); // To...
	bulletpart.color1 = new BABYLON.Color4(0.4, 0.8, 1.0, 1.0);
	bulletpart.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
	bulletpart.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
    bulletpart.direction1 = new BABYLON.Vector3(-2, -1, -2);
    bulletpart.direction2 = new BABYLON.Vector3(2, 1, 2);
	bulletpart.minLifeTime = .01;
    bulletpart.maxLifeTime = .1;
    bulletpart.minSize = 4.0;
	bulletpart.maxSize = 5.5;
	bulletpart.emitRate = 250;
    bulletpart.minEmitPower = 1;
    bulletpart.maxEmitPower = 2;
	bulletpart.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
	bulletpart.targetStopDuration = 0;
	bulletpart.disposeOnStop = false;
	
 	var rockmaterial = new BABYLON.StandardMaterial("rockmaterial", scene);
 	rockmaterial.diffuseTexture = new BABYLON.Texture("images/marble.jpg", scene);
  	rockmaterial.bumpTexture = new BABYLON.Texture("images/Rocknormal.jpg", scene);
  	rockmaterial.specularColor = new BABYLON.Color3(0, 0, 0);		
    rockmaterial.diffuseTexture.uScale = .5;
    rockmaterial.diffuseTexture.vScale = .5;
	
	var backgroundSystem = new BABYLON.Mesh.CreatePlane("background",2800, scene);
	var materialSphere1 = new BABYLON.StandardMaterial("texture1", scene);
	materialSphere1.diffuseTexture = new BABYLON.Texture("images/background.png", scene);
	backgroundSystem.material = materialSphere1;//new BABYLON.StandardMaterial("backgroundmat", scene);
  	backgroundSystem.rotation.y = Math.PI;
  	backgroundSystem.rotation.x = Math.PI/2;
  	backgroundSystem.rotation.z = Math.PI *1.5;
	//backgroundSystem.diffuseTexture = new BABYLON.Texture("images/background.png", scene);
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
				//backgroundSystem.stop();
				startDisplay.style.display = "block";
   				//SceneReset();
   			});	
       });
 	});

	
}