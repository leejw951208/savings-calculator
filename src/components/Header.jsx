import { styled } from "styled-components";

const StyledHedaer = styled.header`
  text-align: center;
`;

export default function Header() {
  return (
    <StyledHedaer>
      <h1>적금계산기</h1>
    </StyledHedaer>
  );
}
