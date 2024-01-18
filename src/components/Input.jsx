import { useRef, useState } from "react";
import { styled } from "styled-components";
import useDebounce from "../hooks/useDebounce";

const StyledInput = styled.input`
  border: none;
  flex: 1;
  border-radius: 2rem;
  padding-left: 20px;
  font-size: 17px;
  &::placeholder {
    color: #999696;
    text-align: right;
    font-size: 17px;
    margin-right: 20px;
  }
`;

export default function Input({ placeholder, onChange, value }) {
  return (
    <StyledInput value={value} onChange={onChange} placeholder={placeholder} />
  );
}
