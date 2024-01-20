import { forwardRef, useRef, useState } from "react";
import { styled } from "styled-components";

const StyledInput = styled.input`
  border: none;
  border-radius: 2rem;
  width: 220px;
  padding: 0 15px;
  font-size: 17px;
  height: 40px;
  &::placeholder {
    color: #999696;
    text-align: right;
    font-size: 17px;
  }
  text-align: right;
`;

const SavingsItem = ({ placeholder, value, onChange }) => {
  return (
    <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default SavingsItem;
