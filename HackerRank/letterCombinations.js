const tokens = {
    "1": [],
    "2" : ["a", "b", "c"],
    "3" : ["d", "e", "f"],
    "4" : ["g", "h", "i"],
    "5" : ["j", "k", "l"],
    "6" : ["m", "n", "o"],
    "7" : ["p", "q", "r", "s"],
    "8" : ["t", "u", "v"],
    "9" : ["w", "x", "y", "z"]
  }

var letterCombinations = function(digits) {
  return letterCombinationsHelper(digits, digits.length - 1)
}

var letterCombinationsHelper = function(digits, length) {
  if (length <= 0) {
    return tokens[digits[length]] || []
  }
  
  let output = []
  let lettersArray = letterCombinationsHelper(digits, length - 1)
  if (lettersArray.length === 0) {
    return tokens[digits[length]]
  }
  if (digits[length] !== "1") {
    for (const letters of lettersArray) {
      for (const letter of tokens[digits[length]])
      output.push(letters + letter)
    }
    console.log(output)
    return output
  } else {
    return lettersArray
  }
}



letterCombinations("23")