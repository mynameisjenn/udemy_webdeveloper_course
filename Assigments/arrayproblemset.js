// print the reverse of inputted array

function printReverse(array) {
	for(var i = array.length - 1; i >= 0; i--) {
  		console.log(array[i]);
	}
}

//compare elements in array to see if they are all the same

function isUniform(array){
	var first = array[0];

	for(i = 1; i < array.length; i++){
		if(array[i] !== first){
			return false;
		}
	}
	return true;
}

// sum all the elements in array

function sumArray(array) {
	var result = 0
	array.forEach(function(element) {
		result += element;
	});
	return result 
}

//return max of function

function max(array) {
	var currentmax = array[0];
	array.forEach(function(element) {
		if(element > currentmax) {
			currentmax = element;
		}
	});
	return currentmax;
}


// max();