import { styled } from "styled-components";
import SavingsItem from "./SavingsItem";
import { useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import Button from "./Button";
import Buttons from "./Buttons";
import savingsCalculate from "../savingsCalculate";

const Items = styled.section`
  background-color: #a0b6c1;
  border-radius: 0.5rem;
  padding: 15px;
  display: flex;
  gap: 15px;
  justify-content: space-between;
`;

const inputValidate = (title, value) => {
  if (title === "interest") {
    return value
      .replace(/[^0-9.]/g, "")
      .split(".")
      .slice(0, 2)
      .join(".");
  } else {
    return value.replace(/[^0-9]/g, "");
  }
};

export default function SavingsItems() {
  const [inputValue, setInputValue] = useState({
    money: "",
    period: "",
    interest: "",
  });

  const handleChange = (inputTitle, e) => {
    setInputValue((prev) => {
      return {
        ...prev,
        [inputTitle]: inputValidate(inputTitle, e.target.value),
      };
    });
  };

  const handleCalculate = () => {
    savingsCalculate(inputValue.money, inputValue.period, inputValue.interest);
  };

  const handleReset = () => {
    setInputValue({
      money: "",
      period: "",
      interest: "",
    });
  };

  return (
    <>
      <Items>
        <SavingsItem
          key="금액"
          placeholder="금액(원)"
          value={inputValue.money}
          onChange={(e) => handleChange("money", e)}
        />
        <SavingsItem
          key="기간"
          placeholder="기간(개월)"
          value={inputValue.period}
          onChange={(e) => handleChange("period", e)}
        />
        <SavingsItem
          key="이율"
          placeholder="이율(%)"
          value={inputValue.interest}
          onChange={(e) => handleChange("interest", e)}
        />
      </Items>
      <Buttons>
        <Button name="초기화" flexGrow="1" onClick={handleReset} />
        <Button name="계산하기" flexGrow="2" onClick={handleCalculate} />
      </Buttons>
    </>
  );
}
