
let doCalcForAss1 = (a, b, n) => {
    let sum = 0;

    for (let i = 0; i % a == 0 || i % b == 0; i++) {
        if (i % a == 0 || i % b == 0) {
            sum += i;
        }
    }

    return sum;
}