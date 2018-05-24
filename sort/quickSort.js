// 快速排序
function quickSort (array) {
  if (array.length < 2) { return array }

  var init_array = array
  // 获取基准数的位置
  var pivotIndex = Math.floor(array.length / 2)
  // console.log(pivotIndex)
  var left = []
  var right = []
  // 得到基准数 并且从原数组中删除
  var pivot = init_array.splice(pivotIndex, 1)[0]

  init_array.forEach(item => {
    if (item < pivot) {
      left.push(item)
    } else {
      right.push(item)
    }
  })

  return quickSort(left).concat([pivot], quickSort(right));
}

var array = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
var a
console.time()
a = quickSort(array)
console.timeEnd()
console.log(a)