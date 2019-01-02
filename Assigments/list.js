var todos = ["Go Grocery Shopping"];

window.setTimeout(function() {

var input = prompt("What would you like to to?");

while (input !== "quit") {
	if (input === "list") {
		listTodos();
	} else if(input === "new") {
		addTodo();
	} else if(input === "delete") {
		deleteTodo();
	}
	// ask again for input
	input = prompt("What would you like to to?");
	}

	console.log("Ok, you quit the app!");	
}, 500);

function listTodos() {
	console.log("***********");
	todos.forEach(function(todo, index) {
	console.log(index + ": " + todo);
});
	console.log("***********");
}

function addTodo() {
	var newTodo = prompt("Add New Item to To Do List");
	todos.push(newTodo);
	console.log("Added To Do"); 
}

function deleteTodo() {
	var index = prompt("Enter Index of To Do to Delete");
	todos.splice(index, 1);
	console.log("Deleted To Do"); 
}