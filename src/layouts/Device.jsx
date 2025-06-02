import { Children } from "react";
import styled from "styled-components";

import Header from "./Header";
import Gnb from "./Gnb";
import MainBtn from "../components/MainBtn";

const DeviceWrapper = styled.div`
    display: flex;
    position: relative;
    width: 393px;
    height: 852px;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    align-items: center;
    overflow-y: auto;
    background-color: #ffffff;
`

const ContentWrapper = styled.div`
    display: block;
    width: 393px;
    height: ${props => props.gnbtype == "none" ? "738px" : "638px"};
    margin: 0;
    overflow-y: scroll;
    scrollbar-width: none;      
    -ms-overflow-style: none;     

    &::-webkit-scrollbar {
        display: none;       
    }
`

function Device(props) {
    // 페이지 만들때, 디바이스 크기 및 header와 gnb를 포함하는 레이아웃
    // 사용 방법
    // 1. 페이지에 Device.jsx를 import 한다
    // 2. Device의 props를 입력한다
    // 3. <Device></Device>안에 컴포넌트 및 모듈들을 넣는다
    // 
    // props 정리
    // props.headerType : Header.jsx의 type (메인 : "main" / 서치 : "search" / 기본 : "")
    // props.content : Header.jsx의 type이 "기본"일 때, 표시되는 페이지 이름
    // props.gnbType : Gnb.jsx의 type (gnb : "gnb" / 버튼 : "btn")
    // props.btnType : Gnb.jsx의 type이 "btn"일때, 표시되는 버튼의 타입 (default : "default" / disable : "disable" / dubble : "dubble")
    // props.btnMainText : Gnb.jsx의 type이 "btn"일 떄, 표시되는 메인 버튼의 내용
    // props.btnSubText : Gnb.jsx의 type이 "btn"이고, btnType이 "dubble"일 때, 표시되는 서브 버튼의 내용
    // props.backPage : Header의 type이 메인이고 backBtn이 있는 header일 때, backBtn을 눌렀을 때 이동되는 페이지 경로
    // props.mainPage : Gnb의 MainBtn을 눌렀을 때 이동되는 페이지 경로 -> MainBtn의 역할이 바뀌면 해당 props의 이름도 바뀌어야함
    // props.subPage : Gnb의 SubBtn을 눌렀을 때 이동되는 페이지 경로
    return (
        <DeviceWrapper>
            <Header content={props.content} type={props.headerType || ""} navigatePage={props.backPage}></Header>
            <ContentWrapper gnbtype={props.gnbType || "none"}>
                {props.children}
            </ContentWrapper>
            <Gnb type={props.gnbType || "none"}>
                <MainBtn type={props.btnType} mainText={props.btnMainText} subText={props.btnSubText}  modalOnClick={props.modalOnClick}></MainBtn>
            </Gnb>
        </DeviceWrapper>
    )
}

export default Device