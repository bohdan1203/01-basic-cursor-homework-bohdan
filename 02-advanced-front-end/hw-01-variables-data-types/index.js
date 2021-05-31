let rollsRoycePhantom = 15.678;
let nokia3310 = 123.965;
let youTubePremium = 90.2345;
console.log (`The price of Rolls-Royce Phantom is ${rollsRoycePhantom} UAH \nThe price of Nokia 3310 is ${nokia3310} UAH \nThe price of YouTube Premium is ${youTubePremium} UAH`);


// Максимальне та мінімальне числа
console.log (`The highest price of them is ` + Math.max(rollsRoycePhantom, nokia3310, youTubePremium) + ` UAH`);
console.log (`The lowest price of them is ` + Math.min(rollsRoycePhantom, nokia3310, youTubePremium) + ` UAH`);

// Вартість всіх товарів
let totalAmountPayable = rollsRoycePhantom + nokia3310 + youTubePremium;
console.log (`Total: ` + totalAmountPayable + ` UAH`);


// Вартість всіх товарів без копійок
console.log (`Total: ` + (Math.trunc(rollsRoycePhantom) + Math.trunc(nokia3310) + Math.trunc(youTubePremium)) + ` UAH`);

// Вартість всіх товарів, округлена до сотень
console.log (`Total (rounded to hundreds): ` + (Math.round(totalAmountPayable / 100) * 100) + ` UAH`);

// Сума парна, чи не парна?
let totalRoundedToLess = Math.floor(totalAmountPayable);
let totalRemainder = totalRoundedToLess % 2;
let oddOrEven = totalRemainder === 0;
console.log (`Is ${totalRoundedToLess} an even number? ====> ` + oddOrEven);


// Решта при оплаті (500 гривень)
console.log(`Here is your charge: ` + (500 - totalAmountPayable) + ` UAH`);

// Cереднє значення цін, округлене до другого знаку після коми
let averageAmount = totalAmountPayable / 3;
console.log(`The average amount, rounded to 2 decimal places is ` + (Math.round(averageAmount * 100) / 100) + ` UAH`);


///////////// ЗАДАЧА /////////////

// Вартість без знижки
let totalWihoutDiscount = (Math.round(totalAmountPayable * 100) / 100);
console.log(`The amount is ${totalWihoutDiscount} UAH` );

// Собівартість
let costPrice = totalWihoutDiscount / 2;
console.log(`The cost price of all goods is ` + costPrice + ` UAH`);

// Випадкова знижка
let discount = Math.round(Math.random() * 100);
console.log(`The discount is ${discount}%`);

// Сума знижки
let discountAmount = Math.round((totalWihoutDiscount / 100 * discount) * 100) / 100;
console.log(`The discount amount is ${discountAmount} UAH`);

// Сума до сплати
let amountToBePaid = Math.round((totalWihoutDiscount - discountAmount) * 100) / 100;
console.log(`The amount to be paid is ` + amountToBePaid + ` UAH`);

// Чистий прибуток
let netProfit = Math.round((costPrice - discountAmount) * 100) / 100;
console.log(`The net profit is ` + netProfit + ` UAH`);













