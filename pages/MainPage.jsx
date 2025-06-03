import styled from "styled-components";
import CategoryBtn from "../src/components/CategoryBtn";
import PostItem from "../src/modules/Postitem";
import Device from "../src/layouts/Device";
import CategoryBox from "../src/modules/MainCategoryBox";
import PostBox from "../src/modules/MainPostBox";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// firebase db
import {db} from '/src/firebase.js';

import { useCategory } from "../context/CategoryContext";
import { useStore } from '../context/StoreContext';
import { usePost } from '../context/PostContext';
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

  const {postData} = usePost();
  const {categoryData} = useCategory();
  const {storeData} = useStore();

  //카테고리 함수
  const [nowCategory, setCategory] = useState('전체');

  const CategoryList =  categoryData.map(
    (item)=>{
      return ( 
        <StyledBtn key={item.id} onClick={() => setCategory(item.name)}>
          <CategoryBtn 
            text={item.name}
            type={nowCategory === item.name ? 'toggle' : ''}>
          </CategoryBtn>
        </StyledBtn>
      )
    }
  )
  //포스트함수
  const [data, setData] = useState([])
  useEffect(()=>{
    // post 불러오기
    if(nowCategory != '전체'){
      const filteredPost = postData.filter((item) => {
        const store = storeData.find((store) => store.id === item.storeId);
        if (!store) return false;

        const category = categoryData.find((category) => category.id === store.categoryId);
        if (!category) return false;

        return category.name === nowCategory;
      });
      setData(filteredPost)
    }else{
      setData(postData)
    }
  }, [nowCategory, postData])

  const PostList = data.map(
    (item)=>{
      return ( 
        // <PostItem onClick={()=>navigate(`/post`)} key={item.id} post={item} image={item.image}></PostItem>
        //PostViewPage 데이터연결 완료시 하단문장으로 변경
        <PostItem onClick={()=>navigate(`/post/${item.postId}`)} key={item.postId} post={item} image={item.image}></PostItem>
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