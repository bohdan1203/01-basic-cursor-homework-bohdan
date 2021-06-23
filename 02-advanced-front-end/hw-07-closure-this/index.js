const ukraine = {
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476,
};

const latvia = {
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921,
};

const lithuania = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114,
};


////////////////////////////////////////////////////////////////////
console.log(`Функція 1. Сума податку:`);

function getMyTaxes(country, salary) {

    country.getTax = function() {
        return this.tax;
    };

    let countryTax = country.getTax;
    taxAmount = salary * countryTax.call(country);

    return taxAmount;
};
console.log(getMyTaxes(ukraine, 2000));
console.log(``);


////////////////////////////////////////////////////////////////////
console.log(`Функція 2. Середній податок для IT-спеціалістів:`);

function getMiddleTaxes(country) {

    country.getTax = function() {
        return this.tax;
    };

    country.getMiddleSalary = function() {
        return this.middleSalary;
    };

    let countryTax = country.getTax;
    let countryMiddleSalary = country.getMiddleSalary;

    middleTaxes = countryTax.call(country) * countryMiddleSalary.call(country);

    return middleTaxes;
};
console.log(getMiddleTaxes(latvia));
console.log(``);


////////////////////////////////////////////////////////////////////
console.log(`Функція 3. Всього податків:`);

function getTotalTaxes(country) {
    country.getVacancies = function() {
        return this.vacancies;
    };

    let countryVacancies = country.getVacancies;

    totalTaxes = getMiddleTaxes(country) * countryVacancies.call(country);

    return totalTaxes;
};
console.log(getTotalTaxes(lithuania));
console.log(``);


////////////////////////////////////////////////////////////////////
console.log(`Функція 4`);

function getMySalary(country) {

    country.getTax = function() {
        return this.tax;
    };

    let countryTax = country.getTax;
    tax = countryTax.call(country);

    salary = Math.round(Math.random() * (2000 - 1500) + 1500);
    taxes = Math.round(tax * salary)
    profit = salary - taxAmount;

    const mySalary = {
        salary: salary,
        taxes: taxes,
        profit: profit,
    };

    return  console.log(mySalary);
};
getMySalary(ukraine);
setInterval(getMySalary, 10000, ukraine);