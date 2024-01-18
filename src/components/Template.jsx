import { styled } from "styled-components";

const StyledTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border: 1px solid white;
  border-radius: 1.5rem;
  width: 768px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.23);
`;

export default function Template({ children }) {
  return <StyledTemplate>{children}</StyledTemplate>;
}
