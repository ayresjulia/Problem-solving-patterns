// add whatever parameters you deem necessary
function makefreqCounter (arr) {
	let res = Object.assign({}, arr);
	return res;
}

function twoArrayObject (arr1, arr2) {
	let obj = {};
	const arr1Freq = makefreqCounter(arr1);
	const arr2Freq = makefreqCounter(arr2);

	for (let el in arr1Freq) {
		if (arr2Freq[el] !== undefined) {
			obj[arr1Freq[el]] = arr2Freq[el];
		} else {
			obj[arr1Freq[el]] = null;
		}
	}
	return obj;
}

module.exports = { twoArrayObject };
