import styled from "styled-components";

import StoreName from "./StoreName";
import LikeBtn from "../components/LikeBtn";
import Profile from "../components/Profile";
import StatusBar from "../components/StatusBar";
import InfoBox from "../components/InfoBox";

const PostWrapper = styled.div`
    display: flex;
    width: 393px;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0px;
    gap: 20px;
`

const PostTop = styled.div`
    display: flex;
    width: 353px;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    gap: 4px;
`

const PostTopStoreInfo = styled.div`
    display: flex;
    width: 353px;
    height: 22px;
    flex-direction: row;
    justify-content: space-between;
`

const PostTitle = styled.p`
    height: 44px;
    font-size: 24px;
    font-weight: 700;
    color: #202020;
    margin-top: 8px;
    margin-bottom: 0;
`

const PostTopLine = styled.div`
    display: flex;
    width: 353px;
    height: 1px;
    border-radius: 1px;
    background-color: #EEEEEE;
`

const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 353px;
    height: 100px;
    justify-content: space-between;
    align-items: left;
    gap: 12px;
`

const PostContent = styled.p`
    display: flex;
    width: 353px;
    height: auto;
    font-size: 14px;
    font-weight: 400;
    color: #202020;
`

function PostConatiner (props) {
    // props.postTitle : 포스트 제목
    // props.postContent : 포스트 내용
    return (
        <PostWrapper>
            <PostTop>
                <PostTopStoreInfo>
                    <StoreName storeId={props.storeId}></StoreName>
                    <LikeBtn type="default"q></LikeBtn>
                </PostTopStoreInfo>
                <PostTitle>{props.postTitle}</PostTitle>
                <Profile name={props.name} date={props.date}/>
            </PostTop>
            <PostTopLine></PostTopLine>
            <PostInfo>
                <InfoBox title="수령장소" content={props.receiptLocation}></InfoBox>
                <InfoBox title="선입금" content={props.accountNumber} badge={props.deposite}></InfoBox>
            </PostInfo>
            <PostContent>{props.postContent}</PostContent>
            <StatusBar post={props.post} totalSum={props.totalSum}></StatusBar>
        </PostWrapper>
    )
}

export default PostConatiner