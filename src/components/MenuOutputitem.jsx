import React from "react";
import styled from "styled-components";

const MenuOutputitem = ({ name, price, count = 1 }) => {
  return (
    <ItemContainer>
      <MenuText>
        {name} × {count}개
      </MenuText>
      <PriceText>개당 {price.toLocaleString()}원</PriceText>
    </ItemContainer>
  );
};

export default MenuOutputitem;

const ItemContainer = styled.div`
  width: 329px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666666;
  font-family: 'Pretendard', sans-serif;
`;

const MenuText = styled.div``;

const PriceText = styled.div``;
