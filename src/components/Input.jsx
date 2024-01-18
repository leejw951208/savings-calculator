import { styled } from "styled-components";

const StyledInput = styled.input`
  border: none;
  flex: 0.9;
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

export default function Input({ placeholder }) {
  return <StyledInput placeholder={placeholder} />;
}
