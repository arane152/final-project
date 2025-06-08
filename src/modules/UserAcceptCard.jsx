import Profile from "../components/Profile";
import MenuOutputitem from "../components/MenuOutputitem";
import SubBtn from "../components/SubBtn";
import styled from 'styled-components'

const UserAcceptCard = ({ name, date, menus, onAccept }) => {
  const formatPrice = (price) => {
    const parsed = typeof price === 'string' ? parseInt(price, 10) : price;
    if (typeof parsed !== 'number' || isNaN(parsed)) {
      return '0';
    }
    return parsed.toLocaleString('ko-KR');
  };
  
  // Firebase Timestamp 또는 일반 문자열을 Date 객체로 변환
  const dateObj = date?.toDate?.() ?? new Date(date);

  // 넘길 timestamp 값
  const timestamp = dateObj instanceof Date && !isNaN(dateObj)
  ? dateObj.getTime()  // 숫자로 변환
  : null;

  // 전체 메뉴 가격 계산 (count가 없으면 1개로 간주)
  const totalPrice = menus.reduce(
    (sum, menu) => sum + menu.price * (menu.count || 1),
    0
  );

  return (
    <CardContainer>
      <Profile name={name} date={timestamp} />
      <MenuList>
        {menus.map((menu, idx) => (
          <MenuOutputitem
            key={idx}
            name={menu.name}
            count={menu.count}
            price={formatPrice(menu.price)}
            type="default"
          />
        ))}
      </MenuList>
      <BottomRow>
        <TotalPrice>총 {formatPrice(totalPrice)}원</TotalPrice>
        <SubBtn type="stroke" text="신청수락" onClick={onAccept} />
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
