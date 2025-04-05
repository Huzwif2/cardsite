list = [
	"Honda civic",
	"Chrysler 300",
	"Lamborghini Urus",
	"Nissan Skyline",
	"Honda Prelude",
	"Zenvo",
	"Dodge Charger",
	"Dodge Challenger",
	"Nissan Silvia",
]

list = list.sort();

let userInput;

document.getElementById("searchButton").onclick = () => {
	const userInput = document.getElementById("userInput").value;
	console.log(userInput);
};


const output = document.querySelector(".output");

window.addEventListener('DOMContentLoaded', loadList);

function loadList() {
	let temp = `<ul class="listItems">`;
	list.forEach(item=>{
		temp += `<li class="listItem"> ${item}</li>`;
	})
	temp += `</ul>`;

	output.innerHTML = temp;
}
