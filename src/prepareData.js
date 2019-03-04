const prepareData = data => {
    const sortedData = sortData(data);
    const dataWithAttribute = addDataAttribute(sortedData);
    const result = dataWithAttribute;
    return result;
}

const sortData = data => {
	const sortData = [...data].sort(function(a, b) {
		if (a.attenuation_level < b.attenuation_level) {
			return 1;
		}
		if (a.attenuation_level > b.attenuation_level) {
			return -1;
		}
		return 0;
	});
	return sortData;
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
