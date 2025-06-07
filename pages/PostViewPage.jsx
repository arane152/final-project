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
import { use } from "react";


function PostViewPage(props) {
    //포스트함수
    // firebase data state
    const [post, setPost] = useState([]) // firebase에서 가져온 post 데이터를 저장할 상태 변수
    const [modalOpen, setModalOpen] = useState(false);
    const { id: postId } = useParams(); // /post/:id에서 id 파라미터를 추출 // URL에서 postId를 가져옵니다.
    const [quantity, setQuantity] = useState(1); // 주문 수량 상태
    const [recruitment, setRecruitment] = useState(""); // 모집 상태
    const [postRecruitmentWriter, setPostRecruitmentWriter] = useState(""); // 모집 상태 (Writer용)
    const [postRecuitment, setPostRecuitment] = useState(""); // 모집 상태 (일반 참여자용)
    const userId = localStorage.getItem('userId'); // 로컬 스토리지에서 userId를 가져옵니다.
    let participants = []; // 참여자 목록을 저장할 배열
    let totalSum = 0;   // 총 금액을 저장할 변수

    // firebase postId에 해당하는 데이터 가져오기
    useEffect(() => {
        db.collection('post').doc(postId).get().then((doc) => {
            setPost(doc.data())
        })
    }, [])

    // endPost 상태에 따라 recruitment 값을 설정합니다.
    // post.endPost가 true이면 모집 상태를 "closed"로 설정하고, 그렇지 않으면 "dubble"로 설정합니다.
    // 또한, postRecruitmentWriter와 postRecuitment의 상태를 설정합니다.
    // post.endPost가 true이면 postRecruitmentWriter는 "disabled", postRecuitment는 "disabled"로 설정합니다.
    // 그렇지 않으면 postRecruitmentWriter는 "dubble", postRecuitment는 "default"로 설정합니다.
    useEffect(() => {
        if (post.endPost === true) {
            setRecruitment("closed");
            setPostRecruitmentWriter("disable");
            setPostRecuitment("disable");
        } else {
            setRecruitment("");
            setPostRecruitmentWriter("dubble");
            setPostRecuitment("default");
        }
    }, [post.endPost]);

    // 메뉴 가격을 계산합니다.
    const handlePlusClick = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    // 메뉴 수량을 감소시키는 함수입니다. 최소 1개 이상으로 제한합니다.
    const handleMinusClick = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    // 메뉴 가격을 계산하기 위한 변수
    if (post.recruiterMenus) {
        const menus = Object.values(post.recruiterMenus);
        totalSum = menus.reduce((acc, menu) => {
            const price = parseInt(menu.menuPrice || 0);
            const qty = parseInt(menu.menuQuantity || 0);
            return acc + price * qty;
        }, 0);
    }

    // participants의 갯수만큼 </MenuDefault>를 렌더링합니다.
    const menuList = post.recruiterMenus
        ? Object.values(post.recruiterMenus).map((menu, idx) => (
            <MenuDefault
                type="info"
                key={`recruiter-${idx}`}
                name={menu.name}
                price={Number(menu.menuPrice || 0)}
                count={Number(menu.menuQuantity || 0)}
            />
        ))
        : [];

    // participants의 갯수만큼 </MenuDefault>의 type을 "default"로 설정하여 렌더링합니다.
    const menuListDefault = participants.flatMap((participant, index) => (
        participant.menus ? participant.menus.map((menu, idx) => (
            <MenuDefault
                type="default"
                key={`${index}-${idx}`}
                name={menu.name}
                price={Number(menu.menuPrice || 0)}
                count={Number(menu.menuQuantity || 0)}
                onPlusClick={handlePlusClick}
                onMinusClick={handleMinusClick}
            />
        )) : []
    ));

    // localStorage에서 userId를 가져오고, post.writer?.[1]과 비교하여 같으면 props.userType을 "writer"로 설정합니다.
    let userType = "";
    if (post.writer?.[0] === userId) {
        userType = "writer";
    } else {
        userType = "";
    }

    // 모집 종료 버튼 클릭 시 실행되는 함수
    // postId에 해당하는 문서의 endPost 필드를 true로 업데이트하고, 알림을 보냅니다.
    // 모집 상태를 "closed"로 변경합니다.
    // 모달을 닫습니다.
    const handleEndPost = () => {
        db.collection('post').doc(postId).update({
            endPost: true
        }).then(() => {
            console.log('Post marked as ended.');
            alert('모집이 종료되었습니다.');
            setRecruitment("closed");
            setPostRecruitmentWriter("disable");
            setPostRecuitment("disable");
            setModalOpen(false);
        }).catch((error) => {
            console.error('Error updating document: ', error);
        });
    };

    // props.userType : 유저 타입 (글쓴이 : "writer" / 참여자 : "")
    if (userType == "writer") {
        return (
            // modalOnClick가 실행됐을때, <Modal>과 <ModalBg>가 렌더링 됩니다.
            // modalOnClick은 <Device>의 props로 전달되어, 버튼 클릭시 모달이 열리도록 합니다.
            <Device content="함께먹기" headerType="" gnbType="btn" btnType={postRecruitmentWriter} btnMainText="모집종료" btnSubText="신청현황" backPage="/" subPage="participation" modalOnClick={() => setModalOpen(true)}>
                {modalOpen && ( /* 모달이 열렸을 때, 이 부분이 렌더링 됩니다. 다시 닫을 때는 modalOnClick을 false로 설정합니다. */
                    <>
                        <Modal background="" modalText="주문확정" btnType="default" mainText="모집종료하고 알림보내기" modalOnClick={handleEndPost}>
                            {menuList}
                            <TotalAmount title="총액" totalAmount={totalSum}></TotalAmount>
                        </Modal>
                        <ModalBg />
                    </>
                )}
                <PostImage postImage={post.image} postRecruitment={recruitment}></PostImage>
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
                        totalSum={totalSum || 0}
                    />
                )}
                <PostMenuContainer userType={props.userType} totalAmount={totalSum}>{menuList}</PostMenuContainer>
            </Device>
        )
    }
    else {
        return (
            <Device content="함께먹기" headerType="" gnbType="btn" btnType={postRecuitment} btnMainText="신청하기" backPage="/" modalOnClick={() => setModalOpen(true)}>
                {modalOpen && ( /* 모달이 열렸을 때, 이 부분이 렌더링 됩니다. 다시 닫을 때는 modalOnClick을 false로 설정합니다. */
                    <>
                        <Modal background="" modalText="주문확정" btnType="default" mainText="참여신청" modalOnClick={() => setModalOpen(false)}>
                            {menuListDefault}
                            <TotalAmount title="총액" totalAmount={totalSum}></TotalAmount>
                        </Modal>
                        <ModalBg />
                    </>
                )}
                <PostImage postImage={post.image} postRecruitment={recruitment}></PostImage>
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
                        totalSum={totalSum || 0}
                    />
                )}
                <PostMenuContainer userType={props.userType} totalAmount={totalSum}>{menuListDefault}</PostMenuContainer>
            </Device>
        )
    }

}

export default PostViewPage