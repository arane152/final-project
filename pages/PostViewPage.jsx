import Device from "../src/layouts/Device";
import PostImage from "../src/components/PostImage";
import PostContainer from "../src/modules/PostContainer";
import PostMenuContainer from "../src/modules/PostMenuContainer";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// firebase db
import { db } from '/src/firebase.js'
import firebase from 'firebase/compat/app';

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
    const [quantities, setQuantities] = useState({}); // 주문 수량 상태 // 주문 수량 상태
    const [recruitment, setRecruitment] = useState(""); // 모집 상태
    const [postRecruitmentWriter, setPostRecruitmentWriter] = useState(""); // 모집 상태 (Writer용)
    const [postRecuitment, setPostRecuitment] = useState(""); // 모집 상태 (일반 참여자용)
    const userId = localStorage.getItem('userId'); // 로컬 스토리지에서 userId를 가져옵니다.
    const [selectedTotal, setSelectedTotal] = useState(0); // 선택된 메뉴의 총액 상태

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
    const handlePlusClick = (menuId) => {
        setQuantities(prev => {
            const newQuantity = (prev[menuId] ?? 0) + 1;

            // 메뉴 정보 추출
            const menu = mergedMenus.find(m => m.menuId === menuId);
            if (menu) {
                // 메뉴 정보 출력
                console.log("메뉴 정보:");
                console.log("이름:", menu.name);
                console.log("ID:", menu.menuId);
                console.log("가격:", menu.menuPrice);
                console.log("수량:", newQuantity);
            }

            return {
                ...prev,
                [menuId]: newQuantity
            };
        });
    };
    // 메뉴 수량을 감소시키는 함수입니다.
    const handleMinusClick = (menuId) => {
        setQuantities(prev => {
            const current = prev[menuId] ?? 0;
            if (current > 0) {
                return {
                    ...prev,
                    [menuId]: current - 1
                };
            }
            return prev;
        });
    };

    // post.recruiterMenus가 배열인지 확인하고, 각 메뉴의 가격과 수량을 곱하여 총합을 계산합니다.
    const recruiterTotal = Array.isArray(post.recruiterMenus)
        ? post.recruiterMenus.reduce((sum, menu) => {
            return sum + menu.menuPrice * menu.menuQuantity;
        }, 0)
        : 0;

    // post.menuList가 존재하는 경우, 참여자들의 메뉴 총합을 계산합니다.
    // 참여자 목록에서 수락된 참여자만 필터링하고, 각 참여자의 메뉴 가격과 수량을 곱하여 총합을 계산합니다.
    const participantTotal = post.menuList
        ? Object.values(post.menuList)
            .filter((p) => p.accept && Array.isArray(p.menus))
            .reduce((sum, participant) => {
                return sum + participant.menus.reduce((menuSum, menu) => {
                    return menuSum + menu.menuPrice * menu.menuQuantity;
                }, 0);
            }, 0)
        : 0;


    // 모집자 총합 + 수락된 참여자 총합 계산
    const totalSum = recruiterTotal + participantTotal;

    // post.menuList가 존재하는 경우, 참여자들의 메뉴 목록을 가져옵니다.
    // 참여자 목록에서 수락된 참여자만 필터링하고, 각 참여자의 메뉴를 <MenuDefault> 컴포넌트로 렌더링합니다.
    // post.recruiterMenus가 존재하는 경우, 모집자의 메뉴 목록도 같이 
    const menuList = post.menuList
        ? Object.values(post.menuList)
            .filter((participant) => participant.accept && Array.isArray(participant.menus))
            .flatMap((participant) => participant.menus)
            .reduce((acc, menu) => {
                const id = menu.menuId;
                const existing = acc.find((m) => m.menuId === id);
                if (existing) {
                    existing.menuQuantity += Number(menu.menuQuantity || 0);
                } else {
                    acc.push({
                        menuId: menu.menuId,
                        name: menu.name,
                        menuPrice: Number(menu.menuPrice || 0),
                        menuQuantity: Number(menu.menuQuantity || 0),
                    });
                }
                return acc;
            }, [])
            .map((menu, idx) => (
                <MenuDefault
                    type="info"
                    key={`merged-${idx}`}
                    name={menu.name}
                    price={menu.menuPrice}
                    count={menu.menuQuantity}
                />
            ))
        : [];

    // 모집자의 메뉴도 함께 렌더링합니다.
    if (Array.isArray(post.recruiterMenus)) {
        const recruiterMenus = post.recruiterMenus.map((menu, idx) => (
            <MenuDefault
                type="info"
                key={`recruiter-${idx}`}
                name={menu.name}
                price={Number(menu.menuPrice || 0)}
                count={Number(menu.menuQuantity || 0)}
            />
        ));
        menuList.unshift(...recruiterMenus);
    }


    // 참여자 메뉴와 모집자 메뉴를 합쳐서, type="default"로 렌더링합니다.
    let mergedMenus = [];

    if (post.menuList) {
        mergedMenus = Object.values(post.menuList)
            .filter((participant) => participant.accept && Array.isArray(participant.menus))
            .flatMap((participant) => participant.menus);
    }
    if (Array.isArray(post.recruiterMenus)) {
        mergedMenus = [...mergedMenus, ...post.recruiterMenus];
    }

    const menuListDefault = mergedMenus.reduce((acc, menu) => {
        const id = menu.menuId;
        const existing = acc.find((m) => m.menuId === id);
        if (existing) {
            existing.menuQuantity += Number(menu.menuQuantity || 0);
        } else {
            acc.push({
                menuId: menu.menuId,
                name: menu.name,
                menuPrice: Number(menu.menuPrice || 0),
                menuQuantity: Number(menu.menuQuantity || 0),
            });
        }
        return acc;
    }, []).map((menu, idx) => (
        <MenuDefault
            type="default"
            key={`merged-default-${idx}`}
            name={menu.name}
            price={menu.menuPrice}
            count={quantities[menu.menuId] ?? 0}
            onPlusClick={() => handlePlusClick(menu.menuId)}
            onMinusClick={() => handleMinusClick(menu.menuId)}
        />
    ));

    // 메뉴 수량을 증가시키는 함수입니다. 최소 1개 이상으로 제한합니다.
    useEffect(() => {
        let total = Object.entries(quantities).reduce((sum, [menuId, quantity]) => {
            const menu = mergedMenus.find(m => m.menuId === menuId);
            const price = Number(menu?.menuPrice || 0);
            return sum + price * quantity;
        }, 0);
        setSelectedTotal(total);
    }, [quantities, mergedMenus]);


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

    // 참여 신청 버튼 클릭 시 실행되는 함수
    // postId에 해당하는 문서의 menuList 필드에 참여자의 메뉴를 추가합니다.
    // menuList에 참여자 메뉴를 array로 저장하고, localStorage에 저장된 userId만 추가합니다.
    // 참여자의 메뉴는 quantities 상태에서 가져옵니다.
    // 참여자의 메뉴가 없으면 알림을 표시하고 함수를 종료합니다.
    // 참여자의 메뉴가 있으면, postId에 해당하는 문서의 menuList 필드에 참여자의 메뉴를 추가합니다.
    // 참여 시간을 현재 시간으로 설정합니다.
    // 참여자의 메뉴를 추가한 후, 알림을 표시하고 모달을 닫습니다.
    const handleApplyPost = () => {
        const participantMenus = Object.entries(quantities)
            .filter(([menuId, quantity]) => quantity > 0)
            .map(([menuId, quantity]) => {
                const menu = mergedMenus.find(m => m.menuId === menuId);
                return {
                    menuId: menu.menuId,
                    name: menu.name,
                    menuPrice: Number(menu.menuPrice || 0),
                    menuQuantity: quantity
                };
            });
        if (post.menuList?.[userId]) {
            alert("이미 참여 신청하셨습니다.");
            return;
        }
        if (participantMenus.length === 0) {
            alert('참여할 메뉴를 선택해주세요.');
            return;
        }
        const participantData = {
            userId: Number(userId),
            menus: participantMenus,
            accept: false, // 참여 신청시에는 수락되지 않은 상태로 설정
            date: firebase.firestore.Timestamp.fromDate(new Date())
        };
        db.collection('post').doc(postId).update({
            [`menuList.${userId}`]: participantData // menuList에 참여자 메뉴를 추가합니다.
        }).then(() => {
            console.log('Participant menu added successfully.');
            alert('참여 신청이 완료되었습니다.');
            setModalOpen(false); // 모달을 닫습니다.
        }).catch((error) => {
            console.error('Error adding participant menu: ', error);
            alert('참여 신청에 실패했습니다. 다시 시도해주세요.');
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
                        <Modal background="" modalText="메뉴신청" btnType="default" mainText="참여신청" modalOnClick={handleApplyPost}>
                            {menuListDefault}
                            <TotalAmount title="총액" totalAmount={selectedTotal}></TotalAmount>
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
                <PostMenuContainer userType={props.userType} totalAmount={totalSum}>{menuList}</PostMenuContainer>
            </Device>
        )
    }

}

export default PostViewPage