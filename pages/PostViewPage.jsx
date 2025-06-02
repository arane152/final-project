import Device from "../src/layouts/Device";
import PostImage from "../src/components/PostImage";
import PostContainer from "../src/modules/PostContainer";
import PostMenuContainer from "../src/modules/PostMenuContainer";

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
    const [modalOpen, setModalOpen] = useState(false);

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
            // modalOnClick가 실행됐을때, <Modal>과 <ModalBg>가 렌더링 됩니다.
            // modalOnClick은 <Device>의 props로 전달되어, 버튼 클릭시 모달이 열리도록 합니다.
            <Device content="함께먹기" headerType="" gnbType="btn" btnType="dubble" btnMainText="모집종료" btnSubText="신청현황" backPage="/" subPage="participation" modalOnClick={() => setModalOpen(true)}>
                {modalOpen && ( /* 모달이 열렸을 때, 이 부분이 렌더링 됩니다. 다시 닫을 때는 modalOnClick을 false로 설정합니다. */
                    <>
                        <Modal background="" modalText="주문확정" btnType="default" mainText="모집종료하고 알림보내기" modalOnClick={() => setModalOpen(false)}> 
                            <MenuDefault type="info"></MenuDefault>
                            <MenuDefault type="info"></MenuDefault>
                            <TotalAmount title="총액"></TotalAmount>
                        </Modal>
                        <ModalBg />
                    </>
                )}
                <PostImage postImage={post.image}></PostImage>
                {post && (
                    <PostContainer
                        postTitle={post.title}
                        postContent={post.content}
                        date={post.date}
                        name={post.writer?.[1]}
                        receiptLocation={post.receiptLocation}
                        accountNumber={post.writer?.[3]}
                        deposite={post.deposite}
                    />
                )}
                <PostMenuContainer
                    userType={props.userType}
                />
            </Device>
        )
    }
    else {
        return (
            <Device content="함께먹기" headerType="" gnbType="btn" btnType="default" btnMainText="신청하기" backPage="/">
                <PostImage postImage={post.image} postRecruitment="closed"></PostImage>
                {post && (
                    <PostContainer
                        postTitle={post.title}
                        postContent={post.content}
                        date={post.date}
                        name={post.writer?.[1]}
                        receiptLocation={post.receiptLocation}
                        accountNumber={post.writer?.[3]}
                        deposite={post.deposite}
                    />
                )}
                <PostMenuContainer userType={props.userType}></PostMenuContainer>
            </Device>
        )
    }

}

export default PostViewPage