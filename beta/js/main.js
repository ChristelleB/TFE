$( document ).ready(function() {
	//pour chaque click sur un lien
    $('#container').on("click", "#changer", function(event) {
    	 event.preventDefault();
    	 //prends la class de l'element clické
	    console.log(this.className, 'la classe de l element clicker');
	    //load la page html sous forme nom de la class + .html
	    $('#container').load( "scene/" + this.className + ".html" );

	    //si le classname est decor2
	    //change par rapport a celle du desssin ou
	    switch(this.className) {
	    	case 'decor2':
	    		console.log('decor2');
	        case 'decor3':
	    		console.log('decor3');
	        case 'decor4':
	    		console.log('decor4');
	        case 'decor5':
	    		console.log('decor5');
	        break;
		}
    });





});

