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
        key="normal"
        title="일반 과세 (15.4%)"
        isActive={tabActive === "normal"}
        onClick={() => onClick("normal")}
      />
      <ResultTab
        key="advantage"
        title="세금 우대 (9.5%)"
        isActive={tabActive === "advantage"}
        onClick={() => onClick("advantage")}
      />
      <ResultTab
        key="exemption"
        title="비과세 (0%)"
        isActive={tabActive === "exemption"}
        onClick={() => onClick("exemption")}
      />
    </Tabs>
  );
}
