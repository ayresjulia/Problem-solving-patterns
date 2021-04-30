function countPairs (arr, target, count = 0, left = 0, right = arr.length - 1) {
	arr.sort((a, b) => a - b);
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === target) {
			count++;
			left++;
			right--;
		} else if (sum < target) {
			left++;
		} else {
			right--;
		}
	}
	return count;
}

module.exports = { countPairs };
