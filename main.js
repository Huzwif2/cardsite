const userCardTemplate = document.querySelector("[data-user-template]")

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>{ 
	      const card = userCardTemplate.content.cloneNode(true).children[0];
	      console.log(card);
})
