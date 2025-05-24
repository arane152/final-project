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
    /* flex-direction: column; */
    /* justify-content: flex-start; */
    margin: 0;
    /* align-items: center; */
    /* overflow-y: auto; */
    /* box-sizing: border-box; */
    /* flex-shrink: 0; */
`

const ContentWrapper = styled.div`
    display: block;
    width: 393px;
    height: 658px;
    margin: 0;
    overflow-y: scroll;
    scrollbar-width: none;      
    -ms-overflow-style: none;     
    
    &::-webkit-scrollbar {
        display: none;       
    }
`

function Device(props) {
    return (
        <DeviceWrapper>
            <Header content="함께모집"></Header>
            <ContentWrapper>
                {props.children}
            </ContentWrapper>
            <Gnb type="btn">
                <MainBtn type="dubble" mainText="모집종료" subText="신청현황"></MainBtn>
            </Gnb>
        </DeviceWrapper>
    )
}

export default Device