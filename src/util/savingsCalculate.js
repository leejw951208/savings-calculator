const savingsCalculate = (money, period, interest) => {
  const contractMonths = [];

  // 계약기간을 12개월씩 뺀다, 33개월 => [12, 12, 9] / 25개월 => [12, 12 ,1]
  let periodTemp = period;
  for (let i = 0; i < Math.ceil(period / 12); i++) {
    contractMonths.push(periodTemp > 12 ? 12 : periodTemp);
    if (periodTemp < 12) break;
    periodTemp = periodTemp - 12;
  }

  // 개월수 만큼 월별 마지막 일수 구함
  const contractDates = [];
  contractMonths.forEach((year) => {
    Array.prototype.push.apply(
      contractDates,
      [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].slice(0, year)
    );
  });

  // 계약일수 총합
  const contractDateSummary = contractDates.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  // // 계산을 위해 이자를 100으로 나눔, 3.5 => 0.035
  const interestPercent = interest / 100;

  // 예치 일수 합, 월별 일수만큼 차감되기 때문에 let으로 선언
  let depositDateSummary = contractDateSummary;

  let interestMoney = 0;
  contractDates.forEach((contractDate) => {
    interestMoney +=
      (money * interestPercent * depositDateSummary) / contractDateSummary;
    depositDateSummary -= contractDate;
  });

  // 천 단위까지 0으로 치환하기 위해서 선언, 은행 적금 계산기도 이 방식으로 계산함
  const finalInterestMoney = Math.round(interestMoney / 10000) * 10000;

  return {
    normal:
      Number(money) + finalInterestMoney - (finalInterestMoney / 100) * 15.4,
    advantage:
      Number(money) + finalInterestMoney - (finalInterestMoney / 100) * 9.5,
    exemption: Number(money) + finalInterestMoney,
  };
};

export default savingsCalculate;
