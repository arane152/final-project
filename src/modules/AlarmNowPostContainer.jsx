import styled from "styled-components"
import StoreName from "./StoreName"
import StatusBar from "../components/StatusBar"
import SubBtn from "../components/SubBtn"
import { useNavigate } from "react-router-dom";
const StyledContainer = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
gap: 12px;
background-color: #f8f8f8;

& > p {
padding: 0;
margin: 0;
font-weight: 600;
coloe: #202020;}
`
const AlarmNowPostCard = styled.div`
background-color: #ffffff;
border-radius: 12px;
display: flex;
gap: 15px;
flex-direction: column;
padding: 12px;

& > div {
justify-content: start;
}
`
const PostContents= styled.div`
display: flex;
flex-direction: column;
gap: 10px;
& > h1 {
line-height: 140%;
font-size: 16px;
font-weight: 600;
color: #202020;
padding: 0;
margin: 0;
}
& > p {
line-height: 140%;
font-size: 13px;
font-weight: 400;
color: #404040;
padding: 0;
margin: 0;
}
`

const StyledBTN= styled.div`
width: 100%;
display: flex;
justify-content: center;
overflow: auto;

& > div {
width: 100%;
}
`

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

//Alarmpage 컨테이너 모듈
function AlarmNowPostContainer(props){
  const navigate = useNavigate();
  const {post} = props;

  return (
    <StyledContainer onClick={()=>navigate(`/post/${post.postId}`)}>
      <p>현재 참여중인 모집게시글입니다.</p>
      <AlarmNowPostCard>
        <StoreName storeId={post.storeId}></StoreName>
        <PostContents>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </PostContents>
        <CardBottom>
          <StatusBar type="alarm" post={post} totalSum={"40000"}></StatusBar>
          <StyledBTN><SubBtn text="바로가기 ->" ></SubBtn></StyledBTN>
        </CardBottom>
      </AlarmNowPostCard>
    </StyledContainer>
  )}

export default AlarmNowPostContainer