var readBinaryWatch = function(num) {
    let output = []
    for (let h = 0; h<12; h++) {
      for (let m=0; m<60; m++ ) {
        if (validateNum(h, m, num)) {
          let mStr = ("0" + m.toString()).slice(-2)
          output.push(`${h}:${mStr}`)
        }
      }
    }
    return output
  }
  
  function validateNum(h,m,n) {
    let h2 = h.toString(2).split("0").join("").length
    let m2 = m.toString(2).split("0").join("").length
    if ((parseInt(h2, 10) + parseInt(m2, 10)) === n) {
      return true
    } else {
      return false
    }
  }
  
  
  