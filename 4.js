function abbreviation(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase() && str[i] !== ' ') {
            result += str[i]
        }
    }
    return result
}
console.log(abbreviation('Negara Kesatuan Republik Indonesia'));
console.log(abbreviation('JAwa TIMur'));

