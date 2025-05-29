import styled from "styled-components";
import Modal from "./BottomModal";

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
    return (
        <Wrapper>{props.children}</Wrapper>
    )
}

export default ModalBg