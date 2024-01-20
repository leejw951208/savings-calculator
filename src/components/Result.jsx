import { styled } from "styled-components";

const StyledResult = styled.article`
  padding: 20px 30px;
  background-color: #eeeeee;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function Result({ children }) {
  return <StyledResult>{children}</StyledResult>;
}
