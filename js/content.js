
function ContentLoad(startDisplay)
{
	if(engine != null){engine.dispose()}
	if(scene != null){scene.dispose();}
	loaded = false;
    engine = new BABYLON.Engine(canvas,false)
	   //engine.setHardwareScalingLevel(1);
	scene = new BABYLON.Scene(engine);
	scene.clearColor = new BABYLON.Color3(0,0,0);
    
	camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 500, new BABYLON.Vector3(0, 0, 0), scene);
    camera.maxZ = 20000;
	/*
	LevelText.innerHTML = level;
	DeathScreen.style.display = "none";
	loaded = false;
	movex=0, movez=0, movey=0;
	enemies=[];
	*/
	time = 0;
	
    bulletobj = BABYLON.Mesh.CreateSphere("bulletmain", 1,1, scene);
	bulletobj.isVisible =false;
	
	bulletobj2 = BABYLON.Mesh.CreateSphere("bulletmain", 4,3, scene);
	bulletobj2.position.x = 15000;
	bulletobj2.position.z = 15000;
	
	bulletpart = new BABYLON.ParticleSystem("bulletPart", 100, scene);
	bulletpart.emitter = bulletobj2; 
    bulletpart.minEmitBox = new BABYLON.Vector3(0, 1, 0); // Starting all From
    bulletpart.maxEmitBox = new BABYLON.Vector3(0, 1, 0); // To...
    bulletpart.direction1 = new BABYLON.Vector3(-100, -100, -100);
    bulletpart.direction2 = new BABYLON.Vector3(100, 100, 100);
    bulletpart.maxLifeTime = .1;
	bulletpart.maxSize = 5.5;
	bulletpart.disposeOnStop = false;
	
 	var rockmaterial = new BABYLON.StandardMaterial("rockmaterial", scene);
 	rockmaterial.diffuseTexture = new BABYLON.Texture("images/marble.jpg", scene);
  	rockmaterial.bumpTexture = new BABYLON.Texture("images/Rocknormal.jpg", scene);
  	rockmaterial.specularColor = new BABYLON.Color3(0, 0, 0);		
    rockmaterial.diffuseTexture.uScale = .5;
    rockmaterial.diffuseTexture.vScale = .5;
	
	
   skybox = BABYLON.Mesh.CreateBox("skyBox", 1500.0, scene);
   skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
   skyboxMaterial.backFaceCulling = false;
   skybox.material = skyboxMaterial;
   skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
   skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
   skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("skybox/skybox", scene);
   skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	
   light0 = new BABYLON.HemisphericLight("Omni", new BABYLON.Vector3(0, 0, -10), scene);

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