class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const objS = {}
        const objT = {}
        for (let i = 0; i < s.length; i++) {
            if (s.at(i) in objS) {
                objS[s.at(i)] += 1;
            } else {
                objS[s.at(i)] = 0;
            }
        }
        for (let i = 0; i < t.length; i++) {
            if (t.at(i) in objT) {
                objT[t.at(i)] += 1;
            } else {
                objT[t.at(i)] = 0;
            }
        }
        return JSON.stringify(sortedObject(objS)) === JSON.stringify(sortedObject(objT))

    }
}

function sortedObject(unordered) {
  return Object.keys(unordered).sort().reduce(
    (obj, key) => {
      obj[key] = unordered[key];
      return obj;
    }, {});
}