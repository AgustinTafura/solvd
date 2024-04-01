function addStrings(str1, str2) {
    let result = '';
    let carry = 0;
    let i = str1.length - 1;
    let j = str2.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        const digit1 = i >= 0 ? parseInt(str1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(str2[j]) : 0;
        const sum = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }

    return result;
}

function subtractStrings(str1, str2) {
    let result = '';
    let borrow = 0;
    let i = str1.length - 1;
    let j = str2.length - 1;

    while (i >= 0) {
        const digit1 = parseInt(str1[i]);
        const digit2 = j >= 0 ? parseInt(str2[j]) : 0;
        const diff = digit1 - digit2 - borrow;
        if (diff < 0) {
            result = (diff + 10) + result;
            borrow = 1;
        } else {
            result = diff + result;
            borrow = 0;
        }
        i--;
        j--;
    }

    return result.replace(/^0+/, '');
}

function divideStrings(str1, str2) {
    let quotient = '';
    let dividend = parseInt(str1);
    const divisor = parseInt(str2);

    for (let i = 0; i < str1.length; i++) {
        const digit = Math.floor(dividend / divisor);
        quotient += digit;
        dividend = (dividend % divisor) * 10 + parseInt(str1[i + 1] || '0');
    }

    return quotient.replace(/^0+/, '') || '0';
}

function multiplyStrings(str1, str2) {
    let result = '0';

    for (let i = str2.length - 1; i >= 0; i--) {
        let tempResult = '';
        let carry = 0;

        for (let j = str1.length - 1; j >= 0; j--) {
            const product = parseInt(str1[j]) * parseInt(str2[i]) + carry;
            tempResult = (product % 10) + tempResult;
            carry = Math.floor(product / 10);
        }

        if (carry > 0) {
            tempResult = carry + tempResult;
        }

        tempResult += '0'.repeat(str2.length - 1 - i);
        result = addStrings(result, tempResult);
    }

    return result;
}

String.prototype.plus = function(str) {
    return addStrings(this, str);
};

String.prototype.minus = function(str) {
    return subtractStrings(this, str);
};

String.prototype.divide = function(str) {
    return divideStrings(this, str);
};

String.prototype.multiply = function(str) {
    return multiplyStrings(this, str);
};

