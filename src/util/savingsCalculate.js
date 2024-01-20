const savingsCalculate = (money, period, interest) => {
  // 계산을 위해 이자를 100으로 나눔, 3.5 => 0.035
  const interestPercent = interest / 100;

  let depositPeriod = period;

  let interestMoney = 0;
  for (let i = 0; i < period; i++) {
    interestMoney += money * (interestPercent * (depositPeriod / period));
    depositPeriod -= 1;
    if (depositPeriod <= 0) break;
  }

  // 천 단위까지 0으로 치환하기 위해서 선언, 은행 적금 계산기도 이 방식으로 계산함
  const finalInterestMoney = Math.round(interestMoney);

  return {
    normal: finalInterestMoney - (finalInterestMoney / 100) * 15.4,
    advantage: finalInterestMoney - (finalInterestMoney / 100) * 9.5,
    exemption: finalInterestMoney,
    total_normal:
      Number(money) * period +
      finalInterestMoney -
      (finalInterestMoney / 100) * 15.4,
    total_advantage:
      Number(money) * period +
      finalInterestMoney -
      (finalInterestMoney / 100) * 9.5,
    total_exemption: Number(money) * period + finalInterestMoney,
  };
};

export default savingsCalculate;
