import styled from "styled-components";
import Profile from "../components/Profile";
import MenuOutputItem from "../components/MenuOutputitem";
import StatusBar from "../components/StatusBar";
import StoreName from "./StoreName";
import SubBtn from "../components/SubBtn";

const PostPartyContainer = ({
  recruiter = { onDeleteMenu: () => {} },
  goalAmount = 20000,
  }) => {
    const recruiterMenus = [
      { name: "김밥", price: 3000, count: 2 },
      { name: "떡볶이", price: 4000, count: 1 },
    ];

    const participantMenus = [
      { name: "라면", price: 5000, count: 1 },
      { name: "튀김", price: 2000, count: 2 },
    ];

  const recruiterTotal = recruiterMenus.reduce(
    (sum, m) => sum + m.price * m.count,
    0
  );
  const participantsTotal = participantMenus.reduce(
    (sum, m) => sum + m.price * m.count,
    0
  );
  const totalAmount = recruiterTotal + participantsTotal;
  const percent =
    goalAmount > 0
      ? Math.min(100, Math.round((totalAmount / goalAmount) * 100))
      : 0;

  return (
    <Wrapper>
      <Container>
        <HeaderRow>
          <StoreName category="카테고리" storeName="가게이름">
            참여자현황
          </StoreName>
        </HeaderRow>
        <Divider />

        <RecruiterBlock>
          <TopRow>
            <Profile name="홍길동" badge="모집자" />
            <DeleteButton onClick={recruiter.onDeleteMenu}>메뉴삭제</DeleteButton>
          </TopRow>
          <MenuOutputItem type="default" name="김밥" count={2} price={3000} />
          <MenuOutputItem type="default" name="떡볶이" count={1} price={4000} />
        </RecruiterBlock>
        <Divider />

        <ParticipantCard>
          <TopRow>
            <Profile name="홍길동동" />
            <SubBtn type="grey" text="인원강퇴" />
          </TopRow>
          <MenuOutputItem type="default" name="라면" count={1} price={5000} />
          <MenuOutputItem type="default" name="튀김" count={2} price={2000} />
        </ParticipantCard>
        <Divider />

        <TotalBox>
          <TotalRow>
            <TotalLabel>총액</TotalLabel>
            <TotalAmount>{totalAmount.toLocaleString()}원</TotalAmount>
          </TotalRow>
          <ProgressRow>
            <StatusBar type="simple" totalPercent={percent} />
          </ProgressRow>
        </TotalBox>
      </Container>
    </Wrapper>
  );
};

export default PostPartyContainer;

const Wrapper = styled.div`
  width: 393px;
  padding: 12px 0 20px 20px;
  background: #EEEEEE;
`;

const Container = styled.div`
  width: 353px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #eeeeee;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 8px;
`;

const RecruiterBlock = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ParticipantCard = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;  
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 32px;
  gap: 8px;
  & > *:last-child {
    flex-shrink: 0;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #aaaaaa;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
`;

const MenuName = styled.div`
`;

const MenuPrice = styled.div`
`;

const TotalBox = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #202020;
`;

const TotalAmount = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #ff6232;
`;

const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 12px;
  background: #fff5d5;
  border: 1px solid #ffb9b9;
  border-radius: 100px;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: #ff6232;
  border-radius: 100px;
`;

const Percent = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #ff6232;
`;