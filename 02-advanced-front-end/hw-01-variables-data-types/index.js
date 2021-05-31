let rollsRoycePhantom = 15.678;
let nokia3310 = 123.965;
let youTubePremium = 90.2345;
console.log (rollsRoycePhantom);
console.log(nokia3310); 
console.log(youTubePremium);

// Максимальне та мінімальне числа
console.log (Math.max(rollsRoycePhantom, nokia3310, youTubePremium));
console.log (Math.min(rollsRoycePhantom, nokia3310, youTubePremium));

// Вартість всіх товарів
let totalAmountPayable = rollsRoycePhantom + nokia3310 + youTubePremium;
console.log (totalAmountPayable);


// Вартість всіх товарів без копійок
console.log (Math.trunc(rollsRoycePhantom) + Math.trunc(nokia3310) + Math.trunc(youTubePremium));

// Вартість всіх товарів, округлена до сотень
console.log (Math.round(totalAmountPayable / 100) * 100);

// Сума парна, чи не парна?
let totalRoundedToLess = Math.floor(totalAmountPayable);
let totalRemainder = totalRoundedToLess % 2;
let oddOrEven = totalRemainder === 0;
console.log (oddOrEven);


// Решта при оплаті (500 гривень)
console.log(500 - totalAmountPayable);

// Cереднє значення цін, округлене до другого знаку після коми
let averageAmount = totalAmountPayable / 3;
console.log(Math.round(averageAmount * 100) / 100);


///////////// ЗАДАЧА /////////////

// Вартість без знижки
let totalWihoutDiscount = (Math.round(totalAmountPayable * 100) / 100);
console.log(totalWihoutDiscount);

// Собівартість
let costPrice = totalWihoutDiscount / 2;
console.log(costPrice);

// Випадкова знижка
let discount = Math.round(Math.random() * 100);
console.log(discount);

// Сума знижки
let discountAmount = Math.round((totalWihoutDiscount / 100 * discount) * 100) / 100;
console.log(discountAmount);

// Сума до сплати
let amountToBePaid = Math.round((totalWihoutDiscount - discountAmount) * 100) / 100;
console.log(amountToBePaid);

// Чистий прибуток
let netProfit = Math.round((costPrice - discountAmount) * 100) / 100;
console.log(netProfit);



///////////// ADVANCED /////////////

console.log(`++++++++++++++++ ADVANCED ++++++++++++++++`);

console.log(
    `The price of Rolls-Royce Phantom is ${rollsRoycePhantom} UAH 
    \nThe price of Nokia 3310 is ${nokia3310} UAH 
    \nThe price of YouTube Premium is ${youTubePremium} UAH
    \nThe highest price of them is ${Math.max(rollsRoycePhantom, nokia3310, youTubePremium)} UAH
    \nThe lowest price of them is ${Math.min(rollsRoycePhantom, nokia3310, youTubePremium)} UAH
    \nTotal: ${totalAmountPayable} UAH
    \nTotal: ${(Math.trunc(rollsRoycePhantom) + Math.trunc(nokia3310) + Math.trunc(youTubePremium))} UAH
    \nTotal (rounded to hundreds): ${(Math.round(totalAmountPayable / 100) * 100)} UAH
    \nIs ${totalRoundedToLess} an even number? ====> ${oddOrEven}
    \nHere is your charge: ${(500 - totalAmountPayable)} UAH
    \nThe average amount, rounded to 2 decimal places is ${(Math.round(averageAmount * 100) / 100)} UAH
    \nThe amount is ${totalWihoutDiscount} UAH
    \nThe cost price of all goods is ${costPrice} UAH
    \nThe discount is ${discount}%
    \nThe discount amount is ${discountAmount} UAH
    \nThe amount to be paid is ${amountToBePaid} UAH
    \nThe net profit is ${netProfit} UAH`
);