import styled from "styled-components";

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
    const { 
        //버튼조작함수 props
        onPlusClick, 
        onMinusClick, 
        //정보 props ( 이름 / 수량 / 가격)
        name, 
        count, 
        price, 
        userCount
    } = props; 
    // default : QuantityBtn포함 컴포넌트 | info: 현재수량 , 총 0원 포함 컴포넌트
    const type = props.type || "default";  
    
    //price 숫자여부 및 한국식 숫자양식으로 변환
    const formatPrice = (price) => {
        if (typeof price !== 'number' || isNaN(price)){
            return '0';
        }

        return price.toLocaleString('ko-KR');
    }
    //수량에 따른 금액 계산
    const totalAmount = count * price; 
    

    // type에 따라 다른 컴포넌트 반환
    // default : QuantityBtn포함 컴포넌트
    // info: 현재수량 , 총 0원 포함 컴포넌트
    // simple : 현재수량만 포함 컴포넌트
    if(type == "default"){
        return(
            <Container>
                {/* 이름 및 개별가격 */}
                <MenuOutPutItem 
                    type="bold" 
                    name={name} 
                    price={formatPrice(price)} 
                    width="313">
                </MenuOutPutItem>
                <ContainerWrapper>
                    {/* 수량에 따른 가격 */}
                    <CurrentQuantity>
                        {formatPrice(totalAmount)}원
                    </CurrentQuantity>
                    {/* 수량조작버튼 */}
                    <QuantityBtn
                        quantity={count}
                        onPlusClick={onPlusClick}
                        onMinusClick={onMinusClick}>
                    </QuantityBtn>
                </ContainerWrapper>
            </Container>
        )

    }else if(type == "info"){
        return(
            <Container>
                {/* 이름 및 개별가격 */}
                <MenuOutPutItem 
                    type="bold" 
                    name={name} 
                    count={count} 
                    price={formatPrice(price)} 
                    width="313">
                </MenuOutPutItem>
                <ContainerWrapper>
                    {/* 현재수량 */}
                    <CurrentQuantity>
                        현재 수량: {count}
                    </CurrentQuantity>
                    {/* 수량에 따른 가격 */}
                    <TotalPrice>
                        총 {formatPrice(totalAmount)}원
                    </TotalPrice>
                </ContainerWrapper>
            </Container>
        )
    }else if(type == "simple"){
        return(
            <Container>
                {/* 이름 및 개별가격 */}
                <MenuOutPutItem 
                    type="bold" 
                    name={name} 
                    price={formatPrice(price)} 
                    width="313">
                </MenuOutPutItem>
                <ContainerWrapper>
                    {/* 수량에 따른 가격 */}
                    <CurrentQuantity>
                        현재 수량 : {count}개
                    </CurrentQuantity>
                    {/* 수량조작버튼 */}
                    <QuantityBtn
                        quantity={userCount ?? 0}
                        onPlusClick={onPlusClick}
                        onMinusClick={onMinusClick}>
                    </QuantityBtn>
                </ContainerWrapper>
            </Container>
        )

    }
}

export default MenuDefault