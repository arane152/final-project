import styled from "styled-components";
import { useState } from "react";

import InfoBox from "../components/InfoBox";
import TextInput from "../components/TextInput";
import ToggleBtn from "../components/ToggleBtn";
import TotalAmount from "../components/TotalAmount";
import SubBtn from "../components/SubBtn";
import MenuDefault from "../components/MenuDefault";
import MenuAdd from "../components/MenuAdd";

// #202020

const StyledWrapper = styled.div`
    width: 393px;
    height: 712px;
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const Subtitle = styled.h2`
    color: #202020;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    margin: 0; 
`

const Maintitle = styled.h2`
    color: #202020;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
`

const MaintitleWrapper = styled.div`
    width: 353px;
    height: 46px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 12px;
    margin-bottom: 12px;
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
        <MaintitleWrapper>
            <Maintitle>주문메뉴</Maintitle>
        </MaintitleWrapper>

        <Container>
            <Subtitle>음식점 설정</Subtitle>
            <InfoBox title="음식점명"><TextInput placeholder="음식점명을 입력해주세요."></TextInput></InfoBox>
            <InfoBox title="최소금액"><TextInput placeholder="최소금액을 입력해주세요."></TextInput></InfoBox>
            <InfoBox title={<>신청자<br />메뉴추가</>}>
                <ToggleBtn width='122' text="허용"></ToggleBtn>
                <ToggleBtn width='122' type="none-toggle" text="금지"></ToggleBtn>
            </InfoBox>
        </Container>

        <MenuDefault></MenuDefault>
        <MenuAdd></MenuAdd>
        <TotalAmount title="메뉴총액"></TotalAmount>
    </StyledWrapper>
    )
}

export default OderMenuArea