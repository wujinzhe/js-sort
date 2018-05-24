// 冒泡排序
function bubbleSort (array) {
  let init_array = array
  for(let i = 0; i < init_array.length; i++) {
    for(let j = 1; j < init_array.length - i; j++) {
      if (init_array[j - 1] > init_array[j]) {
        let temp = init_array[j - 1]
        init_array[j - 1] = init_array[j]
        init_array[j] = temp
      }
    }
  }
  return init_array
}


var array = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
var a
console.time()
a = bubbleSort(array)
console.timeEnd()
console.log(a)