import styled from "styled-components";
import Device from "../src/layouts/Device";
import InfoArea from "../src/modules/InfoArea";
import OderMenuArea from "../src/modules/OrderMenuArea";

function PostWritePage(props) {
    return(
        <Device content="모집글쓰기" headerType="" gnbType="btn" btnType="default" btnMainText="모집글 올리기">
            <InfoArea></InfoArea>
            <OderMenuArea></OderMenuArea>
        </Device>
    )
}

export default PostWritePage