var isMatch = function(s, p) {
    let starIndex = -1
    //pointer for p
    let i = 0
    //pointer for s
    let j = 0
    let starJ
    while (j < s.length ) {
      if ( p[i] === s[j] || p[i] === "?") {
        j++
        i++
      } else if ( p[i] === "*") {
        starIndex = i
        starJ = j
        i++
      } else if (starIndex !== -1) {
        i = starIndex + 1
        j = ++starJ
      } else {
          return false
      }
    }
    while (i < p.length && p[i] === "*") {
        i++
    }
    return i === p.length
};