function isPrime(positiveInteger) {
    if (positiveInteger == 1) {
        return false;
    }
    for (let i = 2; i < Math.floor(Math.sqrt(positiveInteger)) + 1; i++) {
        if (positiveInteger % i == 0) {
            return false;
        }
    }
    return true;
}

function factorize(positiveInteger) {
    let factors = [];
    for (let i = 2; i < Math.floor(Math.sqrt(positiveInteger)) + 1; i++) {
        while (positiveInteger % i == 0) {
            factors.push(i);
            positiveInteger /= i;
        }
    }
    if (positiveInteger != 1) {
        factors.push(positiveInteger);
    }
    return factors;
}

function isPositiveInteger(num) {
    return (Number.isInteger(num) && num > 0);
}

function isLessThan(num, upperLimit) {
    return (num < upperLimit);
}

function showResult(inputString) {
    let number = Number(inputString);
    let result = "";

    if (!isPositiveInteger(number)) {
        result = `「${inputString}」is not a positive integer. Please enter a positive integer less than 10^12.`;
    } else if (!isLessThan(number, 10 ** 12)) {
        result = `Please enter a positive integer less than 10^12.`;
    } else if (isPrime(number)) {
        result = `${number} is a prime number.`;
    } else if (number == 1) {
        result = `${number} is not a prime number.`;
    } else {
        result = `${number} is not a prime number. When decomposed into prime factors, ${factorize(number).join(" × ")} is.`;
    }
    document.getElementById('result').innerHTML = result;
}
