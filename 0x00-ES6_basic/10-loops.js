export default function appendToEachArrayValue(array, appendString) {
	const arrayList = [];
	for (const idx of array) {
		arrayList.push(appendString + idx)
	}

	return arrayList;
}
