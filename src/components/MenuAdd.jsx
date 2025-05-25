import styled from "styled-components";
import { useState } from "react";

import InfoBox from "../components/InfoBox";
import TextInput from "../components/TextInput";
import SubBtn from "../components/SubBtn";

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

const ContainerWrapper = styled.div`
    width: 313px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function MenuAdd(props) {
    return(
        <Container>
            <ContainerWrapper>
                <Subtitle>메뉴추가</Subtitle>
                <SubBtn type="stroke-plus" text="메뉴추가"></SubBtn>
            </ContainerWrapper>
                
            <InfoBox title="메뉴이름"><TextInput placeholder="메뉴이름을 입력해주세요."></TextInput></InfoBox>
            <InfoBox title="메뉴가격"><TextInput placeholder="메뉴가격을 입력해주세요."></TextInput></InfoBox>
        </Container>
    )
}

export default MenuAdd