// 插入排序  希尔排序

function insertSort (array) {
  var initArray = array
  initArray.forEach((item, index) => {
    if (index === 0) {
      return
    }
    if (item < initArray[index - 1]) {
      let temp = item
      initArray[index] = initArray[index - 1]
      let j = index - 2
      while(j >= 0 && temp < initArray[j]) {
        initArray[j + 1] = initArray[j]
        j--
      }
      initArray[j + 1] = temp
    }
  })
  return initArray
}

var array = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
console.time()
insertSort(array)
console.timeEnd()