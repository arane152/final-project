import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: 109px;
    height: 32px;
    background-color: #FFFFFF;
    border-radius: 8px;
    border: solid 1px #FF6232;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0px 12px;
`

const BtnWrapper = styled.div`
    display: flex;
    width: 12px;
    height: 12px;
    justify-content: center;
    align-items: center;
    background-image: url(${(props) => props.$btnType === 'minus' ? '/QuantityMinus.svg' : '/QuantityPlus.svg'});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

const QuantityText = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #FF6232;
`

function QuantityBtn (props) {
    // props.quantity : 수량
    const { quantity, onPlusClick, onMinusClick } = props;

    return (
        <Wrapper>
            <BtnWrapper $btnType="minus" onClick={onMinusClick}></BtnWrapper>
            <QuantityText>나의 수량 : {quantity}</QuantityText>
            <BtnWrapper $btnType="plus" onClick={onPlusClick}></BtnWrapper>
        </Wrapper>
    );
}


export default QuantityBtn