import styled from "styled-components";

import StateBadge from "./StateBadge";

import { useUser } from "../../context/UserContext";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.img`
  width: ${props=>props.fontSize == "12px" ? "20px" : "24px"};
  height: ${props=>props.fontSize == "12px" ? "20px" : "24px"};
  background: #eeeeee;
  border-radius: 50%;
`;

const NameBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const Name = styled.div`
  font-size: ${props=>props.fontSize};
  font-weight: 500;
  color: #202020;
`;

const Location = styled.div`
  font-size: ${props=>props.fontSize};
  font-weight: 300;
  color: #202020;
`;

const DateText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #aaa;
`;


//fontSize : 12px일시 작은버전, 기입 안할시 14px버전을 기본값으로 출력.

//사용법 1. userId 기입
//사용법 2. name, src : 사용자정보 기입

//location, date, badge, : 각각 필요한 페이지일시 props 기입, 기입안할시 없는 버전으로 출력
const Profile = (props) => {

  const { userListData } = useUser();
  const { name,  src, userId, location, date, badge, fontSize, } = props;
  const matchedUser = userListData.find((user) => user.userId == userId); 

  //postId가 timestamp인걸 이용하여 작성시간 계산
  const posttime = new Date(parseInt(date));
  const mm = String(posttime.getMonth() + 1).padStart(2, '0');
  const dd = String(posttime.getDate()).padStart(2, '0');
  const hh = String(posttime.getHours()).padStart(2, '0');
  const min = String(posttime.getMinutes()).padStart(2, '0');
  const formatted = `${mm}월${dd}일 ${hh}:${min}`;

  return (
    <ProfileContainer>
      <Left>
        <Avatar 
          src={matchedUser?.profile || src || "/final-project/UserBasic.svg"} 
          fontSize={fontSize || "14px"}
        />
        <NameBlock>
          <Name fontSize={fontSize || "14px"}>
            {matchedUser?.name || name}
          </Name>
          {matchedUser?.location && 
            <Location fontSize={fontSize || "14px"}>
              {matchedUser?.location || location}
            </Location>
          }
          {badge && <StateBadge type="Captain"></StateBadge>}
        </NameBlock>
      </Left>

      {date && <DateText>{formatted}</DateText>}
    </ProfileContainer>
  );
};

export default Profile;