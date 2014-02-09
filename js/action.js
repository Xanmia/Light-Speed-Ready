function action( opt ){
	for( var k in opt ) {
		this[k] = opt[k];
	}
	
	this.init();
	this.update = function(){
		this.behavior();
	}
};