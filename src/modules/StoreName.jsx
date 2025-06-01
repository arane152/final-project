import styled from 'styled-components'
import StateBadge from '../components/StateBadge'

const StoreWrapper = styled.div`
    display: inline-flex;
    width: auto;
    height: 25px;
    border-radius: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const StoreText = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: #FF6232;
    margin-left: 8px;
`

const StoreTextBlack = styled(StoreText)`
    color: #404040;
`

function StoreName(props) { 
    const { storeId } = props
    // props.type : 글자 색 타입 (default : "" / black : "black")
    // props.categroy : 카테고리 이름
    // props.storeName : 가게 이름
    if (props.type == "black") {
        return (
            <StoreWrapper>
                <StateBadge>{props.category}</StateBadge>
                <StoreTextBlack>{props.storeName}</StoreTextBlack>
            </StoreWrapper>
        )
    }
    else {
        return (
            <StoreWrapper>
                <StateBadge>{props.category}</StateBadge>
                <StoreText>{props.storeName}</StoreText>
            </StoreWrapper>
        )
    }

}

export default StoreName