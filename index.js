const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce((a, b) => {
    return a + b;
}, 0);
console.log(totalBatteries);