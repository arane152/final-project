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
    const {storeName, minPrice} = props
    const [toggle, setToggle] = useState('허용')

    // 토글 버튼 클릭 핸들러
    // 선택된 토글 상태를 업데이트하는 함수
    const handleToggleClick = (selectedToggle) => {
        setToggle(selectedToggle)
    }

    return(
        <Container>
            <Subtitle>음식점 설정</Subtitle>
             <InfoBox title="음식점명">
                <TextInput value={storeName} readOnly/></InfoBox>
            <InfoBox title="최소금액">
                <TextInput value={minPrice} readOnly/>
            </InfoBox>
            <InfoBox title={<>신청자<br />메뉴추가</>}>
                <ToggleBtn width='122' text="허용"
                onClick={() => handleToggleClick('허용')} isSelected={toggle === '허용'}></ToggleBtn>
                <ToggleBtn width='122' text="금지"
                onClick={() => handleToggleClick('금지')} isSelected={toggle === '금지'}></ToggleBtn>
            </InfoBox>
        </Container>
    )
}

export default MenuSetting