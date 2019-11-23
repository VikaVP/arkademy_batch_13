function arkademy(num) {
    if (typeof (num) !== 'number') {
        return `Input harus angka!`
    }
    let result = ''
    for (let i = 1; i <= num; i++) {
        if (i % (3 * 7) == 0) {
            result += 'Arkademy'
        } else if (i % 7 == 0) {
            result += 'Demy' + ','
        } else if (i % 3 == 0) {
            result += 'Arka' + ','
        } else {
            result += i + ','
        }
    }
    return result
}
console.log(arkademy(21))
console.log(arkademy('arka'))