import styled from "styled-components";
import { useState } from "react";

import InfoBox from "../components/InfoBox";
import TextInput from "../components/TextInput";
import ToggleBtn from "../components/ToggleBtn";

// #202020
const Subtitle = styled.h2`
    color: #202020;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    margin: 0; 
`

const Container = styled.div`
    width: 313px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column; 
    gap: 12px;
`

function MenuSetting(props) {
    return(
        <Container>
            <Subtitle>음식점 설정</Subtitle>
            <InfoBox title="음식점명"><TextInput placeholder="음식점명을 입력해주세요."></TextInput></InfoBox>
            <InfoBox title="최소금액"><TextInput placeholder="최소금액을 입력해주세요."></TextInput></InfoBox>
            <InfoBox title={<>신청자<br />메뉴추가</>}>
                <ToggleBtn width='122' text="허용"></ToggleBtn>
                <ToggleBtn width='122' type="none-toggle" text="금지"></ToggleBtn>
            </InfoBox>
        </Container>
    )
}

export default MenuSetting