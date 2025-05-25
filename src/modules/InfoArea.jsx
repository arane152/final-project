import styled from "styled-components";
import { useState } from "react";

import InfoBox from "../components/InfoBox";
import TextInput from "../components/TextInput";
import ToggleBtn from "../components/ToggleBtn";

const StyledWrapper = styled.div`
    width: 393px;
    height: 570px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const Container = styled.div`
    width: 353px;
    display: flex;
    flex-direction: column; 
    gap: 12px;
    padding-top: 16px;
`

function InfoArea(props) {
    return(
    <StyledWrapper>
        <Container>
            <InfoBox title="제목"><TextInput></TextInput></InfoBox>
            <InfoBox title="수령장소"><TextInput placeholder="수령장소를 입력해주세요."></TextInput></InfoBox>
            <InfoBox title="마감시간"><TextInput placeholder="마감시간을 입력해주세요."></TextInput></InfoBox>
            <InfoBox title="내용"><TextInput height={"108px"} placeholder="내용을 입력해주세요."></TextInput></InfoBox>
            <InfoBox title="계좌번호"><TextInput placeholder="계좌번호를 입력해주세요."></TextInput></InfoBox>
            <InfoBox title={<>선입금<br />필수여부</>}>
                <ToggleBtn width='142' text="자유"></ToggleBtn>
                <ToggleBtn width='142' type="none-toggle" text="필수"></ToggleBtn>
            </InfoBox>
        </Container>
    </StyledWrapper>
    )
}

export default InfoArea