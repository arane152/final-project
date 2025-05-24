
import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const PostPartyContainer = ({ recruiter, participants, goalAmount }) => {
  const recruiterTotal = recruiter.menus.reduce((sum, m) => sum + m.price * m.count, 0);
  const participantsTotal = participants.reduce(
    (sum, p) => sum + p.menus.reduce((s, m) => s + m.price * m.count, 0),
    0
  );
  const totalAmount = recruiterTotal + participantsTotal;
  const percent = Math.min(100, Math.round((totalAmount / goalAmount) * 100));

  return (
    <Wrapper>
      <Container>
        <HeaderRow>
          <Badge>카테고리</Badge>
          <StoreName>{recruiter.storeName}</StoreName>
          <SectionTitle>참여자현황</SectionTitle>
        </HeaderRow>
        <Divider />

        <RecruiterBlock>
          <TopRow>
            <Profile
              name="홍길동"
              badge="모집자"
            />
            <DeleteButton onClick={recruiter.onDeleteMenu}>
              <span>메뉴삭제</span>
            </DeleteButton>
          </TopRow>
          {recruiter.menus.map((menu, idx) => (
            <MenuItem key={idx}>
              <MenuName>{menu.name} × {menu.count}개</MenuName>
              <MenuPrice>개당 {menu.price.toLocaleString()}원</MenuPrice>
            </MenuItem>
          ))}
        </RecruiterBlock>
        <Divider />

        {participants.map((p, idx) => (
          <React.Fragment key={idx}>
            <ParticipantCard>
              <TopRow>
                <Profile
                  name="홍길동"
                />
                <KickButton onClick={() => alert(`${p.name} 강퇴`)}>
                  인원강퇴
                </KickButton>
              </TopRow>
              {p.menus.map((menu, mIdx) => (
                <MenuItem key={mIdx}>
                  <MenuName>{menu.name} × {menu.count}개</MenuName>
                  <MenuPrice>개당 {menu.price.toLocaleString()}원</MenuPrice>
                </MenuItem>
              ))}
            </ParticipantCard>
            <Divider />
          </React.Fragment>
        ))}

        <TotalBox>
          <TotalRow>
            <TotalLabel>총액</TotalLabel>
            <TotalAmount>{totalAmount.toLocaleString()}원</TotalAmount>
          </TotalRow>
          <ProgressRow>
            <ProgressBar>
              <ProgressFill style={{ width: percent + "%" }} />
            </ProgressBar>
            <Percent>{percent}%</Percent>
          </ProgressRow>
        </TotalBox>
      </Container>
    </Wrapper>
  );
};

// 스타일 정의
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

const Badge = styled.div`
  font-size: 12px;
  background: #ff6232;
  color: white;
  padding: 2px 8px;
  border-radius: 100px;
  font-weight: 700;
`;

const StoreName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #ff6232;
`;

const SectionTitle = styled.div`
  margin-left: auto;
  font-size: 14px;
  font-weight: 600;
  color: #202020;
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
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const KickButton = styled.button`
  padding: 6px 12px;
  background: white;
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  font-size: 14px;
  color: #ff6232;
  font-weight: 600;
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

export default PostPartyContainer;