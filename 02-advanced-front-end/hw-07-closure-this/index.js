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

function getMyTaxes(salary) {
    
    return this.tax * salary;
};
console.log(getMyTaxes.call(ukraine, 2000));
console.log(``);


////////////////////////////////////////////////////////////////////
console.log(`Функція 2. Середній податок для IT-спеціалістів:`);

function getMiddleTaxes() {

    return this.tax * this.middleSalary;
};
console.log(getMiddleTaxes.call(latvia));
console.log(``);


////////////////////////////////////////////////////////////////////
console.log(`Функція 3. Всього податків:`);

function getTotalTaxes() {
    
    country = this;

    return getMiddleTaxes.call(country) * this.vacancies;
};
console.log(getTotalTaxes.call(lithuania));
console.log(``);


////////////////////////////////////////////////////////////////////
console.log(`Функція 4`);

function getMySalary(country) {

    function showSalaryTaxesProfit() {

        country.getTax = function() {
            return this.tax;
        };

        let countryTax = country.getTax;
        tax = countryTax.call(country);

        salary = Math.round(Math.random() * (2000 - 1500) + 1500);
        taxes = Math.round(tax * salary);
        profit = salary - taxes;

        const mySalary = {
            salary: salary,
            taxes: taxes,
            profit: profit,
        };

        return console.log(mySalary);
    };
    showSalaryTaxesProfit();
    setInterval(showSalaryTaxesProfit, 10000);
    
};
getMySalary(ukraine);