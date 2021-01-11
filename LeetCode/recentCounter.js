var RecentCounter = function() {
    requests = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    requests.push(t)
    let currentRequests = requests.filter( pin => pin <= t && pin >= t - 3000)
    return currentRequests.length
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

let obj = new RecentCounter
obj.ping(1)
obj.ping(100)
obj.ping(3002)