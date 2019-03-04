const cardTemplate = document.querySelector(".card-template").content;

const createBeer = object => {
	const newBeer = cardTemplate.cloneNode(true);
	newBeer.querySelector(".card__image").src = object.image_url;
	newBeer.querySelector(".card__image").alt = object.name;
	newBeer.querySelector(".card__name").textContent = object.name;
	newBeer.querySelector(".card__level").textContent = object.attenuation_level;
	newBeer.querySelector(".card__place").textContent = "#" + object["data-index"];
	newBeer.querySelector(".card__id").textContent = object.id;
	return newBeer;
};

const renderSliderCards = (objects) => {
	const sliderElements = 3;
	const destination = document.querySelector(".slider");
	const fragment = document.createDocumentFragment();
	objects.slice(0, sliderElements).forEach(object => fragment.appendChild(createBeer(object)));
	destination.appendChild(fragment);
};

export default renderSliderCards