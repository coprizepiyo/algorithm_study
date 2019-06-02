let sortTestHelper = require('./sortTestHelper')
let SortTestHelper = new sortTestHelper()

let n = 100000
let arr = SortTestHelper.generateRandomArray(n, 0, n)
let temp = Object.assign([], arr)
// arr = ['b','c','a','d']
SortTestHelper.selectionSort(arr)
SortTestHelper.testSort('selectionSort', SortTestHelper.selectionSort, arr)
SortTestHelper.insertSort(temp)
SortTestHelper.testSort('insertSort', SortTestHelper.insertSort, temp)



// console.log(arr)