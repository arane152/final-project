import styled from "styled-components";
import StoreName from "./StoreName";
import LikeBtn from "../components/LikeBtn";
import Profile from "../components/Profile";
import StateBadge from "../components/StateBadge";

const ItemHead = styled.div`
padding: 0 20px;
display: flex;
justify-content: space-between;
color: #202020;`

const PostItemBox= styled.div`

padding-bottom: 20px;
border-bottom: 1px solid #eeeeee;
& > h1{
padding: 0 20px;
margin-top: 20px;
margin-bottom: 10px;
font-size: 16px;
color: #202020;
font-weight: 700;
cursor: pointer;
}
& > p{
margin: 0;
padding: 0 20px;
font-size: 13px;
line-height: 100%;
height: 13px;
white-space: nowrap;        
overflow: hidden;          
text-overflow: ellipsis; 

color: #404040;
font-weight: 400;
cursor: pointer;
}
`
const ImgUlBox = styled.div`

margin-top: 16px;
margin-bottom: 12px;
height: 200px;
overflow-x: scroll;
scrollbar-width: none;      
-ms-overflow-style: none;   
cursor: pointer;  

&::-webkit-scrollbar {
  display: none;       
}
`
const ImgUl = styled.ul`
box-sizing: border-box;
display: flex;
gap: 10px;
margin: 0;
padding: 0 20px;

  & > img{
  background-color: #f8f8f8;
  min-width: 353px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  }

  &::after {
    content: '';
    flex: 0 0 10px;
  }
`
const ItemBotton=styled.div`
padding: 0 20px;`

const StyledBadge=styled.div`
height: 0px;
position: relative;
text-align: right;
right: 30px;
bottom: 44px;
`
function PostItem(props){
  const {post, onClick} = props;



  return (
    <PostItemBox>
      <ItemHead><StoreName storeId={post.storeId}></StoreName><LikeBtn type="default"></LikeBtn></ItemHead>
      <h1 onClick={onClick}>{post.title}</h1>
      <p onClick={onClick}>{post.content}</p>
      <ImgUlBox onClick={onClick}> 
        <ImgUl><img src={post.image || "./PostImgBasic.svg"}></img></ImgUl>
      </ImgUlBox>
      <StyledBadge><StateBadge type="TotalAcount">00%</StateBadge></StyledBadge>
      <ItemBotton><Profile name="사용자" location="1기숙사" date="0000.00.00" fontSize="12px"></Profile></ItemBotton> 
    </PostItemBox>
  )
}

export default PostItem;