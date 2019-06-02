
class SortTestHelper {
    constructor() {}

    // 生成有n个元素的随机数，每个元素的随机范围为[rangeL, rangeR]
    generateRandomArray(n, rangeL, rangeR) {
        let arr = []
        if (rangeL > rangeR) {
            return -1
        }
        for(let i = 0; i < n; i++) {
            let ranNum = Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL)
            arr[i] = ranNum
        }
        return arr;
    }

    // 选择排序
    selectionSort(arr) {
        for(let i = 0; i < arr.length; i ++) {
            let tempI = arr[i]
            let indexJ = i;
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[indexJ] > arr[j]) {
                    indexJ = j
                }
            }
            arr[i] = arr[indexJ]
            arr[indexJ] = tempI
        }
    }

    // 插入排序
    insertSort(arr) {
        for(let i = 1; i < arr.length; i++){
            let temp = arr[i]
            for(let j = i; j > 0; j--) { 
                if(temp < arr[j - 1]){
                    arr[j] = arr[j - 1]
                   
                } else {
                    arr[j] = temp
                    break
                }
            }
        }
        // console.log(arr)
    }

    // 测试排序
    testSort(name, sortFunction, arr) {
        console.time(name)
        sortFunction(arr)
        console.timeEnd(name)

        if(this.isSorted(arr)) {
            console.log('排序正确')
        } else {
            console.log('排序有误')
        }
    }

    isSorted(arr) {
        for(let i = 1; i < arr.length; i++) {
            if(arr[i - 1] > arr[i]) {
                return false
            }
        }

        return true
    }
}

module.exports = SortTestHelper