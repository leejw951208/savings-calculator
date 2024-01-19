import { forwardRef, useRef, useState } from "react";
import { styled } from "styled-components";

const StyledInput = styled.input`
  border: none;
  flex: 1;
  border-radius: 2rem;
  padding: 20px;
  font-size: 17px;
  &::placeholder {
    color: #999696;
    text-align: right;
    font-size: 17px;
  }
`;

const Input = ({ placeholder, value, onChange }) => {
  return (
    <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default Input;
