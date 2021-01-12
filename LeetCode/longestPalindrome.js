var longestPalindrome = function(s) {
    if (s.length <= 1) {
        return s
    }
    let subString1=""
    for (let i = 0; i < s.length; i++) {
        let subString = s.slice(i)
        while(subString.length > 0) {
            if (isPalindrome(subString)) {
                
                subString1 = subString.length > subString1.length ? subString : subString1
                break
            } else {
                subString = subString.slice(0, -1)
            }
        }
    }
    return subString1
};


function isPalindrome(s) {
    for (let i = 0, j = s.length -1; i<=j; i++, j--) {
        if (s[i] !== s[j]) {
            return false
        }
    }
    return true
}