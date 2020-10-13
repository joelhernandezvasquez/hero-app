const containerHero = document.querySelector(".container-hero-cards");
const filterComponent = document.querySelector(".search-filter-component");

const loadHeroes = () => {
	
	fetch("https://api.opendota.com/api/heroStats")
		.then((response) => response.json())
		.then((data) => {
			
			data.forEach(element => {
			const heroCard = document.createElement("div");
			heroCard.classList.add("hero-card");
			heroCard.innerHTML = ` <img src="https://api.opendota.com${element.img}">
									<h2>${element.name} </h2>
								   <p> ID:${element.id} </p>
								  `

			containerHero.appendChild(heroCard); 
			});
			
		})
		
	}

function filterHeroes(e)
{
	const arrayCheckboxes = Array.from(document.querySelectorAll("input"));
	const checkboxes = arrayCheckboxes.filter(checkbox => checkbox.checked);
	 let arrayHero = [];
	 let arrayImage = [];
	 
	 containerHero.innerHTML = " ";
	checkboxes.forEach(checkbox=>{
	 
	
		fetch("https://api.opendota.com/api/heroes")
	  .then((response)=> response.json())
	  .then((data)=> {
		
		data.forEach(element=>{
			
			if(element.primary_attr===checkbox.id)
			{
				const heroObj = {
				   name:element.name,
				   id:element.id,
				   primaryAttribute: element.primary_attr
				};
				arrayHero.push(heroObj);
			}
			
		  })
		  
		   addImageToHero(arrayHero); 
		  arrayHero.forEach(hero=>{
			//<img src="https://api.opendota.com${d.img}"
								 
				 const heroCard = document.createElement("div");
				heroCard.classList.add("hero-card");
				heroCard.innerHTML = `
									<h2>${hero.name} </h2>
								   <p> ID:${hero.id} </p>
								   <p> ${hero.primaryAttribute}</p>
								  `
	
			containerHero.appendChild(heroCard);  
			  })
		}) 
		  
		
		 
		 

})
}

 function addImageToHero(arrayHero)
{
	let index = 0;
	//console.log(arrayHero);
	fetch("https://api.opendota.com/api/heroStats")
	.then((response)=> response.json())
	.then((data)=> {
		data.forEach(element=>{
			
			if(arrayHero.indexof)
			{
				console.log(true);
				console.log(`element from API ${element.id}`)
				console.log(`element from Array hero ${arrayHero[index].id}`)
			}
			else
			{
				console.log("false");
			}
			/*  if(element.id===arrayHero[index].name)
			{
				console.log("equal");
			}
			index++;  */
			index++;
			
		})
	})
} 

window.addEventListener("load", loadHeroes);
filterComponent.addEventListener("change",filterHeroes);
