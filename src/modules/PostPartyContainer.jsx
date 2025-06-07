import styled from "styled-components";
import Profile from "../components/Profile";
import MenuOutputItem from "../components/MenuOutputitem";
import StatusBar from "../components/StatusBar";
import StoreName from "./StoreName";
import SubBtn from "../components/SubBtn";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const PostPartyContainer = ({ post }) => {
  const [users, setUsers] = useState([]);
  const [storeName, setStoreName] = useState("");
  const [categoryName, setCategoryName] = useState("");

  if (!post) return null;

  //  유저 전체 불러오기
  useEffect(() => {
    db.collection("user")
      .get()
      .then((snapshot) => {
        const userList = snapshot.docs.map((doc) => doc.data());
        setUsers(userList);
      });
  }, []);

  // store, category 이름 불러오기
  useEffect(() => {
    db.collection("store")
      .doc(String(post.storeId))
      .get()
      .then((doc) => {
        const store = doc.data();
        setStoreName(store.name);
        return store.categoryId;
      })
      .then((categoryId) => {
        return db.collection("category").doc(String(categoryId)).get();
      })
      .then((doc) => {
        const category = doc.data();
        setCategoryName(category.name);
      });
  }, [post.storeId]);

  const recruiter = users.find((user) => user.userId === post.userId);

  return (
    <Wrapper>
      <Container>
        <HeaderRow>
          {/* 가게 이름 + 카테고리명 */}
          <StoreName category={categoryName} storeName={storeName}>
            참여자현황
          </StoreName>
        </HeaderRow>
        <Divider />

        {/* 모집자 메뉴 블럭 */}
        <RecruiterBlock>
          <TopRow>
            <Profile name={recruiter?.name} badge="모집자" />
            <DeleteButton onClick={() => {}}>메뉴삭제</DeleteButton>
          </TopRow>
          {(post.recruiterMenus || []).map((menu, i) => (
            <MenuOutputItem
              key={i}
              type="default"
              name={menu.name}
              count={parseInt(menu.menuQuantity)}
              price={parseInt(menu.menuPrice)}
            />
          ))}
        </RecruiterBlock>
        <Divider />

        {/* 참여자들 반복 렌더링 */}
        {Object.entries(post.menuList || {}).map(([key, participant]) => {
          const user = users.find((u) => String(u.userId) === String(participant.userId));
          return (
            <ParticipantCard key={key}>
              <TopRow>
                <Profile name={user?.name || "참여자"} />
                <SubBtn type="grey" text="인원강퇴" />
              </TopRow>
              {participant.menus.map((menu, i) => (
                <MenuOutputItem
                  key={i}
                  type="default"
                  name={menu.name}
                  count={parseInt(menu.menuQuantity)}
                  price={parseInt(menu.menuPrice)}
                />
              ))}
            </ParticipantCard>
          );
        })}

        <Divider />

        {/* 총액 및 진행률 */}
        <TotalBox>
          <TotalRow>
            <TotalLabel>총액</TotalLabel>
            <TotalAmount>자동계산</TotalAmount>
          </TotalRow>
          <ProgressRow>
            <StatusBar type="simple" post={post} />
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