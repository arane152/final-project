import styled from "styled-components";
import CategoryBtn from "./CategoryBtn";

const SearchItem = ({ category, storeName, minPrice }) => {
  return (
    <ItemWrapper>
      <IconBox />
      <StoreNameBox>
        <CategoryBtn type="toggle" text={category} />
        <StoreName>{storeName}</StoreName>
      </StoreNameBox>
      <PriceBox>
        <span>최소</span>
        <MinPrice>{minPrice.toLocaleString()}원</MinPrice>
      </PriceBox>
    </ItemWrapper>
  );
};

export default SearchItem;

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
  background-image: url("/SearchIcon.svg"); /* ✅ public 기준 절대 경로 */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const StoreNameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
