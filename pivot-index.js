function pivotIndex (arr, left = 0) {
	let pivot;
	let totalSum = arr.reduce((a, b) => a + b, 0);
	for (let i = 0; i < arr.length; i++) {
		left += arr[i];
		if (left === totalSum) {
			pivot = i;
			break;
		}
		totalSum -= arr[i];
	}
	return pivot || -1;
}

module.exports = { pivotIndex };
