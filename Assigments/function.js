function isEven(num) {
	
	if (num % 2 === 0) {
		return true;
	} else
	return false;
}

isEven(4);

//refactored

function isEven(num) {
	return num % 2 === 0;
}



function factorial(num) {

	if (num === 0 || num === 1)
		return 1;
	for (var i = num - 1; i >= 1; i--) {
		num *= i;
	}
	return num;
} 


function kebabToSnake(str) {
	var newStr = return str.replace(/-/g, "_");
	return newStr
}