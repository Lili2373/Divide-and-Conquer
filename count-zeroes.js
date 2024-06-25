function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    // If the array is empty
    if (arr.length === 0) {
        return 0;
    }

    // If the array contains all 1s
    if (arr[right] === 1) {
        return 0;
    }

    // If the array contains all 0s
    if (arr[left] === 0) {
        return arr.length;
    }

    // Binary search to find the first 0
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === 1) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr.length - left;
}
module.exports = countZeroes