function separatePositive (arr, left = 0, right = arr.length - 1) {
	while (left < right) {
		if (arr[left] < 0 && arr[right] > 0) {
			[ arr[left], arr[right] ] = [ arr[right], arr[left] ];
		} else if (arr[left] > 0 && arr[right] > 0) {
			left++;
		}
	}
	return arr;
}

module.exports = { separatePositive };
