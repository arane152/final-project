import styled from "styled-components";

import TotalAmount from "../components/TotalAmount";

const PostMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 393px;
    height: auto;
    background-color: #F8F8F8;
    gap: 12px;
    padding-top: 12px;
    padding-bottom: 20px;
    justify-content: space-between;
    align-items: center;
`

const PostMenuTitle = styled.div`
    display: flex;
    width: 353px;
    height: 46px;
    font-size: 16px;
    font-weight: 700;
    color: #202020;
`

function PostMenuConatiner(props) {
    return (
        <PostMenuWrapper>
            <PostMenuTitle>메뉴현황</PostMenuTitle>
            <TotalAmount title="메뉴총액"></TotalAmount>
        </PostMenuWrapper>
    )
}

export default PostMenuConatiner