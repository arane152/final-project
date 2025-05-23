import React from "react";
import styled from "styled-components";

const UserAcceptCard = ({ name, menus, date}) => {
  const totalPrice = menus.reduce(
    (sum, menu) => sum + menu.price * (menu.count || 1),
    0
  );

  return (
    <CardContainer>
      <ProfileRow>
        <ProfileInfo>
          <Avatar />
          <Name>{name}</Name>
        </ProfileInfo>
        <DateText>{date}</DateText>
      </ProfileRow>

      <MenuList>
        {menus.map((menu, idx) => (
          <MenuRow key={idx}>
            <MenuName>
              {menu.name} × {menu.count|| 1}개
            </MenuName>
            <PricePerItem>개당 {menu.price.toLocaleString()}원</PricePerItem>
          </MenuRow>
        ))}
      </MenuList>

      <BottomRow>
        <TotalPrice>총 {totalPrice.toLocaleString()}원</TotalPrice>
        <AcceptButton>신청수락</AcceptButton>
      </BottomRow>
    </CardContainer>
  );
};

export default UserAcceptCard;

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

const ProfileRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: #eeeeee;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #222;
`;

const DateText = styled.div`
  font-size: 12px;
  color: #aaa;
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

const MenuName = styled.div`
  font-weight: 400;
`;

const PricePerItem = styled.div`
  font-size: 14px;
`;

const BottomRow = styled.div`
  display: flex;
  height:32px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const TotalPrice = styled.div`
  font-size: 16px;
  color: #202020;
  font-weight:600;
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
