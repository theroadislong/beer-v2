import getData from "./getDatafromApi";
import { sortData, addDataAttribute } from "./helpers";
import renderSliderCards from "./renderSliderCards";
import renderRows from "./renderRows";

const url = "https://api.punkapi.com/v2/beers";

const table = document.querySelector(".table");
const slider = document.querySelector(".slider");

getData(url)
	.then(data => Promise.resolve(data))
	.then(data => Promise.resolve(sortData(data)))
	.then(sortedData => {
		const dataWithAttr = addDataAttribute(sortedData);
		renderRows(dataWithAttr, table);
		renderSliderCards(dataWithAttr.slice(0,3), slider);
	});
