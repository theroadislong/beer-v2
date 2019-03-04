
const getData = () => {
	const url = "https://api.punkapi.com/v2/beers";
	return fetch(url)
		.then(response => response.json())
		.catch(error => console.log(error));
};

export default getData;
