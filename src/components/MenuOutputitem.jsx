import styled from "styled-components";

const ItemContainer = styled.div`
  width: ${props => props.width}px;
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
  background-image: url(/final-project/MenuDelete.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 12px;
`

const MenuOutPutItem = ({ name, price, count = 1, type, width = '329' }) => {
  // type : 컴포넌트 타입 (default, bold, side, delete)
  // name : 메뉴 이름
  // count : 단일 메뉴 갯수
  // price : 메뉴 가격
  // width : 컴포넌트 너비 (기본값: 329px)

  // type에 따라 다른 컴포넌트 반환
  // default : 메뉴 이름과 가격, 개수 표시
  // bold : 메뉴 이름만 굵게 표시
  // side : 메뉴 이름과 가격, 개수 표시 (사이드바용)
  // delete : 메뉴 이름과 가격, 개수 표시 (삭제 아이콘 포함)
  if (type === "default") {
    return (
      <ItemContainer width={width}>
        <MenuText>
          {name} × {count}개
        </MenuText>
        <PriceText>개당 {price}원</PriceText>
      </ItemContainer>
    );
  }
  else if (type === "bold") {
    return (
      <ItemContainer width={width}>
        <MenuTextBold>
          {name}
        </MenuTextBold>
        <PriceText>개당 {price}원</PriceText>
      </ItemContainer>
    );
  }
  else if (type === "side") {
    return (
      <ItemContainerSide width={width}>
        <MenuTextSide>
          {name} × {count}개&nbsp;
        </MenuTextSide>
        <PriceTextSide>|&nbsp;&nbsp;총&nbsp;{price}원</PriceTextSide>
      </ItemContainerSide>
    )
  }
  else if (type === "delete") {
    return (
      <ItemContainer width={width}>
        <MenuText>
          {name} × {count}개
        </MenuText>
        <PriceText>개당 {price}원<MenuDelete></MenuDelete></PriceText>
      </ItemContainer>
    );
  }

};

export default MenuOutPutItem;