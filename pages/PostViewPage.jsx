import Device from "../src/layouts/Device";
import PostImage from "../src/components/PostImage";
import PostConatiner from "../src/modules/PostContainer";
import PostMenuConatiner from "../src/modules/PostMenuContainer";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// firebase db
import { db } from '/src/firebase.js'

import Modal from "../src/layouts/BottomModal";
import ModalBg from "../src/layouts/BottomModalBg";

import MenuDefault from "../src/components/MenuDefault";
import TotalAmount from "../src/components/TotalAmount";


function PostViewPage(props) {
    //포스트함수
    // firebase data state
    const postId = 'postId(1)';
    const [post, setPost] = useState([])

    // firebase
    useEffect(() => {
        db.collection('post').doc(postId).get().then((doc) => {
            setPost(doc.data())
            console.log(doc.data())
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
                <PostImage postImage={post.image}></PostImage>
                {/* <PostConatiner postTitle={post.title} postContent={post.content} date={post.date} name={post.writer?.[1]}></PostConatiner> */}
                {post && (
                    <PostConatiner
                        postTitle={post.title}
                        postContent={post.content}
                        date={post.date}
                        name={post.writer?.[1]}
                        receiptLocation={post.receiptLocation}
                        accountNumber={post.writer?.[3]}
                        deposite={post.deposite}
                    />
                )}
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
            </Device>
        )
    }
    else {
        return (
            <Device content="함께먹기" headerType="" gnbType="btn" btnType="default" btnMainText="신청하기" backPage="/">
                <PostImage></PostImage>
                {/* <PostConatiner postTitle={post[0].title} postContent={post[0].content}></PostConatiner> */}
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
            </Device>
        )
    }

}

export default PostViewPage