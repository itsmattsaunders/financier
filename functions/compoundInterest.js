/**
 * Calculates the future value of an investment based on compound interest with optional annual or monthly interest rates.
 *
 * @param {number} principal - The initial amount of money invested or loaned.
 * @param {Object} options - An object containing the interest rates and other options.
 * @param {number} [options.interestPerAnnum] - The annual interest rate (as a decimal).
 * @param {number} [options.interestPerMonth] - The monthly interest rate (as a decimal). Overrides annual rate if both are provided.
 * @param {number} [options.durationMonths] - The duration of the investment in months.
 * @param {number} [options.timesCompoundedPerYear=12] - The number of times the interest is compounded per year. Defaults to 12.
 * @return {number} The amount of money accumulated after the specified duration, including interest.
 */

/*
  Example usage:
  const investmentDetails = {
    principal: 1000, // $1,000 initial investment
    interestPerAnnum: 0.05, // 5% annual interest rate
    durationMonths: 120, // Invested for 120 months (10 years)
  };
  console.log(`Future value: $${compoundInterest(investmentDetails)}`);
*/

const compoundInterest = ({ principal, durationMonths, timesCompoundedPerYear = 12, interestPerAnnum, interestPerMonth }) => {
    // If an annual rate is provided and a monthly rate is not, convert the annual rate to a monthly rate.
    if (interestPerAnnum && !interestPerMonth) {
      interestPerMonth = interestPerAnnum / 12;
    }
  
    // Calculate the effective interest rate per compounding period
    const effectiveInterestRate = interestPerMonth / (timesCompoundedPerYear / 12);
    // Calculate the total number of compounding periods
    const totalCompoundingPeriods = durationMonths * (timesCompoundedPerYear / 12);
  
    // Calculate the amount after interest
    const amount = principal * Math.pow((1 + effectiveInterestRate), totalCompoundingPeriods);
  
    // Return the amount, fixed to 2 decimal places for currency formatting
    return parseFloat(amount.toFixed(2));
  };

  export { compoundInterest };