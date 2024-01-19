import { styled } from "styled-components";
import ResultTabs from "./ResultTabs";
import Result from "./Result";
import { useState } from "react";

const StyledResult = styled.section``;

export default function Results({ money, period, interest, calculate }) {
  const [tabActive, setTabActive] = useState("tab1");

  const handleTabClick = (tabTitle) => {
    setTabActive(tabTitle);
  };

  return (
    <StyledResult>
      <ResultTabs tabActive={tabActive} onClick={handleTabClick} />
      <Result>
        {money}, {period}, {interest}, {calculate?.normal}
      </Result>
    </StyledResult>
  );
}
