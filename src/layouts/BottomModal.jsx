import styled from "styled-components";

import Gnb from "./Gnb";
import MainBtn from "../components/MainBtn";

import ModalBg from "./BottomModalBg";

const Wrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    width: 393px;
    min-height: 356px;
    height: auto;
    flex-direction: column;
    border-radius: 20px 20px 0px 0px;
    background-color: #FFFFFF;
    margin: 0;
    z-index: 7;
`

const ModalTopWrapper = styled.div`
    display: flex;
    position: relative;
    width: 393px;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 12px 0px;
`

const ModalTopVector = styled.div`
    display: flex;
    width: 28px;
    height: 2px;
    border-radius: 2px;
    background-color: #AAAAAA;
`

const ModalTopStroke = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    width: 393px;
    height: 1px;
    background-color: #EEEEEE;
`

const ModalTopText = styled.p`
    display: flex;
    width: auto;
    height: 22px;
    font-size: 16px;
    font-weight: 600;
    color: #202020;
    margin: 0;
`

const ModalContent = styled.div`
    display: flex;
    width: 393px;
    min-height: 170px;
    height: auto;
    background-color: ${props => props.background == "white" ? "#FFFFFF" : "#F8F8F8"};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 16px 0px;
    margin-bottom: 100px;
`

function Modal(props) {
    // props.background : <ModalContent>의 background-color (gray : "" / white : "white")
    // props.btnType : 메인 버튼 타입
    // props.mainText : 메인 버튼 텍스트
    // props.modalText : 모달 상단 텍스트
    // props.openModal : 모달 오픈
    return (
        <Wrapper>
            <ModalTopWrapper>
                <ModalTopVector></ModalTopVector>
                <ModalTopText>{props.modalText}</ModalTopText>
                <ModalTopStroke></ModalTopStroke>
            </ModalTopWrapper>
            <ModalContent background={props.background || "gray"}>
                {props.children}
            </ModalContent>
            <Gnb type="btn">
                <MainBtn type={props.btnType} mainText={props.mainText} modalOnClick={props.openModal}></MainBtn>
            </Gnb>
        </Wrapper>
    )
}

export default Modal