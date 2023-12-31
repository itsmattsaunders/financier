/**
 * Calculates the future value of an investment based on compound interest.
 *
 * @param {number} principal - The initial amount of money invested or loaned.
 * @param {number} interestPerAnnum - The annual nominal interest rate (as a decimal).
 * @param {number} duration - The number of years the money is invested or borrowed for.
 * @param {number} timesCompounded - The number of times compounded per year.
 * @return {number} The amount of money accumulated after the specified duration, including interest.
 */

/* 
    Example Usage:
    const principal = 1000; // $1,000 initial investment
    const interestPerAnnum = 0.05; // 5% annual interest rate
    const duration = 10; // 10 years
    const timesCompounded = 1 // Assuming interest is compounded once per year
    console.log(`Future value: $${compoundInterestPerAnnum(principal, interestPerAnnum, duration, timesCompounded)}`);
*/
  
const compoundInterestPerAnnum = (principal, interestPerAnnum, duration, timesCompounded) => {
    // Compound interest formula A = P (1 + r/n)^(nt)
    const timesCompoundedPerYear = timesCompounded;
  
    // Calculate the amount after interest
    const amount = principal * Math.pow((1 + interestPerAnnum / timesCompoundedPerYear), timesCompoundedPerYear * duration);
  
    // Return the amount, fixed to 2 decimal places for currency formatting
    return parseFloat(amount.toFixed(2));
};

export { compoundInterestPerAnnum };