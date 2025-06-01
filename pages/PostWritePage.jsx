import styled from "styled-components";
import Device from "../src/layouts/Device";
import InfoArea from "../src/modules/InfoArea";
import OderMenuArea from "../src/modules/OrderMenuArea";

function PostWritePage(props) {
    // 현재 postWritePage에서 storeSearchPage로 넘어갔을때, write page에 적어두었던 모든 정보들이 사라지는 문제가 있습니다. 추후 해결할 예정입니다.
    return(
        <Device 
        content="모집글쓰기" 
        headerType="" 
        gnbType="btn" 
        btnType="default" 
        btnMainText="모집글 올리기" 
        backPage="/">
            <InfoArea></InfoArea>
            <OderMenuArea></OderMenuArea>
        </Device>
    )
}

export default PostWritePage