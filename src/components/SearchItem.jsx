import styled from "styled-components";

import StateBadge from "./StateBadge";

const ItemWrapper = styled.div`
  width: 335px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Pretendard', sans-serif;
`;

const IconBox = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/final-project/SearchIcon.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const StoreNameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left:8px;
  flex: 1;
`;

const StoreName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #404040;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MinPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #FF6232;
`;

const SearchItem = ({ category, storeName, minPrice, onClick }) => {
  // category : 가게 카테고리
  // storeName : 가게 이름
  // minPrice : 가게의 최소 가격
  // onClick : 아이템 클릭 시 실행될 함수
  
  const formatPrice = (price) => {
    const parsed = typeof price === 'string' ? parseInt(price, 10) : price;
    if (typeof parsed !== 'number' || isNaN(parsed)) {
      return '0';
    }
    return parsed.toLocaleString('ko-KR');
  };

  return (
    <ItemWrapper onClick={onClick}>
      <IconBox />
      <StoreNameBox>
        <StateBadge>{category}</StateBadge>
        <StoreName>{storeName}</StoreName>
      </StoreNameBox>
      <PriceBox>
        <span>최소</span>
        <MinPrice>{formatPrice(minPrice)}원</MinPrice>
      </PriceBox>
    </ItemWrapper>
  );
};

export default SearchItem;