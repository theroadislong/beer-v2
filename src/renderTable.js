const rowTemplate = document.querySelector(".row-template").content;

const createRow = object => {
	const newRow = rowTemplate.cloneNode(true);
	newRow.querySelector(".row__name").textContent = object.name;
	newRow.querySelector(".row__est").textContent = object.first_brewed;
	newRow.querySelector(".row__abv").textContent = object.abv;
	newRow.querySelector(".row__ibu").textContent = object.ibu;
	newRow.querySelector(".row__ph").textContent = object.ph;
	newRow.querySelector(".row__srm").textContent = object.srm;
	newRow.querySelector(".row__tagline").textContent = object.tagline;
	newRow.querySelector(".row__id").textContent = object.id;
	return newRow;
};

const renderTable = (objects) => {
    const destination = document.querySelector(".table");
	const fragment = document.createDocumentFragment();
	objects.forEach(object => fragment.appendChild(createRow(object)));
	destination.appendChild(fragment);
};

export default renderTable;