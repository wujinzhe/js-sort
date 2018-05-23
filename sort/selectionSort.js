// 选择排序  简单选择排序

function selectSort (array) {
  var initArray = array
  for (let i = 0; i < initArray.length; i++) {
    let temp = initArray[i]
    let w = i
    for (let j = i; j < initArray.length; j++) {
      if (initArray[j] < temp) {
        temp = initArray[j]
        w = j
      }
    }
    initArray[w] = initArray[i]
    initArray[i] = temp
  }
  return initArray
}

var array = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

console.time()
selectSort(array)
console.timeEnd()