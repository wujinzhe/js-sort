// 直接插入排序

function insertSort (...number) {
  var initArray = [...number]
  var newArray = []
  initArray.forEach((item, index) => {
    if (index === 0) {
      return
    }
    if (item < initArray[index - 1]) {
      
    }
    // let i = 0
    // while (i < newArray.length) {
    //   if (item > newArray[i]) {
    //     newArray[i + 1] = item
    //   } else {
    //     let temp = newArray[i]
    //     newArray[i + 1] = newArray[i]
    //   }

    //   i++
    // }
  })
}