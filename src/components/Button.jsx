import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.$name === "계산하기" ? "#a2d0fb" : "#f18989"};
  flex-grow: ${(props) => props.$flexGrow};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: ${(props) =>
      props.$name === "계산하기" ? "#7db2e3" : "#dd7070"};
  }
  font-weight: bold;
  &:disabled {
    background-color: ${(props) =>
      props.$name === "계산하기" ? "#a2d0fb" : "#f18989"};

    cursor: default;
  }
`;

export default function Button({ name, flexGrow, onClick, isActive }) {
  return (
    <StyledButton
      $name={name}
      $flexGrow={flexGrow}
      onClick={onClick}
      disabled={!isActive}
    >
      {name}
    </StyledButton>
  );
}
