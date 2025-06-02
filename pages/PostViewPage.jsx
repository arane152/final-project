import Device from "../src/layouts/Device";
import PostImage from "../src/components/PostImage";
import PostConatiner from "../src/modules/PostContainer";
import PostMenuConatiner from "../src/modules/PostMenuContainer";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// firebase db
import {db} from '/src/firebase.js'

import Modal from "../src/layouts/BottomModal";
import ModalBg from "../src/layouts/BottomModalBg";

import MenuDefault from "../src/components/MenuDefault";
import TotalAmount from "../src/components/TotalAmount";


function PostViewPage(props) {
    const navigate = useNavigate();

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
      }, [])

    // props.userType : 유저 타입 (글쓴이 : "writer" / 참여자 : "")
    if (props.userType == "writer") {
        return (
            <Device content="함께먹기" headerType="" gnbType="btn" btnType="dubble" btnMainText="모집종료" btnSubText="신청현황" backPage="/" subPage="participation">
                {/* <Modal background="" modalText="주문확정" btnType="default" mainText="모집종료하고 알림보내기">
                    <MenuDefault type="info"></MenuDefault>
                    <MenuDefault type="info"></MenuDefault>
                    <TotalAmount title="총액"></TotalAmount>
                </Modal>
                <ModalBg></ModalBg> */}
                <PostImage></PostImage>
                <PostConatiner postTitle="post 제목" postContent="post 내용"></PostConatiner>
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
            </Device>
        )
    }
    else {
        return (
            <Device content="함께먹기" headerType="" gnbType="btn" btnType="default" btnMainText="신청하기" backPage="/">
                <PostImage></PostImage>
                <PostConatiner postTitle="post 제목" postContent="post 내용"></PostConatiner>
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
            </Device>
        )
    }

}

export default PostViewPage