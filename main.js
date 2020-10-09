const containerHero = document.querySelector(".container-hero-cards");

const loadHeroes = () => {
	fetch("https://superheroapi.com/api/2339055509572901/1/image")
		.then((response) => response.json())
		.then((data) => {
			const heroCard = document.createElement("div");
			heroCard.classList.add("hero-card");

			let output = `<img src="${data.url}"/>
                           <h2> ${data.name}</h2>
                           <p> ID:${data.id}`;

			heroCard.innerHTML = output;
			containerHero.appendChild(heroCard);
		});
};

window.addEventListener("load", loadHeroes);
