// add whatever parameters you deem necessary
function averagePair (arr, target, left = 0, right = arr.length - 1) {
	while (left < right) {
		const avg = (arr[left] + arr[right]) / 2;
		if (avg === target) {
			return true;
		} else if (avg > target) {
			right--;
		} else {
			left++;
		}
	}
	return false;
}

module.exports = { averagePair };

// console.log(averagePair([ 1, 2, 3 ], 2.5)); // true
// console.log(averagePair([ 1, 3, 3, 5, 6, 7, 10, 12, 19 ], 8)); // true
// console.log(averagePair([ -1, 0, 3, 4, 5, 6 ], 4.1)); // false
// console.log(averagePair([], 4)); // false
