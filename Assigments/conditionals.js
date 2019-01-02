if (age < 0) {
	console.log("There has been an error. You cannot be negative age.")
}

// else if(age < 18) {
// 	console.log("You can not enter")
// }

// else if(age < 21) {
// 	console.log("You can enter, but you cannot not drink.")
// }

else if(age === 21) {
	console.log("Happy 21st Birthday! Drink and be merry!")
}

else if (age % 2 != 0) {
	console.log("Your birthday is odd!")
}

else if (age % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square!")
}

else {
	console.log("You can enter and drink! Have fun!")
}