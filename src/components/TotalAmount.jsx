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

// #222222 #FF6232
function TotalAmount(props) {
    const {title} = props;

    const color = props.color || '#222222'
    const colorHex = (color == "orange")? '#FF6232' : '#222222'   // title 컬러 변경(총액/메뉴총액)
    const type = props.type || "default";                         // 기본 / 스트로크 / none

    if(type == "default"){     //기본
        return (
            <DefaultTotalAmount>
                <StyleWrapper>
                <TotalText color={colorHex}>{title}</TotalText>
                    <TotalAmountText>0원</TotalAmountText>
                </StyleWrapper>
            </DefaultTotalAmount>
        )
    }else if(type == "stroke"){     //스트로크
        return (
            <OutlineTotalAmount>
                <StyleWrapper>
                    <TotalText color={colorHex}>{title}</TotalText>
                    <TotalAmountText>0원</TotalAmountText>
                </StyleWrapper>
            </OutlineTotalAmount>
        )
    }else if(type == "none"){      //배경X 스트로크X
        return (
            <TransparentStyleWrapper>
                <TotalText color={colorHex}>{title}</TotalText>
                <TotalAmountText>0원</TotalAmountText>
            </TransparentStyleWrapper>
        )
    }
}

export default TotalAmount