import styled from "styled-components";
import { useState } from "react";
const StyledHeader = styled.div`
height: 113px;
width: 393px;
margin: 0;
padding: 0;
background-color: #ffffff;
/* shadow: 0px 4px 4px 0px rgba(128, 128, 128, 10%); */
// position: fixed;
top: 0;
left: 0;
`
const StyledContent = styled.div`
height: 59px;
width: 393px;
box-sizing: border-box;
padding: 0px 20px;
font-size: 16px;
font-weight: 600;
color: #202020;

& > div{
display: flex;
align-items: center;
gap: 8px;
height: 100%;
}

& > div > span {
display: flex;
align-items: center;
flex: 1 1 auto;
color: #606060;
font-size: 14px;
font-weight: 400;
}
& > div > button {
background: none;
border: none;
color: #202020;
padding: 0;
margin: 0;
width: 24px;
height: 24px;}
`
const PageMargin = styled.div`
height: 113px;

`
const SearchBar = styled.div`
  flex: 1 1 auto;
  background-color: #f8f8f8;
  border-radius: 8px;
  display: flex;
  height: 44px;
  padding: 12px;
  align-items: center;
  box-sizing: border-box;
  gap: 8px;
  
  & > textarea{
  overflow-x: auto;         
  overflow-y: hidden; 
  white-space: nowrap; 
  flex: 1 1 auto;
  resize: none;
  border: none;
  outline: none;  
  background: none;
  scrollbar-width: none;        
  -ms-overflow-style: none;    
  height: 100%;              
  line-height: 20px;   
  font-weight: 500;
  color: #404040;
  padding: 0;          
  margin: 0;
  font-size: 14px; 

}
& > textarea:placeholder{
color: #AAAAAA;
}

  & > textarea:-webkit-scrollbar {
    display: none;
  }

  & > textarea:focus{
  border: none;
  outline: none;}
`
function Header(props){
  const {type, content, onFunction, location} = props;
  const [text, setText] = useState("")
  return (
  <><StyledHeader>
    <img src="/StatusBar.svg" alt="스테이터스바목업이미지"></img>
    <StyledContent>
      {/* type props가 main인지 판단, 맞다면 main출력 -> 아니라면 search 인지 판단, 맞다면 search 출력 -> 아니라면 기본값 출력  */}
      {type == "main" ? (<div><img src="/Logo.svg" alt="서비스로고"></img><p>{content || "함께먹기"}</p><span><img src="/LocationIcon.svg" alt="위치핀아이콘"></img>{location || "1기숙사"}</span><button onClick={onFunction}><img src="/AlarmIcon.svg"></img></button></div>) 
        : (type == "search" ? <div><img src="/BackArrowIcon.svg" alt="뒤로가기아이콘"></img><SearchBar><textarea placeholder="검색어를 입력하세요" value={text}
        onChange={(e) => setText(e.target.value)}></textarea>{text ? <img src="/SearchCancelIcon.svg" alt="검색삭제아이콘" onClick={() => setText("")}></img>: <img src="/SearchIcon.svg" alt="검색아이콘"></img>}</SearchBar></div> 
          : <div><img src="/BackArrowIcon.svg" alt="뒤로가기아이콘"></img>{content || "페이지명"}</div>
        )
      }
    </StyledContent>
  </StyledHeader>
  {/* position: fixed 등 안쓸거면 PageMargin은 제거거 */}
  <PageMargin></PageMargin></>)
}


export default Header