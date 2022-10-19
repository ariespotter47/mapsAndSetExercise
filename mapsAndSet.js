// new Set ([1,1,2,2,3,4]) returns 1,2,3,4 
// new Set("referre").join  returns ref
// let m = new Map();
//undefined
//m.set([1,2,3], true);
///Map(1) {Array(3) => true}
//m.set([1,2,3], false);
//Map(2) {Array(3) => true, Array(3) => false}

const hasDuplicate = arr => new Set(arr).size !== arr.length

function vowel(char){
    return "aeiou".includes(char);
}
functon vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(vowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
        return vowelMap;
    }
}