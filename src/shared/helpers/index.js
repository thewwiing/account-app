

export const hideNumber = (num) => {
    let splitted = num.split('');
    for (let i = 0; i < splitted.length; i++) {
        if (i >= 2 && i < 14 && splitted[i] !== '-') splitted[i] = '*'
    }
    return splitted.join('')
}
