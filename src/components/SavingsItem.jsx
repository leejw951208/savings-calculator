import { styled } from "styled-components";
import Input from "./Input";

const StyledArticle = styled.article`
  display: flex;
  height: 50px;
  justify-content: flex-end;
  flex: 1;
`;

const SavingsItem = ({ placeholder, value, onChange }) => {
  return (
    <StyledArticle>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </StyledArticle>
  );
};

export default SavingsItem;
