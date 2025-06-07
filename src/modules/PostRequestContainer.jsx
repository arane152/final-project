import styled from "styled-components";
import {db} from "../firebase.js"
import UserAcceptCard from "./UserAcceptCard";

const PostRequestContainer = ({ post, users, postId, setPost }) => {
  const participants = Object.entries(post.menuList)
    .filter(([, p]) => p.accept === false)
    .map(([key, data]) => {
      const user = users.find((u) => u.userId === data.userId);

      return {
        key,
        name: user?.name || "이름없음",
        date: data.date,
        menus: data.menus.map((menu) => ({
          name: menu.name,
          price: menu.menuPrice,
          count: menu.menuQuantity
        }))
      };
    });

  return (
    <Wrapper>
      <SectionTitle>신청자현황</SectionTitle>
      <CardList>
        {participants.map((p, idx) => (
          <UserAcceptCard
            key={idx}
            name={p.name}
            date={p.date}
            menus={p.menus}

            // 수락 버튼을 눌렀을 때 실행
            onAccept={() => {
              const newAccept = true;

              db.collection("post")
                .doc(postId)
                .update({
                  [`menuList.${p.key}.accept`]: newAccept
                });

              //* 수락 시 상태 변경 로드
              setPost((prevPost) => ({
                ...prevPost,
                menuList: {
                  ...prevPost.menuList,
                  [p.key]: {
                    ...prevPost.menuList[p.key],
                    accept: newAccept
                  }
                }
              }));
            }}
          />
        ))}
      </CardList>
    </Wrapper>
  );
};

export default PostRequestContainer;



const Wrapper = styled.div`
  width: 393px;
  padding: 12px 0 20px 20px;
  background: #fafafa;
`;

const SectionTitle = styled.h2`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #202020;
  margin-bottom: 16px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;