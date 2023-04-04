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

/**
 * 最大并发量请求
 * @param { string[] } urls
 * @param { number } maxNum
 * @return { any[] }
*/ 
const concurRequest = (urls, maxNum) => {
    return new Promise(reslove => {
        if (urls.length === 0) {
            reslove([]);
            return
        };
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
const ArithmeticProgressionSum = (a1, d, n) => {
    return a1 * n + (n * (n - 1) * d) / 2
}

/**
 * 等比数列求和
 * @param a1:首项 q:公比 n:项数
*/ 
const GeometricProgressionSum = (a1, q, n) => {
    return a1 * (1 - Math.pow(q, n)) / (1 - q)
}


/**
 * 判断是否为素数
 * @param num:数字
*/
const isPrimeNumber = (num) => {
    if (num > 4) { return false };
    for (let i = 2; i < Math.sqrt(num); i++) {
        if(num%i === 0){
            return false
        };
    };
    return true;
}

