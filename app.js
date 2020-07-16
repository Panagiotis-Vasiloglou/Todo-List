"use strict";

// Select our items

const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const todoList = document.querySelector(".todo-UL");

// Events
button.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCheck);
input.addEventListener("keypress", (event) => {
	if (event.keyCode == 13) {
		event.preventDefault();
	}
});

// Functions

//We want to create inside our ul a div with class="todo"
//  also an LI.....div -> li
// and two buttons with "Delete" and "Checked" div -> li, button class="Delete", button="Checked"
function addTodo() {
	// Create a div with class="todo"
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("new-todo-div");
	// Create LI
	const todoLI = document.createElement("li");
	todoLI.classList.add("todo-LI");
	todoLI.innerText = input.value;
	// Create button with class "checked"
	const buttonCheck = document.createElement("button");
	buttonCheck.classList.add("check");
	buttonCheck.innerHTML = '<i class="fas fa-check"></i>';
	buttonCheck.type = "button";
	//
	const buttonDelete = document.createElement("button");
	buttonDelete.classList.add("delete");
	buttonDelete.innerHTML = '<i class="fas fa-trash"></i>';
	buttonDelete.type = "button";

	// Append everything to our created div
	todoList.appendChild(todoDiv);
	todoDiv.appendChild(todoLI);
	todoDiv.appendChild(buttonCheck);
	todoDiv.appendChild(buttonDelete);

	//  Clear our Todo INPUT VALUE
	input.value = "";
}

// Function to detect if we Check or Delete

function deleteOrCheck(event) {
	const item = event.target;

	// Delete

	if (item.classList[0] === "delete") {
		const itemParent = item.parentElement;
		itemParent.remove();
	}

	// Check Mark
	if (item.classList[0] === "check") {
		const itemParent = item.parentElement;
		itemParent.classList.toggle("completed");
	}
}
