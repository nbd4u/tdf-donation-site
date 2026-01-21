function calculateCommission(amount) {
    let commission = 0;

    if (amount <= 9) return 0;

    if (amount <= 99) {
        return Math.floor(amount / 11);
    }

    if (amount <= 1111) {
        commission = 9 + (amount - 99) * 0.001;
    } else if (amount <= 11111) {
        commission = 9 + (1111 - 99) * 0.001 + (amount - 1111) * 0.0001;
    } else {
        commission = amount * 0.01;
    }

    return Math.round(commission * 100) / 100;
}
