import React, { useState } from "react";
import styled from "styled-components";

const RecruitingBtn = () => {
  const [active, setActive] = useState(true);

  return (
    <Wrapper onClick={() => setActive(!active)} active={active}>
      <Label>모집</Label>
      <Badge>{active ? "ON" : "OFF"}</Badge>
    </Wrapper>
  );
};

export default RecruitingBtn;

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  background-color: #ffe991;
  border-radius: 999px;
  padding: 4px 12px;
  border: none;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #202020;
  margin-right: 6px;
`;

const Badge = styled.span`
  background-color: #ff6232;
  color: white;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 999px;
`;
