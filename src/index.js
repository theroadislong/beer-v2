import getData from "./getData";
import prepareData from './prepareData';
import renderSlider from "./renderSlider";
import renderTable from "./renderTable";

const app = async() => {
	const dataFromApi = await getData();
	const dataToRender = prepareData(dataFromApi);
	renderSlider(dataToRender);
	renderTable(dataToRender);
}

app();