import { styled } from "styled-components";
import ResultTabs from "./ResultTabs";

const StyledResult = styled.section`
  border: 1px solid #eeeeee;
  border-radius: 0.5rem;
  padding: 15px;
  margin: 20px;
`;

export default function Result() {
  return (
    <StyledResult>
      <ResultTabs />
    </StyledResult>
  );
}
