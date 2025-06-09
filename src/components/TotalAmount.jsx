import styled from 'styled-components'

const DefaultTotalAmount = styled.div`
    display: flex;
    width: 353px;
    height: 63px;
    background-color: #ffffff;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`

const OutlineTotalAmount = styled(DefaultTotalAmount)`
    border: 1px solid #FF6232;
`

const TotalText = styled.p`
    display: flex;
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.color};
`

const TotalAmountText = styled.p`
    display: flex;
    font-size: 16px;
    font-weight: 600;
    color: #FF6232;
`

const StyleWrapper = styled.div`
    width: 313px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

const TransparentStyleWrapper = styled(StyleWrapper)`
    width: 353px;
    height: 23px;
    background-color: transparent;
`

function formatPrice(price) {
    return price.toLocaleString('ko-KR');
}

// #202020 #FF6232
function TotalAmount(props) {
    const {title, totalAmount} = props;

    const color = props.color || '#202020'
    const colorHex = (color == "orange")? '#FF6232' : '#202020'   // title 컬러 변경(총액/메뉴총액)
    const type = props.type || "default";                         // 기본 / 스트로크 / none

    // type에 따라 다른 스타일 적용
    // default : 배경색, 스트로크 있음
    // stroke : 배경색 없음, 스트로크 있음
    // none : 배경색, 스트로크 없음
    // color : title 컬러 변경 (기본: #202020, 오렌지: #FF6232)
    // totalAmount : 총액
    // title : 총액/메뉴총액
    if(type == "default"){     //기본
        return (
            <DefaultTotalAmount>
                <StyleWrapper>
                <TotalText color={colorHex}>{title}</TotalText>
                    <TotalAmountText>{formatPrice(totalAmount)}원</TotalAmountText>
                </StyleWrapper>
            </DefaultTotalAmount>
        )
    }else if(type == "stroke"){     //스트로크
        return (
            <OutlineTotalAmount>
                <StyleWrapper>
                    <TotalText color={colorHex}>{title}</TotalText>
                    <TotalAmountText>{formatPrice(totalAmount)}원</TotalAmountText>
                </StyleWrapper>
            </OutlineTotalAmount>
        )
    }else if(type == "none"){      //배경X 스트로크X
        return (
            <TransparentStyleWrapper>
                <TotalText color={colorHex}>{title}</TotalText>
                <TotalAmountText>{formatPrice(totalAmount)}원</TotalAmountText>
            </TransparentStyleWrapper>
        )
    }
}

export default TotalAmount