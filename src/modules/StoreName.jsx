import styled from 'styled-components'
import StateBadge from '../components/StateBadge'
import { useStore } from '../../context/StoreContext'
import { useEffect, useState } from 'react'

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
    const {storeData} = useStore();
    const matchedStore = storeData.find((store) => store.id == storeId);   
    

    // props.type : 글자 색 타입 (default : "" / black : "black")
    // props.categroy : 카테고리 이름
    // props.storeName : 가게 이름
    if (props.type == "black") {
        return (
            <StoreWrapper>
                <StateBadge>{matchedStore?.categoryId || props.category}</StateBadge>
                <StoreTextBlack>{matchedStore?.name || props.storeName}</StoreTextBlack>
            </StoreWrapper>
        )
    }
    else {
        return (
            <StoreWrapper>
                <StateBadge>{matchedStore?.categoryId || props.category}</StateBadge>
                <StoreText>{matchedStore?.name || props.storeName}</StoreText>
            </StoreWrapper>
        )
    }

}

export default StoreName