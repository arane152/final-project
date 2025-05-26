import styled from "styled-components";
import StateBadge from "./StateBadge";

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

const Avatar = styled.div`
  width: 24px;
  height: 24px;
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
  font-size: 14px;
  font-weight: 500;
  color: #222;
`;

const Location = styled.div`
  font-size: 12px;
  color: #aaa;
`;

const Badge = styled.div`
  font-size: 12px;
  color: #ff6232;
  background: #ffe1dc;
  padding: 2px 8px;
  border-radius: 100px;
  font-weight: 600;
`;

const DateText = styled.div`
  font-size: 12px;
  color: #aaa;
`;

const Profile = ({ name, location, date, badge }) => {
  return (
    <ProfileContainer>
      <Left>
        <Avatar />
        <NameBlock>
          <Name>{name}</Name>
          {location && <Location>{location}</Location>}
          {badge && <StateBadge type="Captain"></StateBadge>}
        </NameBlock>
        {/* {badge && <Badge>{badge}</Badge>} */}
      </Left>
      {date && <DateText>{date}</DateText>}
    </ProfileContainer>
  );
};

export default Profile;