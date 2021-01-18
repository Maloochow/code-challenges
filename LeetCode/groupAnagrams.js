var groupAnagrams = function(strs) {
    let result = {}
    for (const str of strs) { 
        if (!result[str.split("").sort()]){
            result[str.split("").sort()] = [str]
        } else {
            result[str.split("").sort()].push(str)
        }    
    }
    return Object.values(result)
};