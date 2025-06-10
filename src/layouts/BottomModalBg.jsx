import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
    width: 393px;
    height: 852px;
    background-color: rgba(0, 0, 0, 0.6);
`

function ModalBg(props) {
    // props.children: 모달 내부에 들어갈 컴포넌트들
    // 모달 배경을 어둡게 처리하는 컴포넌트
    return (
        <Wrapper onClick={props.bgOnClick}>{props.children}</Wrapper>
    )
}

export default ModalBg