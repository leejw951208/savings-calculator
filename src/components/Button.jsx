import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.name === "계산하기" ? "blue" : "tomato"};
  flex-grow: ${(props) => props.flexGrow};
  border-radius: 10px;
`;

export default function Button({ name, flexGrow }) {
  return (
    <StyledButton name={name} flexGrow={flexGrow}>
      {name}
    </StyledButton>
  );
}
