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

function filterHeroes(e) {
	const arrayCheckboxes = Array.from(document.querySelectorAll("input"));
	const checkboxes = arrayCheckboxes.filter(checkbox => checkbox.checked);
	let arrayHero = [];
	 
	containerHero.innerHTML = " ";
	checkboxes.forEach(checkbox => {
	 
		fetch("https://api.opendota.com/api/heroes")
			.then((response) => response.json())
			.then((data) => {
		
				data.forEach(element => {
			
					if (element.primary_attr === checkbox.id) {
						const heroObj = {
							name: element.name,
							id: element.id,
							primaryAttribute: element.primary_attr,
							image: " "
						};
						arrayHero.push(heroObj);
					}
			
				})

				addHeroes(arrayHero);
		  
			})	 

	})
}

function addHeroes(arrayHero)
{
	arrayHero = addImageToHeroes(arrayHero);
	console.log(arrayHero);
	
	/*  fetch("https://api.opendota.com/api/heroStats")
					.then((response) => response.json())
					.then((data) => {
						data.forEach(element => {
			
							for (let i = 0; i < arrayHero.length; i++) {
								if (element.id === arrayHero[i].id) {
									arrayHero[i].image = element.img;

									break;
								}
							}
			
						}) */
						 arrayHero.forEach(hero => {
					
							const heroCard = document.createElement("div");
							heroCard.classList.add("hero-card");
							heroCard.innerHTML = `
								  <img src="https://api.opendota.com${hero.image}"
									<h2>${hero.name} </h2>
								   <p> ID:${hero.id} </p>
								   <p> ${hero.primaryAttribute}</p>
								  `
	
							containerHero.appendChild(heroCard);
						})
					
}

function addImageToHeroes(arrayHero)
{

	let arrayHeroCopy = arrayHero;
	
	 fetch("https://api.opendota.com/api/heroStats")
		.then((response) => response.json())
		.then((data) => {
			data.forEach(element => {
			
				for (let i = 0; i < arrayHeroCopy.length; i++) {
					if (element.id === arrayHeroCopy[i].id) {
						arrayHeroCopy[i].image = element.img;

						break;
					}
				}
			
			})
			
		})
	return arrayHeroCopy;
}

 
window.addEventListener("load", loadHeroes);
filterComponent.addEventListener("change",filterHeroes);
