module.exports = {
	
	aritGeo: (array) => {
		let checkElement = (demo) => {
	    	return typeof(demo) !== 'number';
	    }

		if( !Array.isArray(array) ){
			return "Invalid input"
		}

		else if( array.length === 0 ){
			return 0;
		}

		else if ( array.length < 3 ) {

			return -1;
		}

		else if( array.find(checkElement) ){

			return "only numbers are allowed"
		}

		else{

			const commonDifference = array[1] - array[0];
		    const commonRatio = array[1] / array[0];
			let arithStatus = true;
			let geoStatus = true;

			for ( let i = 0; i < array.length - 1; i++ ){

			    if( array[i + 1] - array[i] !== commonDifference )
			      arithStatus = false;
			    if( array[i + 1] / commonRatio !== array[i] )
			      geoStatus = false;
			}

			if ( arithStatus === true ){
			    return "Arithmetic";
			}

			else if ( geoStatus === true ){
			    return "Geometric";
			}

			else {
			    return -1;
			}
		}

		
	}

}


