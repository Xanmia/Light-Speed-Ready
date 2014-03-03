function SpawnOutside(){
	var rando = Math.round(Math.random()*1);
	var x = ((Math.random()*1500)-750);
	var z = ((Math.random()*1500)-750);
	if (rando == 1)
	{
  	  if (x > 0){
  		  x = height+100;
  	  }
  	  else{
	  	x=-height-100;
  	  }	
	}
	else
	{
  	  if (z > 0){
  		  z = width+100;
  		}
  	  else{
	  	  z=-width-100;
  	   }	
	}
	return {'x': x, 'z': z};
}

function SpawnInside(){
	var rando = Math.round(Math.random()*1);
	var x = ((Math.random()*1500)-750);
	var z = ((Math.random()*1500)-750);
	if (rando == 1)
	{
  	  if (x > 0){
  		  x = height-100;
  	  }
  	  else{
	  	x=-height+100;
  	  }	
	}
	else
	{
  	  if (z > 0){
  		  z = width-100;
  		}
  	  else{
	  	  z=-width+100;
  	   }	
	}
	return {'x': x, 'z': z};
}