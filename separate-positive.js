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

// module.exports = { separatePositive };

console.log(separatePositive([ 2, -1, -3, 6, -8, 10 ])); // [2, 10, 6, -3, -1, -8]
console.log(separatePositive([ 5, 10, -15, 20, 25 ])); // [5, 10, 25, 20, -15]
console.log(separatePositive([ -5, 5 ])); // [5, -5]
console.log(separatePositive([ 1, 2, 3 ])); // [1, 2, 3]
