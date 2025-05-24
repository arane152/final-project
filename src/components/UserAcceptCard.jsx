import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const UserAcceptCard = ({ name, date, menus, onAccept }) => {
  const totalPrice = menus.reduce(
    (sum, menu) => sum + menu.price * (menu.count || 1),
    0
  );

  return (
    <CardContainer>
      <Profile name={name} date={date} />

      <MenuList>
        {menus.map((menu, idx) => (
          <MenuRow key={idx}>
            <MenuName>
              {menu.name} × {menu.count || 1}개
            </MenuName>
            <PricePerItem>
              개당 {menu.price.toLocaleString()}원
            </PricePerItem>
          </MenuRow>
        ))}
      </MenuList>

      <BottomRow>
        <TotalPrice>총 {totalPrice.toLocaleString()}원</TotalPrice>
        <AcceptButton onClick={onAccept}>신청수락</AcceptButton>
      </BottomRow>
    </CardContainer>
  );
};

export default UserAcceptCard;

// 스타일 정의
const CardContainer = styled.div`
  width: 329px;
  padding: 12px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Pretendard', sans-serif;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
`;

const MenuName = styled.div``;

const PricePerItem = styled.div``;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 8px;
`;

const TotalPrice = styled.div`
  font-size: 14px;
  color: #666;
`;

const AcceptButton = styled.button`
  padding: 6px 12px;
  background: #ff6232;
  color: white;
  font-weight: 700;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
