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
