import styled from "styled-components";
import { useState } from "react";

import MenuOutPutItem from "./MenuOutputitem";
import QuantityBtn from "./QuantityBtn";

// #202020 #404040
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

const CurrentQuantity = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 140%;
    color: #404040;
    margin: 0;
`

const TotalPrice = styled(CurrentQuantity)`
    font-weight: 600;
`

function MenuDefault(props) {
    const {onClick} = props;
    const type = props.type || "default";  // default : QuantityBtn포함 컴포넌트 | info: 현재수량 , 총 0원 포함 컴포넌트

    const [quantity, setQuantity] = useState(0);

    // Plus 버튼 클릭 시 수량 증가 로직
    const handlePlusClick = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Minus 버튼 클릭 시 수량 감소 로직 (0 이하 방지)
    const handleMinusClick = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    if(type == "default"){
        return(
            // onClick은 Container에 그대로 연결
            <Container onClick={onClick}>
                <MenuOutPutItem type="bold" name="후라이드 치킨" count={quantity} price="15,000" width="313"></MenuOutPutItem>
                <ContainerWrapper>
                    <CurrentQuantity>현재수량: {quantity}</CurrentQuantity>
                    <QuantityBtn
                        quantity={quantity}
                        onPlusClick={handlePlusClick}
                        onMinusClick={handleMinusClick}
                    ></QuantityBtn>
                </ContainerWrapper>
            </Container>
        )
    }else if(type == "info"){
        return(
            <Container onClick={onClick}>
                <MenuOutPutItem type="bold" name="후라이드 치킨" count="1" price="15,000" width="313"></MenuOutPutItem>
                <ContainerWrapper>
                    <CurrentQuantity>현재수량: {quantity}</CurrentQuantity>
                    <TotalPrice>총 0원</TotalPrice> {/*실제 가격 계산 필요*/}
                </ContainerWrapper>
            </Container>
        )
    }
}

export default MenuDefault