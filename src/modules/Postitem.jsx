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
padding: 0 20px;
font-size: 13px;
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
  const {category="카테고리", storeName="음식점", post, title, content, onClick} = props;

  const Imgdata =[
    {id: 0, url:'https://i.namu.wiki/i/k1w5qzFr5A-UUVo0RhGHLp6n7HzoX5HvPXtt43x7LgsPMm9I8b5pmN2W6F0t1FjyLp1Tdm0ctsYdMyJ3OSsYfQ.webp'},
    {id: 1, url:'https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_2177082_20250403133606385.png'},
    {id: 2, url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9r-KrwjPCb5ZLq6XR-LF5Kwhh7dWAl-xQUkWNWqw9fSRvWwFIraW0vUGJDol8m0TZzg&usqp=CAU'},
    {id: 4, url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShD-4SqZ9PRCTmm2HLqUWg49924LPnXOHe2A&s'},
  ]

  const ImgList = Imgdata.map(
    (item)=>{
      return ( 
        <img key={item.id} src={item.url}></img>
      )
    }
  )

  return (
    <PostItemBox>
      <ItemHead><StoreName category={category} storeName={storeName}></StoreName><LikeBtn type="default"></LikeBtn></ItemHead>
      <h1 onClick={onClick}>{title}</h1>
      <p onClick={onClick}>{content}</p>
      <ImgUlBox onClick={onClick}>
        <ImgUl>
          {ImgList}
        </ImgUl>
      </ImgUlBox>
      <StyledBadge><StateBadge type="TotalAcount">00%</StateBadge></StyledBadge>
      <ItemBotton><Profile name="사용자" location="1기숙사" date="0000.00.00" fontSize="12px"></Profile></ItemBotton> 
    </PostItemBox>
  )
}

export default PostItem;