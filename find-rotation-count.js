function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    // If the array is not rotated at all
    if (arr[left] < arr[right]) {
        return 0;
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if mid is the minimum element
        if (arr[mid] > arr[mid + 1]) {
            return mid + 1;
        }

        // Check if mid-1 is the minimum element
        if (arr[mid - 1] > arr[mid]) {
            return mid;
        }

        // Decide which half to choose for the next step
        if (arr[left] <= arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return 0;
}

module.exports = findRotationCount