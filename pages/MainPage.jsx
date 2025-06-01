import styled from "styled-components";
import CategoryBtn from "../src/components/CategoryBtn";
import PostItem from "../src/modules/Postitem";
import Device from "../src/layouts/Device";
import CategoryBox from "../src/modules/MainCategoryBox";
import PostBox from "../src/modules/MainPostBox";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// firebase db
import {db} from '/src/firebase.js'

import { useCategory } from "../context/CategoryContext";

const ContentBox=styled.div`
overflow-x: hidden;
`

const StyledBtn=styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
`
function MainPage(props){
  const navigate = useNavigate();


  //카테고리 함수
  const [nowCategory, setCategory] = useState('전체');

  const {categoryData} = useCategory();

  const CategoryList =  categoryData.map(
    (item)=>{
      return ( 
        <StyledBtn key={item.id}  onClick={() => setCategory(item.name)}>
          <CategoryBtn 
            text={item.name}
            type={nowCategory === item.name ? 'toggle' : ''}>
          </CategoryBtn>
        </StyledBtn>
      )
    }
  )


  //포스트함수
  // firebase data state
  const [data, setData] = useState([])
  // firebase
  useEffect(()=>{
    // post 임시 저장 장소
    let tempDataPost = []
    // post 불러오기
    db.collection('post').get().then((qs)=>{
      qs.forEach((doc)=>{
        tempDataPost.push(doc.data())
      })
      // const filteredPost = tempData.filter(
      //   (item) => item.
      // );
      setData(tempDataPost)
      // 테스트용 콘솔로그
      // console.log(tempDataPost)
    })
  }, [nowCategory])

  const PostList = data.map(
    (item)=>{
      return ( 
        <PostItem onClick={()=>navigate(`/post`)} key={item.postId} post={item} image={item.image}></PostItem>
      )
    }
  )




  return (
    <Device headerType="main" gnbType="gnb">
    <ContentBox>
      <CategoryBox>          
        <StyledBtn onClick={() => setCategory('전체')}><CategoryBtn 
            text={'전체'}
            type={nowCategory === '전체' ? 'toggle' : ''}>
          </CategoryBtn></StyledBtn>
          {CategoryList}</CategoryBox>
      <PostBox>{PostList}</PostBox>
    </ContentBox>

    </Device>
  )
}

export default MainPage