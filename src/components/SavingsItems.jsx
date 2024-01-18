import { styled } from "styled-components";
import SavingsItem from "./SavingsItem";

const Items = styled.section`
  background-color: #eeeeee;
  border-radius: 0.5rem;
  padding: 15px;
`;

export default function SavingsItems() {
  return (
    <Items>
      <SavingsItem placeholder="금액" />
    </Items>
  );
}
