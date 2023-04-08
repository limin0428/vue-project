/**
 * 是否为回文串
 * @param { string, boolean } 
 * @return { boolean }
 */
export const isPalindrome = (str = '', isCaseSensitive = false) => {
    if (!str) {
        return true;
    }
    let left = 0;
    let right = str.length - 1;
    let isEq = true;
    while (left < right) {
        console.log(str[left]);
        console.log(str[right]);
        isEq = isCaseSensitive ? str[left] === str[right] : str[left].toLowerCase() === str[right].toLowerCase();
        if (!isEq) {
            return false
        }
        left++; right--
    }
    return true
};

/**
 * 获取根据手机按钮数字获取所有字母组合
 * @param { string } digits 数字按键 eg: '23'
 * @return { string[] }
 */
export const keyboardMap = (digits) => {
    let res = [];
    const _compose = (arr1 = [], arr2 = []) => {
        let r = [];
        if (arr1.length === 0) { return arr2 }
        if (arr2.length === 0) { return arr1 }
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                r.push(`${arr1[i]}${arr2[j]}`)
            }
        }
        return r;
    }
    const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    for (let i = 0; i < digits.length; i++) {
        res = _compose(res, map[digits[i]].split(''));
    }
    return res;
}

/**
 * 最大并发量请求
 * @param { string[] } urls
 * @param { number } maxNum
 * @return { any[] }
*/ 
export const concurRequest = (urls, maxNum) => {
    return new Promise(reslove => {
        if (urls.length === 0) {
            reslove([]);
            return
        }
        const result = [];
        let index = 0;
        let count = 0;
        // 定义请求函数
        async function request () {
            if (index >= urls.length) {
                return;
            }
            let i = index;
            const url = urls[index];
            index++;
            try{
                const resp = await fetch(url);
                result[i] = resp;
            }catch(err){
                result[i] = err;
            }finally{
                // 判断是否所有请求都完成
                count++;
                if (count === urls.length) {
                    reslove(request);
                    return;
                } 
                request();
            }
        }
        // 判断数组长度和最大并发量的最小值
        const min = Math.min(urls.length, maxNum);
        for (let i = 0; i < min; i++) {
            request();
        }
    })
}

/**
 * 等差数列求和
 * @param a1:首项 d:公差 n:项数
*/ 
export const ArithmeticProgressionSum = (a1, d, n) => {
    return a1 * n + (n * (n - 1) * d) / 2
}

/**
 * 等比数列求和
 * @param a1:首项 q:公比 n:项数
*/ 
export const GeometricProgressionSum = (a1, q, n) => {
    return a1 * (1 - Math.pow(q, n)) / (1 - q)
}


/**
 * 判断是否为素数
 * @param num:数字
*/
export const isPrimeNumber = (num) => {
    if (num > 4) { return false }
    for (let i = 2; i < Math.sqrt(num); i++) {
        if(num%i === 0){
            return false;
        }
    }
    return true;
}

/**
 * 统计字符串每个字符出现的次数
 * @param str:字符串
 */ 
export const characterCount = (str) => {
    if (typeof str !== 'string') {
        throw new TypeError('str is not string!')
    }
    return str.split('').reduce((pre, next) => {
        pre[next] = pre[next] ? pre[next] + 1 : 1;
        return pre;
    }, {})
}

/**
 * 
 * 
*/
export const request = (url, maxCount = 1) => {
    return fetch(url).catch(err => maxCount <= 0 ? Promise.reject(err) : request(url, maxCount - 1));
}

/***
 * 动态属性
 * add[1][2][3] + 4  // 10
 */
export const add = new Proxy({
    _store: 0
}, {
    get(target, key, rexeiver) {
        if (key === Symbol.toPrimitive) {
            return () => target._store
        }
        target._store += +key;
        return rexeiver
    }
})

/**
 * 字符串截取 码元和码点 
 * 码元: 16位  码点:16位/32位   
*/
String.prototype.sliceByPoint = function (start, end) {
    let result = '';
    let pIndex = 0;
    let cIndex = 0;
    while(true){
        if (pIndex >= end || cIndex >= this.length) {
            break;
        }
        // 获取该字符的码元值 
        const point = this.codePointAt(cIndex);
        if (pIndex >= start) {
            result+= String.fromCodePoint(point);
        }
        cIndex+= point > 0xffff ? 2 : 1;
        pIndex++;
    }
    return result;
};





