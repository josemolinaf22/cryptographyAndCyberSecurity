const encode = str => {
    let arr = []
    for(let i = 0; i < str.length; i++) {
        let a = str.charCodeAt(i)
        a += 7
        if(a > 126) {
            a -= (126-32)
        }
        let b = String.fromCharCode(a)
        arr.push(b)

    }
    return arr.join('')
}

const decode = str => {
    let arr = []
    for( let i = 0; i < str.length; i++) {
        let a = str.charCodeAt(i)
        a -= 7
        if( a < 32) {
            a += (126-32)
        }
        let b = String.fromCharCode(a)
        arr.push(b)
    }
    return arr.join('')
}
console.log(encode('I love Cryptography!'))
console.log(decode(P'sv}l'Jy"w{vnyhwo"())