import { styled } from "styled-components";

const Tab = styled.li`
  padding: 5px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#eeeeee" : "white")};
  flex: 1;
  text-align: center;
`;

const Title = styled.p`
  font-weight: 600;
`;

export default function ResultTab({ title, isActive, onClick }) {
  return (
    <Tab $active={isActive} onClick={onClick}>
      <Title>{title}</Title>
    </Tab>
  );
}
