


//My solution
  function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const workingDaysInMonth = 22;
    const workingHoursPerDay = 8;

    const numMonths = Math.floor(numDays / workingDaysInMonth);
    const numDaysWithoutDiscount = numDays % workingDaysInMonth;
    const numDaysWithDiscount = numDays - numDaysWithoutDiscount;

    const moneyOfDiscountMonths = workingHoursPerDay * ratePerHour * numDaysWithDiscount;
    const discountMoney = moneyOfDiscountMonths * discount;

    const daysMoneyWithoutDiscount = numDaysWithoutDiscount * workingHoursPerDay * ratePerHour;
    
    const moneyWithDiscount = Math.ceil(moneyOfDiscountMonths - discountMoney);

    return moneyWithDiscount + daysMoneyWithoutDiscount;
  }



  //others 
  function priceWithMonthlyDiscount2(ratePerHour, numDays, discount) {
    const fullMonths = Math.floor(numDays / 22);
    const remainingDays = numDays % 22;
    const fullMonthPrice = fullMonths * 22 * dayRate(ratePerHour);
    return Math.ceil(fullMonthPrice - discount * fullMonthPrice + remainingDays * dayRate(ratePerHour))
  }

