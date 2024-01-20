import { styled } from "styled-components";
import ResultTabs from "./ResultTabs";
import Result from "./Result";
import { useState } from "react";
import addComma from "../util/addComma";

const Span = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #1d82cb;
`;

export default function Results({ results }) {
  const [tabActive, setTabActive] = useState("normal");

  const handleTabClick = (tabTitle) => {
    setTabActive(tabTitle);
  };

  return (
    <section>
      <ResultTabs tabActive={tabActive} onClick={handleTabClick} />
      <Result>
        {Object.keys(results).length > 0 && results.constructor === Object && (
          <>
            <p>
              총 이자액: <Span>{addComma(results.calculate[tabActive])}원</Span>
            </p>
            <p>
              매월 <Span>{addComma(results.money)}</Span>원씩{" "}
              <Span>{results.period}</Span>
              개월동안 연 이율 <Span>{results.interest}</Span>%로 저축하면 총{" "}
              <Span>{addComma(results.calculate[`total_${tabActive}`])}</Span>
              원을 저축하실 수 있습니다.
            </p>
          </>
        )}
      </Result>
    </section>
  );
}
