// The array MUST be sorted in ascending order for this to work!
function binarySearch(key, sortedArray, member) {
	var low = 0,
		high = sortedArray.length - 1,
		mid,
		value;

	while (low <= high) {
		mid = low + (high - low) / 2;
		if (mid % 1 > 0) {
			mid = Math.ceil(mid);
		}

		// allows for searching an array of objects
		if (member > "") value = sortedArray[mid][member];
		else value = sortedArray[mid];

		if (key < value) {
			high = mid - 1;
		} else if (key > value) {
			low = mid + 1;
		} else {
			return mid;
		}
	}

	return null;
}

var arrA = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
	],
	arrB = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
	arrC = [
		{ name: "Adam" },
		{ name: "Jay" },
		{ name: "Kyle" },
		{ name: "Scott" }
	];

$("#arrA").html(binarySearch(13, arrA));
$("#arrB").html(binarySearch("g", arrB));
$("#arrC").html(binarySearch("Kyle", arrC, "name"));
