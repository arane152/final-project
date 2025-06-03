import styled from 'styled-components'
import StateBadge from '../components/StateBadge'
import { useStore } from '../../context/StoreContext'
import { useCategory } from '../../context/CategoryContext'

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
    line-height: 100%;
`

const StoreTextBlack = styled(StoreText)`
    color: #404040;
`

function StoreName(props) { 
    const { storeId } = props
    const {storeData} = useStore();
    const {categoryData} = useCategory();
    const matchedStore = storeData.find((store) => store.id == storeId);   
    const matchedCategory = categoryData.find((category) => category.id == matchedStore?.categoryId);   

    //storeId로 원하는 가게의 Id를 props로 전달


    // props.type : 글자 색 타입 (default : "" / black : "black")
    // props.categroy : 카테고리 이름
    // props.storeName : 가게 이름
    if (props.type == "black") {
        return (
            <StoreWrapper>
                <StateBadge>{matchedCategory?.name || props.category || "전체"}</StateBadge>
                <StoreTextBlack>{matchedStore?.name || props.storeName || "선택된 음식점이 없습니다"}</StoreTextBlack>
            </StoreWrapper>
        )
    }
    else {
        return (
            <StoreWrapper>
                <StateBadge>{matchedCategory?.name || props.category || "전체"}</StateBadge>
                <StoreText>{matchedStore?.name || props.storeName || "선택된 음식점이 없습니다"}</StoreText>
            </StoreWrapper>
        )
    }

}

export default StoreName