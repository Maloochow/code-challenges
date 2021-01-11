var removeKdigits = function(num, k) {
    if (k === 0) {
      return num
    } else if (k >= num.length) {
      return "0"
    }
    let min
    return helper(num, k, min)
  };
  
  function helper(num, k, min) {
    if (k === 0) {
      return num
    } else {
      for (let i = 0; i < num.length; i++) {
        let newNum = num.slice(0, i) + num.slice(i+1, num.length)
        let newMin = helper(newNum, k-1)
        min = min ? (newMin < min ? newMin : min) : newMin
      }
    }
    return parseInt(min, 10).toString()
  }
  
  removeKdigits("10", 2)
  
  