import React from "react";
import styled from "styled-components";
import Notification from "./Notification";
import RecruitingBtn from "./RecruitingBtn";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({ type = "default", title = "함께먹기", location = "1기숙사" }) => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        {type === "default" && (
          <>
            <LeftSection>
              <FontAwesomeIcon icon={faFireFlameCurved} size="lg" color="#FF6232" />
              <Title>{title}</Title>
              <Location>
                <FontAwesomeIcon icon={faLocationDot} size="sm" />
                <LocationText>{location}</LocationText>
              </Location>
            </LeftSection>
            <RightSection>
              <Notification />
            </RightSection>
          </>
        )}

        {type === "alert" && (
          <>
            <LeftSection>
              <BackIcon>
                <FontAwesomeIcon icon={faChevronLeft} size="sm" />
              </BackIcon>
              <Title>{title}</Title>
            </LeftSection>
          </>
        )}

        {type === "search" && (
          <>
          <LeftSection>
            <BackIcon>
              <FontAwesomeIcon icon={faChevronLeft} size="sm" />
            </BackIcon>
            <SearchBar>
              <SearchInput placeholder="검색어를 입력하세요" />
              <FontAwesomeIcon icon={faSearch} size="sm" color="#666" />
            </SearchBar>
          </LeftSection>
          </>
        )}

        {type === "recruit" && (
          <>
            <LeftSection>
              <BackIcon>
                <FontAwesomeIcon icon={faChevronLeft} size="sm" color="#202020"/>
              </BackIcon>
              <Title>{title}</Title>
            </LeftSection>
            <RightSection>
              <RecruitingBtn />
            </RightSection>
          </>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 393px;
  height: 113px;
  background: white;
  box-shadow: 0 2px 4px rgba(128, 128, 128, 0.1);
  font-family: 'Pretendard', sans-serif;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 69px 16px 0 16px;
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex:1;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #202020;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #606060;
`;

const LocationText = styled.span`
  margin-left: 4px;
`;

const Logo = styled.div`
  font-size: 20px;
`;

const BackIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #202020;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f8f8f8;
  border-radius: 8px;
  padding: 8px 12px;
  flex: 1;
  gap: 8px;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  font-size: 14px;
  color: #202020;
  flex: 1;
  outline: none;

  &::placeholder {
    color: #aaaaaa;
  }
`;
