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
  const [nowCategory, setCategory] = useState('전체');

  // firebase data state
  const [data, setData] = useState([])
  const [ storeData, setStoreData ] = useState([])
  // firebase
  useEffect(()=>{
    // post 임시 저장 장소
    let tempDataPost = []
    // post 불러오기
    db.collection('post').get().then((qs)=>{
      qs.forEach((doc)=>{
        tempDataPost.push(doc.data())
      })
      setData(tempDataPost)
      // 테스트용 콘솔로그
      // console.log(tempDataPost)
    })
    let tempDataStore = []
    // store 불러오기
    db.collection('store').get().then((qs)=>{
      qs.forEach((doc)=>{
        tempDataStore.push(doc.data())
      })
      setStoreData(tempDataStore)
    })
    // user 임시 저장 장소
    let tempDataUser = []
    // user 불러오기
    // db.collection('user').get().then((qs)=>{
    //   qs.forEach((doc)=>{
    //     tempDataUser.push(doc.data())
    //   })
    //   setData(tempDataUser)
    //   // 테스트용 콘솔로그
    //   console.log(tempDataUser)
    // })
  }, [])

  const PostList = data.map(
    (item)=>{
      return ( 
        <PostItem onClick={()=>navigate(`/post`)} key={item.postId} post={item} image={item.image}></PostItem>
      )
    }
  )

  // const categorydata =[
  //   {id: 0, text:'전체'},
  //   {id: 1, text:'음식1'},
  //   {id: 2, text:'음식2'},
  //   {id: 3, text:'음식3'},
  //   {id: 4, text:'음식4'},
  //   {id: 5, text:'음식5'},
  //   {id: 6, text:'음식6'},
  //   {id: 7, text:'음식7'},
  //   {id: 8, text:'음식8'},
  //   {id: 9, text:'음식9'},
  //   {id: 10, text:'음식10'},
  //   {id: 11, text:'음식11'},
  // ]

  // const CategoryList =  categorydata.map(
  //   (item)=>{
  //     return ( 
  //       <StyledBtn onClick={() => setCategory(item.text)}>
  //         <CategoryBtn 
  //           key={item.id} 
  //           text={item.text}
  //           type={nowCategory === item.text ? 'toggle' : ''}>
  //         </CategoryBtn>
  //       </StyledBtn>
  //     )
  //   }
  // )



  return (
    <Device headerType="main" gnbType="gnb">
    <ContentBox>
      {/* <CategoryBox>{CategoryList}</CategoryBox> */}
      <PostBox>{PostList}</PostBox>
    </ContentBox>

    </Device>
  )
}

export default MainPage