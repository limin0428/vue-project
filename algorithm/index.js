/**
 * 是否为回文串
 * @param { string, boolean } 
 * @return { boolean }
 */
const isPalindrome = (str = '', isCaseSensitive = false) => {
    if (!str) {
        return true;
    };
    let left = 0;
    let right = str.length - 1;
    let isEq = true;
    while (left < right) {
        console.log(str[left]);
        console.log(str[right]);
        isEq = isCaseSensitive ? str[left] === str[right] : str[left].toLowerCase() === str[right].toLowerCase();
        if (!isEq) {
            return false
        };
        left++; right--
    };
    return true
};

/**
 * 获取根据手机按钮数字获取所有字母组合
 * @param { string } digits 数字按键 eg: '23'
 * @return { string[] }
 */
const keyboardMap = (digits) => {
    let res = [];
    const _compose = (arr1 = [], arr2 = []) => {
        let r = [];
        if (arr1.length === 0) { return arr2 };
        if (arr2.length === 0) { return arr1 };
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                r.push(`${arr1[i]}${arr2[j]}`)
            }
        };
        return r;
    }
    const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    for (let i = 0; i < digits.length; i++) {
        res = _compose(res, map[digits[i]].split(''));
    }
    return res;
}



