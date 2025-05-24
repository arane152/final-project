import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  width: 329px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666666;
  font-family: 'Pretendard', sans-serif;
  flex-direction: row;
`

const MenuText = styled.div``;

const PriceText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ItemContainerSide = styled(ItemContainer)`
  justify-content: flex-start;
`

const MenuTextBold = styled(MenuText)`
  font-size: 16px;
  font-weight: 600;
  color: #202020;
`

const MenuTextSide = styled(MenuText)`
  font-size: 13px;
  font-weight: 500;
  color: #202020;
`

const PriceTextSide = styled(PriceText)`
  font-size: 13px;
  font-weight: 500;
  color: #202020;
`

const MenuDelete = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  background-image: url(/MenuDelete.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 12px;
`


const MenuOutPutItem = ({ name, price, count = 1, type }) => {
  // type : 표시 타입 (기본 : "default" / 메뉴 bold : "bold" / side 텍스트 : "side" / 삭제 : "delete")
  // name : 메뉴 이름
  // count : 단일 메뉴 갯수
  // price : 메뉴 가격
  
  if (type == "default") {
    return (
      <ItemContainer>
        <MenuText>
          {name} × {count}개
        </MenuText>
        <PriceText>개당 {price.toLocaleString()}원</PriceText>
      </ItemContainer>
    );
  }
  else if (type == "bold") {
    return (
      <ItemContainer>
        <MenuTextBold>
          {name} × {count}개
        </MenuTextBold>
        <PriceText>개당 {price.toLocaleString()}원</PriceText>
      </ItemContainer>
    );
  }
  else if (type == "side") {
    return (
      <ItemContainerSide>
        <MenuTextSide>
          {name} × {count}개&nbsp;
        </MenuTextSide>
        <PriceTextSide>|&nbsp;&nbsp;총&nbsp;{price.toLocaleString()}원</PriceTextSide>
      </ItemContainerSide>
    )
  }
  else if (type == "delete") {
    return (
      <ItemContainer>
        <MenuText>
          {name} × {count}개
        </MenuText>
        <PriceText>개당 {price.toLocaleString()}원<MenuDelete></MenuDelete></PriceText>
      </ItemContainer>
    );
  }

};

export default MenuOutPutItem;