function username(uname) {
    let regex = /^[a-z]{3,5}/
    if (uname.length >= 3 && uname.length <= 5 && regex.test(uname)) {
        return true
    } else {
        return false
    }
}
console.log(username('tania'));
console.log(username('Eka'));

function password(pw) {
    let regex = /^[0-9]{3}[-]{1}[0-9]{3}[A-Z]{4}$/
    if (regex.test(pw)) {
        return true
    } else {
        return false
    }
}
console.log(password('021-333BUDI'));
console.log(password('021*444DEA'));
console.log(password('987-654Oliv'));
