import styled from 'styled-components'

const StoreWrapper = styled.div`
    display: inline-flex;
    width: auto;
    height: 25px;
    border-radius: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const CategoryWrapper = styled.div`
    display: inline-flex;
    width: auto;
    height: 25px;
    background-color: #FF6232;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
`

const CategoryText = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: #FFFFFF;
`

const StoreText = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: #FF6232;
    margin-left: 8px;
`

function StoreName(props) {
    return (
        <StoreWrapper>
            <CategoryWrapper>
                <CategoryText>{props.category}</CategoryText>
            </CategoryWrapper>
            <StoreText>{props.storeName}</StoreText>
        </StoreWrapper>
    )
}

export default StoreName