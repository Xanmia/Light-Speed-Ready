
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
	var backgroundLoad = document.createElement("img");
	backgroundLoad.src = "images/background.png";
	backgroundLoad.onload = function () { 		
				startDisplay.style.display = "block"; 
			};
	
	var backmaterial = new BABYLON.StandardMaterial("texture1", scene);
	backmaterial.diffuseTexture = new BABYLON.Texture(backgroundLoad.src, scene);
	
	particleTexture = new BABYLON.Texture("images/Flare.png", scene);
	
    bulletobj = BABYLON.Mesh.CreateSphere("bulletmain", 1,1, scene);
	bulletobj.position.y = -500;
	bulletobj.isVisible =false;
	
	bulletobj2 = BABYLON.Mesh.CreateSphere("bulletmain2", 4,3, scene);
	bulletobj2.position.x = 15000;
	bulletobj2.position.z = 15000;

 	var rockmaterial = new BABYLON.StandardMaterial("rockmaterial", scene);
 	rockmaterial.diffuseTexture = new BABYLON.Texture("images/marble.jpg", scene);
  	rockmaterial.bumpTexture = new BABYLON.Texture("images/Rocknormal.jpg", scene);
  	rockmaterial.specularColor = new BABYLON.Color3(0, 0, 0);		
    rockmaterial.diffuseTexture.uScale = .5;
    rockmaterial.diffuseTexture.vScale = .5;
	
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
		
   				//SceneReset();
   			});	
       });
 	});

	
}