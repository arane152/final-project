import styled from "styled-components";
import { useState } from "react";

import InfoBox from "../components/InfoBox";
import TextInput from "../components/TextInput";
import ToggleBtn from "../components/ToggleBtn";

const StyledWrapper = styled.div`
    width: 393px;
    height: 574px;
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
    gap: 20px;
    padding-top: 16px;
`

const ImgBtn = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 8px;
    background-color: #F8F8F8;
    color: #AAAAAA;
    border: none;
    text-align: center;
`

function InfoArea(props) {
    const [toggle, setToggle] = useState('자유')

    const handleToggleClick = (selectedToggle) => {
        setToggle(selectedToggle);
    };

    return(
    <StyledWrapper>
        <Container>
            <InfoBox title="제목"><TextInput placeholder="제목을 입력해주세요."></TextInput></InfoBox>
            <InfoBox title="수령장소"><TextInput placeholder="수령장소를 입력해주세요."></TextInput></InfoBox>
            <InfoBox title="마감시간"><TextInput placeholder="마감시간을 입력해주세요."></TextInput></InfoBox>
            <InfoBox title="내용"><TextInput height={"108px"} placeholder="내용을 입력해주세요."></TextInput></InfoBox>
            <InfoBox title="메뉴사진"><ImgBtn>+</ImgBtn></InfoBox>
            <InfoBox title="계좌번호"><TextInput placeholder="계좌번호를 입력해주세요."></TextInput></InfoBox>
            <InfoBox title={<>선입금<br />필수여부</>}>
                <ToggleBtn width='142' text="자유"
                onClick={() => handleToggleClick('자유')} isSelected={toggle === '자유'} ></ToggleBtn>
                <ToggleBtn width='142'text="필수"
                onClick={() => handleToggleClick('필수')} isSelected={toggle === '필수'}></ToggleBtn>
            </InfoBox>
        </Container>
    </StyledWrapper>
    )
}

export default InfoArea