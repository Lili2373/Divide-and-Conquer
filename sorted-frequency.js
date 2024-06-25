function sortedFrequency(arr, num) {
    // Helper function to find the first occurrence of num
    function findFirst(arr, num) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === num) {
                result = mid;
                right = mid - 1;
            } else if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    // Helper function to find the last occurrence of num
    function findLast(arr, num) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === num) {
                result = mid;
                left = mid + 1;
            } else if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    let first = findFirst(arr, num);
    if (first === -1) return -1;

    let last = findLast(arr, num);

    return last - first + 1;
}


module.exports = sortedFrequency