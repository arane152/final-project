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
    const [post, setPost] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const { id: postId } = useParams(); // /post/:id에서 id 파라미터를 추출 // URL에서 postId를 가져옵니다.
    const [quantity, setQuantity] = useState(1); // 주문 수량 상태
    const money = 15000;
    const totalAmount = quantity * money;
    const itemPrice = 15000; // 아이템 가격
    let participants = [];

    // firebase postId에 해당하는 데이터 가져오기
    useEffect(() => {
        db.collection('post').doc(postId).get().then((doc) => {
            setPost(doc.data())
            console.log(doc.data())
        })
    }, [])

    if (post.menuList) {
        participants = Object.values(post.menuList);
        console.log(participants);
    }

    // participants의 갯수만큼 </MenuDefault>를 렌더링합니다.
    const menuList = participants.map((participant, index) => (
        <MenuDefault
            type="info"
            key={index}
            name={participant.name}
            price={Number(participant.menuPrice || 0 )}
            count={Number(participant.menuQaunitiy || 0 )}
        />
    ));

    console.log(menuList);

    const handlePlusClick = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleMinusClick = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    // props.userType : 유저 타입 (글쓴이 : "writer" / 참여자 : "")
    if (props.userType == "writer") {
        return (
            // modalOnClick가 실행됐을때, <Modal>과 <ModalBg>가 렌더링 됩니다.
            // modalOnClick은 <Device>의 props로 전달되어, 버튼 클릭시 모달이 열리도록 합니다.
            <Device content="함께먹기" headerType="" gnbType="btn" btnType="dubble" btnMainText="모집종료" btnSubText="신청현황" backPage="/" subPage="participation" modalOnClick={() => setModalOpen(true)}>
                {modalOpen && ( /* 모달이 열렸을 때, 이 부분이 렌더링 됩니다. 다시 닫을 때는 modalOnClick을 false로 설정합니다. */
                    <>
                        <Modal background="" modalText="주문확정" btnType="default" mainText="모집종료하고 알림보내기" modalOnClick={() => setModalOpen(false)}>
                            {menuList}
                            <TotalAmount title="총액"></TotalAmount>
                        </Modal>
                        <ModalBg />
                    </>
                )}
                <PostImage postImage={post.image}></PostImage>
                {post && (
                    <PostContainer
                        post={post}
                        postTitle={post.title}
                        postContent={post.content}
                        date={post.postId}
                        name={post.writer?.[1]}
                        receiptLocation={post.receiptLocation}
                        accountNumber={post.writer?.[3]}
                        deposite={post.deposite}
                        storeId={post.storeId}
                    />
                )}
                <PostMenuContainer userType={props.userType}>{menuList}</PostMenuContainer>
            </Device>
        )
    }
    else {
        return (
            <Device content="함께먹기" headerType="" gnbType="btn" btnType="default" btnMainText="신청하기" backPage="/" modalOnClick={() => setModalOpen(true)}>
                {modalOpen && ( /* 모달이 열렸을 때, 이 부분이 렌더링 됩니다. 다시 닫을 때는 modalOnClick을 false로 설정합니다. */
                    <>
                        <Modal background="" modalText="주문확정" btnType="default" mainText="참여신청" modalOnClick={() => setModalOpen(false)}>
                            <MenuDefault
                                quantity={quantity}
                                onPlusClick={handlePlusClick}
                                onMinusClick={handleMinusClick}
                                itemPrice={itemPrice}
                            ></MenuDefault>
                            <TotalAmount title="총액" totalAmount={totalAmount}></TotalAmount>
                        </Modal>
                        <ModalBg />
                    </>
                )}
                <PostImage postImage={post.image} postRecruitment=""></PostImage>
                {post && (
                    <PostContainer
                        post={post}
                        postTitle={post.title}
                        postContent={post.content}
                        date={post.date}
                        name={post.writer?.[1]}
                        receiptLocation={post.receiptLocation}
                        accountNumber={post.writer?.[3]}
                        deposite={post.deposite}
                        storeId={post.storeId}
                    />
                )}
                <PostMenuContainer userType={props.userType}></PostMenuContainer>
            </Device>
        )
    }

}

export default PostViewPage