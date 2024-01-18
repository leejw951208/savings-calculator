import { styled } from "styled-components";
import ResultTab from "./ResultTab";
import { useState } from "react";

const Tabs = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

export default function ResultTabs() {
  const [tabActive, setTabActive] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
  });

  const handleTabClick = (tabTitle) => {};

  return (
    <Tabs>
      <ResultTab
        key="tab1"
        title="일반 과세 (15.4%)"
        isActive={true}
        onClick={() => handleTabClick("tab1")}
      />
      <ResultTab
        key="tab2"
        title="세금 과세 (9.5%)"
        isActive={false}
        onClick={() => handleTabClick("tab2")}
      />
      <ResultTab
        key="tab3"
        title="비과세 (0%)"
        isActive={false}
        onClick={() => handleTabClick("tab3")}
      />
    </Tabs>
  );
}
