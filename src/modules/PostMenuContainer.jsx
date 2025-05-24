import styled from "styled-components";

import TotalAmount from "../components/TotalAmount";
import SubBtn from "../components/SubBtn";

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

const PostMenuAdd = styled.div`
    display: flex;
    width: 353px;
    height: 184px;
    flex-direction: column;
    gap: 12px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #FFFFFF;
    justify-content: space-between;
    align-items: center;
`

const PostMenuAddTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 313px;
    height: 32px;
    justify-content: space-between;
    align-items: center;
`

const PostMenuAddTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #202020;
`

function PostMenuConatiner(props) {
    if (props.userType == "writer") {
        return (
            <PostMenuWrapper>
                <PostMenuTitle>메뉴현황</PostMenuTitle>
                <TotalAmount title="메뉴총액"></TotalAmount>
            </PostMenuWrapper>
        )
    }
    else {
        return (
            <PostMenuWrapper>
                <PostMenuTitle>메뉴현황</PostMenuTitle>
            </PostMenuWrapper>
        )
    }

}

export default PostMenuConatiner