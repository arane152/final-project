import Device from "../src/layouts/Device";
import PostImage from "../src/components/PostImage";
import PostContainer from "../src/modules/PostContainer";
import PostMenuContainer from "../src/modules/PostMenuContainer";
import MenuAdd from "../src/components/MenuAdd";
import Modal from "../src/layouts/BottomModal";
import ModalBg from "../src/layouts/BottomModalBg";
import MenuDefault from "../src/components/MenuDefault";
import TotalAmount from "../src/components/TotalAmount";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// firebase db
import { db } from '../src/firebase.js'
import firebase from 'firebase/compat/app';

function PostViewPage(props) {
    // post 상태를 관리하는 useState 훅을 사용합니다.
    const [post, setPost] = useState([]) // firebase에서 가져온 post 데이터를 저장할 상태 변수
    const { id: postId } = useParams(); // URL에서 postId를 가져옵니다.

    // 모달 열림 상태를 관리하는 useState 훅을 사용합니다.
    const [modalOpen, setModalOpen] = useState(false); // 모달 열림 상태 // 모달 열림 상태
    
    // 주문 수량 상태를 관리하는 useState 훅을 사용합니다.
    const [quantities, setQuantities] = useState({}); // 주문 수량 상태 // 주문 수량 상태
    const [recruitment, setRecruitment] = useState(""); // 모집 상태
    const [postRecruitmentWriter, setPostRecruitmentWriter] = useState(""); // 모집 상태 (Writer용)
    const [postRecuitment, setPostRecuitment] = useState(""); // 모집 상태 (일반 참여자용)

    // 로컬 스토리지에서 userId를 가져옵니다.
    const userId = localStorage.getItem('userId');

    // 선택된 메뉴의 총액 상태와 사용자 정의 메뉴 상태를 관리하는 useState 훅을 사용합니다.
    const [selectedTotal, setSelectedTotal] = useState(0); // 선택된 메뉴의 총액 상태
    const [customMenus, setCustomMenus] = useState([]); // 사용자 정의 메뉴 상태
    const [customName, setCustomName] = useState(""); // 사용자 정의 메뉴 이름 상태
    const [customPrice, setCustomPrice] = useState(""); // 사용자 정의 메뉴 가격 상태

    // firebase postId에 해당하는 데이터 가져오기
    useEffect(() => {
        db.collection('post').doc(postId).get().then((doc) => {
            setPost(doc.data())
        })
    }, [])

    // post.endPost가 true일 때 모집 상태를 "closed"로 설정하고, 버튼 상태를 변경합니다.
    // post.endPost가 false일 때 모집 상태를 초기화하고, 버튼 상태를 "dubble"로 설정합니다.
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



    // 메뉴 수량을 증가시키는 함수입니다. 메뉴 수량을 1씩 증가시킵니다.
    const handlePlusClick = (menuId) => {
        setQuantities(prev => {
            const newQuantity = (prev[menuId] ?? 0) + 1;

            // 메뉴 정보 추출
            const menu = mergedMenus.find(m => m.menuId === menuId);
            return {
                ...prev,
                [menuId]: newQuantity
            };
        });
    };

    // 메뉴 수량을 감소시키는 함수입니다. 메뉴 수량이 0보다 큰 경우에만 1씩 감소시킵니다.
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

    // post.menuList가 존재하는 경우, 참여자들의 메뉴 목록을 렌더링합니다.
    const menuList = post.menuList
        ? Object.values(post.menuList)
            // 참여자 목록에서 수락된 참여자만 필터링하고, 각 참여자의 메뉴를 추출합니다.
            .filter((participant) => participant.accept && Array.isArray(participant.menus))
            // 각 참여자의 메뉴를 합쳐서 하나의 배열로 만듭니다.
            .flatMap((participant) => participant.menus)
            // 메뉴 목록을 메뉴 ID로 그룹화하고, 수량을 합칩니다.
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
            // 최종적으로 메뉴 목록을 렌더링합니다.
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


    // post.menuList와 post.recruiterMenus를 병합하여 최종 메뉴 목록을 만듭니다.
    let mergedMenus = [];

    // post.menuList가 존재하는 경우, 참여자들의 메뉴 목록을 병합합니다.
    if (post.menuList) {
        mergedMenus = Object.values(post.menuList)
            .filter(p => p.accept && Array.isArray(p.menus))
            .flatMap(p => p.menus);
    }
    if (Array.isArray(post.recruiterMenus)) {
        mergedMenus = [...mergedMenus, ...post.recruiterMenus];
    }

    // customMenus 추가
    mergedMenus = [...mergedMenus, ...customMenus];


    // 현재 참여자의 목록을 가져오고, 그 참여자의 메뉴 수량에 현재 참여자의 수량을 더하여 렌더링합니다.
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
    }, []).map((menu, idx) => {
        const userQuantity = quantities[menu.menuId] ?? 0;
        return (
            <MenuDefault
                type="simple"
                key={`merged-default-${idx}`}
                name={menu.name}
                price={menu.menuPrice}
                count={menu.menuQuantity + userQuantity}
                userCount={userQuantity}
                onPlusClick={() => handlePlusClick(menu.menuId)}
                onMinusClick={() => handleMinusClick(menu.menuId)}
            />
        );
    });

    // 위에서 렌더링한 메뉴 목록에서, 현재 참여자가 선택한 메뉴를 렌더링합니다.
    // 만약 참여자가 선택한 메뉴가 없다면, alert를 띄우고 함수를 종료합니다.
    // 선택한 메뉴는 quantities 상태에서 가져오고, 수량이 0보다 큰 메뉴만 필터링하여 렌더링합니다.
    const selectedMenuList = Object.entries(quantities)
        .filter(([menuId, quantity]) => quantity > 0)
        .map(([menuId, quantity]) => {
            const menu = mergedMenus.find(m => m.menuId === menuId);
            return (
                <MenuDefault
                    type="info"
                    key={menuId}
                    name={menu.name}
                    price={Number(menu.menuPrice || 0)}
                    count={quantity}
                />
            );
        });


    // 선택한 메뉴의 총액을 계산합니다.
    // quantities 상태에서 각 메뉴의 가격과 수량을 곱하여 총액을 계산합니다.
    // mergedMenus에서 메뉴 정보를 가져와서 가격을 계산합니다.
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
    // 선택한 메뉴의 수량이 0보다 큰 경우에만 참여 신청을 진행합니다.
    // 참여 신청을 위해 post.menuList에 현재 사용자의 메뉴를 추가합니다.
    // 참여 신청이 완료되면 모달을 닫고, post 데이터를 새로 가져옵니다.
    // 만약 이미 참여 신청을 했다면, 알림을 띄우고 함수를 종료합니다.
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
        const participantData = {
            userId: Number(userId),
            menus: participantMenus,
            accept: false, // 참여 신청시에는 수락되지 않은 상태로 설정
            date: firebase.firestore.Timestamp.fromDate(new Date())
        };
        db.collection('post').doc(postId).update({
            [`menuList.${userId}`]: participantData // menuList에 참여자 메뉴를 추가합니다.
        }).then(() => {
            alert('참여 신청이 완료되었습니다.');
            setModalOpen(false); // 모달을 닫습니다.
            db.collection('post').doc(postId).get().then((doc) => {
                setPost(doc.data());
                setQuantities({});
                setCustomMenus([]);
            });
        }).catch((error) => {
            console.error('Error adding participant menu: ', error);
            alert('참여 신청에 실패했습니다. 다시 시도해주세요.');
        });
    };

    // 선택한 메뉴가 없을 경우 알림을 띄우고 함수를 종료합니다.
    const handleApplyClick = () => {
        if (selectedMenuList.length === 0) {
            alert("참여할 메뉴를 하단에서 선택해주세요.");
            return;
        }
        setModalOpen(true);
    };

    // 참여자가 이미 참여한 경우, 본인이 선택했던 메뉴만 보여주기 위한 로직
    let myMenuListDefault = null;
    if (userId && post.menuList && post.menuList[userId]) {
        const myMenus = post.menuList[userId].menus || [];
        myMenuListDefault = myMenus.map((menu, idx) => (
            <MenuDefault
                type="info"
                key={`my-menu-${idx}`}
                name={menu.name}
                price={menu.menuPrice}
                count={menu.menuQuantity}
                userCount={menu.menuQuantity}
                // 참여자는 이미 신청한 메뉴는 수정 불가이므로 버튼 비활성화
                onPlusClick={null}
                onMinusClick={null}
                disabled={true}
            />
        ));
    }

    // 페이지 렌더링
    // props.userType : 유저 타입 (글쓴이 : "writer" / 참여자 : "")
    if (userType == "writer") {
        return (
            <Device
                content="함께먹기"
                headerType=""
                gnbType="btn"
                btnType={postRecruitmentWriter}
                btnMainText="모집종료"
                btnSubText="신청현황"
                backPage="/"
                subPage="participation"
                modalOnClick={() => setModalOpen(true)}
            >
                {modalOpen && (
                    <>
                        <Modal
                            background=""
                            modalText="주문확정"
                            btnType="default"
                            mainText="모집종료하고 알림보내기"
                            modalOnClick={handleEndPost}
                            modalTopOnClick={() => setModalOpen(false)}
                        >
                            {menuList}
                            <TotalAmount title="총액" totalAmount={totalSum} />
                        </Modal>
                        <ModalBg bgOnClick={() => setModalOpen(false)}/>
                    </>
                )}
                <PostImage postImage={post.image} postRecruitment={recruitment} />
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
                <PostMenuContainer userType={props.userType} totalAmount={totalSum}>
                    {menuList}
                </PostMenuContainer>
            </Device>
        )
    }
    else {
        // 이미 참여한 경우 btnMainText를 "메뉴 변경하기"로, 아니면 "신청하기"로 표시
        const isAlreadyApplied = !!post.menuList?.[userId];
        // 참여하지 않은 경우에만 아래 내용을 렌더링
        if (!isAlreadyApplied) {
            return (
                <Device
                    content="함께먹기"
                    headerType=""
                    gnbType="btn"
                    btnType={postRecuitment}
                    btnMainText="신청하기"
                    backPage="/"
                    modalOnClick={handleApplyClick}
                >
                    {modalOpen && (
                        <>
                            <Modal background="" modalText="메뉴신청" btnType="default" mainText="참여신청" modalOnClick={handleApplyPost} modalTopOnClick={() => setModalOpen(false)}>
                                {selectedMenuList}
                                <TotalAmount title="총액" totalAmount={selectedTotal}></TotalAmount>
                            </Modal>
                            <ModalBg bgOnClick={() => setModalOpen(false)}/>
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
                    <PostMenuContainer userType={props.userType} totalAmount={selectedTotal}>
                        {menuListDefault}
                        {/* 메뉴 추가 버튼 및 메뉴 추가 컴포넌트 */}
                        <MenuAdd
                            name={customName}
                            menuPrice={customPrice}
                            onNameChange={(e) => setCustomName(e.target.value)}
                            onPriceChange={(e) => setCustomPrice(e.target.value)}
                            addMenuGo={() => {
                                const newMenuId = `custom-${customMenus.length + 1}`;
                                const newMenu = {
                                    menuId: newMenuId,
                                    name: customName,
                                    menuPrice: parseInt(customPrice),
                                    userQuantity: 1
                                };
                                setQuantities(prev => ({
                                    ...prev,
                                    [newMenu.menuId]: 1
                                }));
                                setCustomMenus(prev => [...prev, newMenu]);
                                setCustomName("");
                                setCustomPrice("");
                            }}
                        />
                    </PostMenuContainer>
                </Device>
            )
        } else {
            // 이미 참여한 경우
            // 사용자가 이미 참여한 경우, 사용자가 선택한 메뉴의 총 수량을 계산
            const myMenus = post.menuList[userId]?.menus || [];
            const myTotalAmount = myMenus.reduce(
                (sum, menu) => sum + (Number(menu.menuPrice || 0) * Number(menu.menuQuantity || 0)),
                0
            );
            return (
                <Device
                    content="함께먹기"
                    headerType=""
                    gnbType="btn"
                    btnType={postRecuitment}
                    btnMainText="메뉴 변경하기"
                    backPage="/"
                    modalOnClick={handleApplyClick}
                >
                    {modalOpen && (
                        <>
                            <Modal background="" modalText="메뉴신청" btnType="default" mainText="참여신청" modalOnClick={handleApplyPost} modalTopOnClick={() => setModalOpen(false)}>
                                {selectedMenuList}
                                <TotalAmount title="총액" totalAmount={selectedTotal}></TotalAmount>
                            </Modal>
                            <ModalBg bgOnClick={() => setModalOpen(false)}/>
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
                    <PostMenuContainer userType={props.userType} totalAmount={myTotalAmount}>
                        {myMenuListDefault}
                    </PostMenuContainer>
                </Device>
            )
        }
    }

}

export default PostViewPage