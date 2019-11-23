function pairSocks(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    let arrNew = []
    for (const i in obj) {
        if (obj[i] > 1) {
            arrNew.push(i)
        }
    }
    return arrNew.length + ' pair'
}
console.log(pairSocks([5, 13, 7, 5, 9, 20, 9, 5, 14]));
