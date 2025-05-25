import styled from "styled-components";
import CategoryBtn from "../src/components/CategoryBtn";
import PostItem from "../src/modules/Postitem";
import Device from "../src/layouts/Device";

const CategoryBox = styled.div`
width: 375px;
overflow-x: scroll;
background-color: #f8f8f8;
margin: 0;
padding: 15px 20px;
scrollbar-width: none;      
-ms-overflow-style: none;     

&::-webkit-scrollbar {
  display: none;       
}
`
const CategoryUl = styled.ul`
display: flex;
height: 32px;
margin: 0;
padding: 0;
gap: 8px;
white-space: nowrap;`

const PostBox =styled.div`
height: 588px;
overflow-y: scroll; 
scrollbar-width: none;      
-ms-overflow-style: none;     

&::-webkit-scrollbar {
  display: none;       
}
`
const PostUl =styled.div`
display: flex;
flex-direction: column;
padding: 12px 0;
gap: 20px;

`
const ContentBox=styled.div`
overflow-x: hidden;
`

function MainPage(props){


  const categorydata =[
    {id: 0, text:'전체'},
    {id: 1, text:'음식'},
    {id: 2, text:'음식'},
    {id: 3, text:'음식'},
    {id: 4, text:'음식'},
    {id: 5, text:'음식'},
    {id: 6, text:'음식'},
    {id: 7, text:'음식'},
    {id: 8, text:'음식'},
    {id: 9, text:'음식'},
    {id: 10, text:'음식'},
    {id: 11, text:'음식'},
  ]

  const CategoryList =  categorydata.map(
    (item)=>{
      return ( 
        <CategoryBtn key={item.id} text={item.text}></CategoryBtn>
      )
    }
  )

  const postdata =[
    {id: 0, title:'제목입니다', content:'내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.', user:'1', total:'1'},
    {id: 1, title:'제목입니다1', content:'내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.', user:'1', total:'1'},
    {id: 2, title:'제목입니다2', content:'내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.', user:'1', total:'1'},
    {id: 3, title:'제목입니다3', content:'내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.', user:'1', total:'1'},
    {id: 4, title:'제목입니다4', content:'내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.', user:'1', total:'1'},
    {id: 5, title:'제목입니다5', content:'내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.', user:'1', total:'1'},
  ]

  const PostList = postdata.map(
    (item)=>{
      return ( 
        <PostItem key={item.id} title={item.title}  content={item.content}  user={item.user}  total={item.total}></PostItem>
      )
    }
  )

  return (
    <Device headerType="main" gnbType="gnb">
    <ContentBox>
    <CategoryBox>
      <CategoryUl>
      {CategoryList}
      </CategoryUl>
    </CategoryBox>
    <PostBox>
      <PostUl>
        {PostList}
      </PostUl>
    </PostBox>
    </ContentBox>

    </Device>
  )
}

export default MainPage