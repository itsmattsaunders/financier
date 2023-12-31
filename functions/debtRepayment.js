/**
 * Calculates the time required to repay a debt based on periodic payments and interest rate.
 * Returns the duration in years, months, and days.
 *
 * @param {number} principal - The initial amount of debt.
 * @param {number} payment - The amount paid per period.
 * @param {number} interestRate - The interest rate per period (as a decimal).
 * @param {boolean} isAnnual - Indicates whether the interest rate is annual.
 * @return {string} The time required to pay off the debt in years, months, and days.
 */

/* 
    Example usage:
    const principal = 53348.96; // $50,000 debt
    const monthlyPayment = 460; // $1,000 paid monthly
    const annualInterestRate = 0.029; // 5% annual interest rate
    const isAnnual = true; // the interest rate is annual

    const repaymentDuration = debtRepayment(principal, monthlyPayment, annualInterestRate, isAnnual);
    console.log(repaymentDuration)
*/

const debtRepayment = (principal, payment, interestRate, isAnnual) => {
    if (isAnnual) {
      interestRate = interestRate / 12; // Convert annual rate to monthly rate
    }
  
    let periods = 0;
    let currentBalance = principal;
    let totalInterestPaid = 0;
  
    if (payment <= currentBalance * interestRate) {
      return "Debt cannot be paid off with the current payment and interest rate.";
    }
  
    while (currentBalance > 0) {
      let interestForThePeriod = currentBalance * interestRate;
      totalInterestPaid += interestForThePeriod;
      let principalPayment = payment - interestForThePeriod;
      
      if (principalPayment > currentBalance) {
        principalPayment = currentBalance; // If the payment is more than the balance, just pay the remaining balance
      }
      
      currentBalance -= principalPayment;
      periods++;
      
      if(periods > 600) { // Safety check to prevent an infinite loop in case of incorrect calculation
        return "Error in calculation. Too many periods.";
      }
    }
  
    // Calculate total duration in years, months, and days
    let years = Math.floor(periods / 12);
    let months = periods % 12;
    let days = Math.round((currentBalance / payment) * 30); // Estimate days based on the remaining balance
  
    // return `${years} years, ${months} months, and ${days} days`;
    return { years, months, days }
};

export { debtRepayment };