import styled from "styled-components"
import StoreName from "./StoreName"
import StatusBar from "../components/StatusBar"
import SubBtn from "../components/SubBtn"

const StyledContainer = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
gap: 12px;
background-color: #f8f8f8;


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

const StyledStatusBar= styled.div`
& > div{
width: 100%;
}

`
function AlarmNowPostContainer(props){
  const {category="카테고리", storeName="음식점", post} = props;
  const { title="제목", content="내용"} = post || {};

  return (<StyledContainer>
  <p>현재 참여중인 모집게시글입니다.</p>
  <AlarmNowPostCard>
    <StoreName category={category} storeName={storeName}></StoreName>
    <PostContents>
      <h1>{title}</h1>
      <p>{content}</p>
    </PostContents>
    <StyledStatusBar><StatusBar type="simple"></StatusBar></StyledStatusBar>
    <StyledBTN><SubBtn text="바로가기 ->"></SubBtn></StyledBTN>
  </AlarmNowPostCard>
  </StyledContainer>)}

export default AlarmNowPostContainer