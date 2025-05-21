import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell as faBellRegular } from "@fortawesome/free-regular-svg-icons";


const Notification = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <FontAwesomeIcon icon={faBellRegular} size="lg" />
    </Wrapper>
  );
};

export default Notification;

const Wrapper = styled.button`
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #202020;
`;
