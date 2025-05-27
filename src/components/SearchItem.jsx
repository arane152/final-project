import styled from "styled-components";
import CategoryBtn from "./CategoryBtn";

const SearchItem = ({ category, storeName, minPrice }) => {
  return (
    <ItemWrapper>
      <IconBox>
        <Circle />
        <CircleInner />
      </IconBox>
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
  position: relative;
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  left: 3px;
  top: 3px;
  border-radius: 50%;
  border: 2px solid #666666;
`;

const CircleInner = styled.div`
  width: 4.35px;
  height: 4.35px;
  position: absolute;
  left: 16.65px;
  top: 16.65px;
  border-radius: 50%;
  border: 2px solid #666666;
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