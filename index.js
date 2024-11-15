// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

// Before Open-Closed Principle
class ManageDeveloperSalaries {
  constructor() {
    this.salaryRates = [
      { id: 1, seniority: 'intermediate', rate: 200 },
      { id: 2, seniority: 'senior', rate: 300 },
    ];
  }

  calculateSalaries(devId, hoursWorked) {
    let salaryObject = this.salaryRates.find((o) => o.id === devId);
    return hoursWorked * salaryObject.rate;
  }

  addSalaryRate(id, seniority, rate) {
    this.salaryRates.push({ id: id, seniority: seniority, rate: rate });
  }
}

const salary = new ManageDeveloperSalaries();
// Add junior developer salary rate
salary.addSalaryRate(3, 'junior', 100);
console.log('Salary : ', salary.calculateSalaries(3, 160));




// Good Example: Following Open-Closed Principle
class ManageTaxRates {
  constructor() {
    this.taxRates = [
      { id: 1, category: 'electronics', rate: 0.15 },
      { id: 2, category: 'clothing', rate: 0.05 },
    ];
  }

  calculateTax(categoryId, price) {
    let taxObject = this.taxRates.find((o) => o.id === categoryId);
    return price * taxObject.rate;
  }

  addTaxRate(id, category, rate) {
    this.taxRates.push({ id: id, category: category, rate: rate });
  }
}

const tax = new ManageTaxRates();
// Add food category tax rate
tax.addTaxRate(3, 'food', 0.08);
console.log('Tax : ', tax.calculateTax(3, 100));
