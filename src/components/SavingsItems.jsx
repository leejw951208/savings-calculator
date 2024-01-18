import { styled } from "styled-components";
import SavingsItem from "./SavingsItem";
import { useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import Button from "./Button";
import Buttons from "./Buttons";

const Items = styled.section`
  background-color: #eeeeee;
  border-radius: 0.5rem;
  padding: 15px;
  display: flex;
  gap: 15px;
  justify-content: space-between;
`;

export default function SavingsItems() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  // useDebounce(
  //   () => {
  //     setFieldIndex((prev) => prev + 1);
  //     setFields((prev) => {
  //       const addField = FIELDS[fieldIndex];
  //       FIELDS.slice(fieldIndex);
  //       return [...prev, addField];
  //     });
  //   },
  //   inputValue,
  //   300
  // );

  return (
    <>
      <Items onChange={handleChange} value={inputValue}>
        <SavingsItem key="금액" placeholder="금액(원)" />
        <SavingsItem key="기간" placeholder="기간(개월)" />
        <SavingsItem key="이율" placeholder="이율(%)" />
      </Items>
      <Buttons>
        <Button name="초기화" flexGrow="1" />
        <Button name="계산하기" flexGrow="2" />
      </Buttons>
    </>
  );
}
