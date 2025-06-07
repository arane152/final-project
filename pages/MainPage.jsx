import styled from "styled-components";
import CategoryBtn from "../src/components/CategoryBtn";
import PostItem from "../src/modules/Postitem";
import Device from "../src/layouts/Device";
import CategoryBox from "../src/modules/MainCategoryBox";
import PostBox from "../src/modules/MainPostBox";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
  //데이터
  const navigate = useNavigate();
  const {postData} = usePost();
  const {categoryData} = useCategory();
  const {storeData} = useStore();

  //카테고리 함수
  const [nowCategory, setCategory] = useState('전체');

  //카테고리배열을 map형식으로 정리
  const CategoryList = categoryData.map(
    (item)=>{
      return ( 
        <StyledBtn 
          key={item.id} 
          onClick={() => setCategory(item.name)}>
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
    // 현재 카테고리 != "전체" 일 경우, 필터링된 배열 추출
    if(nowCategory != '전체'){
      //각 문서의 카테고리 name을 얻기 위한 필터링 시작
      const filteredPost = postData.filter((item) => { 
        //1. Post컬렉션의 각 문서에서 storeId를 추출, 
        //store컬렉션의 문서id와 대치
        const store = 
          storeData.find((store) => store.id === item.storeId);
        //store 랜더링 중 오류방지
        if (!store) return false; 
        //대치된 store컬렉션의 문서에서 categoryId를 추출, 
        //category 컬렉션의 id를 대치
        const category = 
          categoryData.find((category) => category.id === store.categoryId);
        //category 랜더링 중 오류방지
        if (!category) return false;
        //이렇게 얻어낸 각 문서의 카테고리 name 들을 이용해해
        //현재 select된 카테고리가 동일한 문서만 필터링 
        return category.name === nowCategory;
      });
      //필터링된 데이터 적용
      setData(filteredPost)
    }else{
    // 현재 카테고리 == "전체" 일 경우, 필터링 없는 배열사용
      setData(postData)
    }
  }, [nowCategory, postData])

  //각 Post 클릭시 해당하는 postview페이지로 이동
  const PostList = data.map(
    (item)=>{
      return ( 
        <PostItem 
          onClick={()=>navigate(`/post/${item.postId}`)} 
          key={item.postId} 
          post={item} 
          image={item.image}>
        </PostItem>
      )
    }
  )

  return (
    <Device headerType="main" gnbType="gnb">
      <ContentBox>
        <CategoryBox>
            {/* 전체버튼 */}
            <StyledBtn 
              onClick={() => setCategory('전체')}>
                <CategoryBtn 
                    text={'전체'}
                    type={nowCategory === '전체' ? 'toggle' : ''}>
                </CategoryBtn>
            </StyledBtn>
            {/* 나머지버튼 */}
            {CategoryList}
        </CategoryBox>
        <PostBox>
          {PostList}
        </PostBox>
      </ContentBox>
    </Device>
  )
}

export default MainPage