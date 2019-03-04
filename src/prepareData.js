const prepareData = data => {
	const sortKey = 'attenuation_level';
    const sortedData = sortData(data, sortKey);
    const dataWithAttribute = addDataAttribute(sortedData);
    const result = dataWithAttribute;
    return result;
}

const sortData = (data, key) => {
	let isAvailable = true;
	
	data.forEach(element => {
		if (element[key] === undefined) {
			isAvailable = false;
		}
	});

	const sortData = [...data].sort(function(a, b) {
		if (a[key] < b[key]) {
			return 1;
		}
		if (a[key] > b[key]) {
			return -1;
		}
		return 0;
	});
	// если ключа не существует то сортировку не делаем и отдаем то что пришло
	return (isAvailable) ? sortData : data;
};

const addDataAttribute = (data) => {
	const withDataAttribute = [];
	[...data].map((item, index) => {
		item["data-index"] = index + 1;
		withDataAttribute.push(item);
	})
	return withDataAttribute
};

export default prepareData;
