import styled from "styled-components";

import TotalAmount from "../components/TotalAmount";
import MenuDefault from "../components/MenuDefault";
import MenuAdd from "../components/MenuAdd";
import MenuSetting from "../components/MenuSetting";

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

const ComonentWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 12px;
`
//
function OderMenuArea(props) {
     const {
        totalAmount, // TotalAmount 컴포넌트에 전달할 총 금액 (이미 포맷팅된 문자열)
        quantity, // MenuDefault에 전달할 수량 상태
        onPlusClick, // MenuDefault에 전달할 Plus 핸들러
        onMinusClick, // MenuDefault에 전달할 Minus 핸들러
        itemPrice // MenuDefault에 전달할 항목 가격
    } = props

    return(
    <StyledWrapper>
        <MaintitleWrapper>
            <Maintitle>주문메뉴</Maintitle>
        </MaintitleWrapper>

        <ComonentWrapper>
            <MenuSetting></MenuSetting>
            <MenuDefault
                quantity={quantity}
                onPlusClick={onPlusClick}
                onMinusClick={onMinusClick}
                itemPrice={itemPrice}></MenuDefault>
            <MenuAdd></MenuAdd>
            <TotalAmount title="메뉴총액" totalAmount={totalAmount}></TotalAmount>
        </ComonentWrapper>
    </StyledWrapper>
    )
}

export default OderMenuArea