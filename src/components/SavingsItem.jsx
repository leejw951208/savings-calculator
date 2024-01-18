import { styled } from "styled-components";
import Input from "./Input";
import { useRef } from "react";

const StyledArticle = styled.article`
  display: flex;
  height: 50px;
  justify-content: flex-end;
  flex: 1;
`;

export default function SavingsItem({ placeholder, onChange, value }) {
  return (
    <StyledArticle>
      <Input placeholder={placeholder} onChange={onChange} value={value} />
    </StyledArticle>
  );
}
