import { styled } from "styled-components";
import Input from "./Input";

const StyledArticle = styled.article`
  display: flex;
  height: 50px;
  justify-content: flex-end;
`;

export default function SavingsItem({ placeholder }) {
  return (
    <StyledArticle>
      <Input placeholder={placeholder} />
    </StyledArticle>
  );
}
