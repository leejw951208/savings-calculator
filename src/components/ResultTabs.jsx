import { styled } from "styled-components";
import ResultTab from "./ResultTab";

const Tabs = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: space-between;
`;

export default function ResultTabs({ tabActive, onClick }) {
  return (
    <Tabs>
      <ResultTab
        key="tab1"
        title="일반 과세 (15.4%)"
        isActive={tabActive === "tab1"}
        onClick={() => onClick("tab1")}
      />
      <ResultTab
        key="tab2"
        title="세금 과세 (9.5%)"
        isActive={tabActive === "tab2"}
        onClick={() => onClick("tab2")}
      />
      <ResultTab
        key="tab3"
        title="비과세 (0%)"
        isActive={tabActive === "tab3"}
        onClick={() => onClick("tab3")}
      />
    </Tabs>
  );
}
