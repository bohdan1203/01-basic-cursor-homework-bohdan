const rollsRoycePhantomPrice = 15.678;
const nokia3310Price = 123.965;
const youTubePremiumPrice = 90.2345;
console.log(rollsRoycePhantomPrice);
console.log(nokia3310Price); 
console.log(youTubePremiumPrice);

// Максимальне та мінімальне числа
let highestPrice = Math.max(rollsRoycePhantomPrice, nokia3310Price, youTubePremiumPrice);
let lowestPrice = Math.min(rollsRoycePhantomPrice, nokia3310Price, youTubePremiumPrice);
console.log(highestPrice);
console.log(lowestPrice);

// Вартість всіх товарів
let totalAmountPayable = rollsRoycePhantomPrice + nokia3310Price + youTubePremiumPrice;
console.log(totalAmountPayable);

// Вартість всіх товарів без копійок
let totalWithoutChangeCoins = Math.trunc(rollsRoycePhantomPrice) + Math.trunc(nokia3310Price) + Math.trunc(youTubePremiumPrice);
console.log(totalWithoutChangeCoins);

// Вартість всіх товарів, округлена до сотень
console.log(Math.round(totalAmountPayable / 100) * 100);

// Сума парна, чи не парна?
let totalRoundedToLess = Math.floor(totalAmountPayable);
let totalRemainder = totalRoundedToLess % 2;
let isEvenNumber = totalRemainder === 0;
console.log(isEvenNumber);

// Решта при оплаті (500 гривень)
let clientsPayment = 500;
console.log(clientsPayment - totalAmountPayable);

// Cереднє значення цін, округлене до другого знаку після коми
let averageAmount = totalAmountPayable / 3;
console.log(Math.round(averageAmount * 100) / 100);


///////////// ЗАДАЧА /////////////

// Вартість без знижки
let totalWithoutDiscount = (Math.round(totalAmountPayable * 100) / 100);
console.log(totalWithoutDiscount);

// Собівартість
let costPrice = totalWithoutDiscount / 2;
console.log(costPrice);

// Випадкова знижка
let discount = Math.round(Math.random() * 100);
console.log(discount);

// Сума знижки
let discountAmount = Math.round((totalWithoutDiscount / 100 * discount) * 100) / 100;
console.log(discountAmount);

// Сума до сплати
let amountToBePaid = Math.round((totalWithoutDiscount - discountAmount) * 100) / 100;
console.log(amountToBePaid);

// Чистий прибуток
let netProfit = Math.round((costPrice - discountAmount) * 100) / 100;
console.log(netProfit);


///////////// ADVANCED /////////////

console.log(`++++++++++++++++ ADVANCED ++++++++++++++++`);

console.log(
    `The price of Rolls-Royce Phantom is ${rollsRoycePhantomPrice} UAH 
    \nThe price of Nokia 3310 is ${nokia3310Price} UAH 
    \nThe price of YouTube Premium is ${youTubePremiumPrice} UAH
    \nThe highest price of them is ${highestPrice} UAH
    \nThe lowest price of them is ${lowestPrice} UAH
    \nTotal: ${totalAmountPayable} UAH
    \nTotal: ${totalWithoutChangeCoins} UAH
    \nTotal (rounded to hundreds): ${(Math.round(totalAmountPayable / 100) * 100)} UAH
    \nIs ${totalRoundedToLess} an even number? ====> ${isEvenNumber}
    \nHere is your charge: ${(clientsPayment - totalAmountPayable)} UAH
    \nThe average amount, rounded to 2 decimal places is ${(Math.round(averageAmount * 100) / 100)} UAH
    \nThe amount is ${totalWithoutDiscount} UAH
    \nThe cost price of all goods is ${costPrice} UAH
    \nThe discount is ${discount}%
    \nThe discount amount is ${discountAmount} UAH
    \nThe amount to be paid is ${amountToBePaid} UAH
    \nThe net profit is ${netProfit} UAH`
);