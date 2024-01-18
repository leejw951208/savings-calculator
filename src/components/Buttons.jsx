import { styled } from "styled-components";

const StyledButtons = styled.section`
  display: flex;
  gap: 20px;
  height: 40px;
`;

export default function Buttons({ children }) {
  return <StyledButtons>{children}</StyledButtons>;
}
