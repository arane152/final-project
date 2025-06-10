import styled from "styled-components";
import { keyframes } from "styled-components";

import Gnb from "./Gnb";
import MainBtn from "../components/MainBtn";

const moveUp = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
`;

const Wrapper = styled.div`
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

    animation: ${moveUp} 0.3s ease-in-out forwards;
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
    // props.modalText : 모달 상단에 표시될 텍스트
    // props.background : 모달 내용의 배경색 (기본값: gray)
    // props.btnType : 버튼 타입 (기본값: "main")
    // props.mainText : 버튼에 표시될 텍스트
    // props.modalOnClick : 버튼 클릭 시 실행될 함수
    // props.children : 모달 내용에 표시될 컴포넌트들
    return (
        <Wrapper>
            <ModalTopWrapper onClick={props.modalTopOnClick}>
                <ModalTopVector></ModalTopVector>
                <ModalTopText>{props.modalText}</ModalTopText>
                <ModalTopStroke></ModalTopStroke>
            </ModalTopWrapper>
            <ModalContent background={props.background || "gray"}>
                {props.children}
            </ModalContent>
            <Gnb type="btn">
                <MainBtn type={props.btnType} mainText={props.mainText} modalOnClick={props.modalOnClick}></MainBtn>
            </Gnb>
        </Wrapper>
    )
}

export default Modal