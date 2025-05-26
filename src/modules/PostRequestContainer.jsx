import styled from "styled-components";
import UserAcceptCard from "./UserAcceptCard";


const PostRequestContainer = ({ applicants = [] }) => {
  return (
    <Wrapper>
      <SectionTitle>신청자현황</SectionTitle>
      <CardList>
        {applicants.map((applicant, idx) => (
          <UserAcceptCard
            key={idx}
            name={applicant.name}
            date={applicant.date}
            menus={applicant.menus}
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