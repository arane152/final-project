import styled from "styled-components";

import TotalAmount from "../components/TotalAmount";
import MenuDefault from "../components/MenuDefault";
import MenuAdd from "../components/MenuAdd";


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


    if (props.userType == "writer") {
        return (
            <PostMenuWrapper>
                <PostMenuTitle>{props.title || "참여현황"}</PostMenuTitle>
                    {props.children}
                <TotalAmount title="총액" totalAmount={props.totalAmount}></TotalAmount>
            </PostMenuWrapper>
        )
    }
    else {
        return (
            <PostMenuWrapper>
                <PostMenuTitle>{props.title || "참여현황"}</PostMenuTitle>
                <MenuDefault></MenuDefault>
                <MenuDefault></MenuDefault>
                <MenuAdd></MenuAdd>
            </PostMenuWrapper>
        )
    }

}

export default PostMenuConatiner