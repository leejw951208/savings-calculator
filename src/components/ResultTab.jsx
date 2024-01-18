import { styled } from "styled-components";

const Tab = styled.li`
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#eeeeee" : "white")};
`;

export default function ResultTab({ title, isActive, onClick }) {
  return (
    <Tab $active={isActive} onClick={onClick}>
      {title}
    </Tab>
  );
}
