function binarySearch(sortedArray, toFind) {
    sortedArray.sort()
    let lowIndex = 0
    let highIndex = sortedArray.length - 1
    while (lowIndex <= highIndex) {
        const midIndex = Math.floor((lowIndex+highIndex)/2)
        if (sortedArray[midIndex] === toFind){
            return midIndex
        }else if(sortedArray[midIndex] < toFind){
            lowIndex = midIndex + 1
        } else {
            highIndex = midIndex - 1
        }
    } return -1
}
console.log(binarySearch([1,3,5,7], 3)); //1
console.log(binarySearch([1,5,7,3], 7)); //2
console.log(binarySearch([1,3,5,7], 10)); //-1
console.log(binarySearch([2, 3, 5, 7, 1], 7)); //4