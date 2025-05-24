import styled from "styled-components";
import { useState } from "react";

import InfoBox from "../components/InfoBox";
import TextInput from "../components/TextInput";
import ToggleBtn from "../components/ToggleBtn";
import TotalAmount from "../components/TotalAmount";
import SubBtn from "../components/SubBtn";

// #202020

const StyledWrapper = styled.div`
    width: 393px;
    height: 712px;
    background-color: #F8F8F8;
    display: flex;
    align-items: center;
`

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
    margin-bottom: 12px;
`

const ContainerWrapper = styled.div`
    width: 313px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function OderMenuArea(props) {
    return(
    <StyledWrapper>
        <Container>
            <Subtitle>음식점 설정</Subtitle>
            <InfoBox title="음식점명"><TextInput></TextInput></InfoBox>
            <InfoBox title="최소금액"><TextInput></TextInput></InfoBox>
            <InfoBox title="신청자메뉴추가">
                <ToggleBtn text="허용"></ToggleBtn>
                <ToggleBtn type="none-toggle" text="금지"></ToggleBtn>
            </InfoBox>
        </Container>

        <Container>
            <ContainerWrapper>
                <Subtitle>메뉴추가</Subtitle>
                <SubBtn type="stroke-plus" text="메뉴추가"></SubBtn>
            </ContainerWrapper>
                
            <InfoBox title="메뉴이름"><TextInput></TextInput></InfoBox>
            <InfoBox title="메뉴가격"><TextInput></TextInput></InfoBox>
        </Container>

        <TotalAmount title="메뉴총액"></TotalAmount>
    </StyledWrapper>
    )
}

export default OderMenuArea