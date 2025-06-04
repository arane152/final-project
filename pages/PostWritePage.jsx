import styled from "styled-components";
import Device from "../src/layouts/Device";
import InfoArea from "../src/modules/InfoArea";
import OderMenuArea from "../src/modules/OrderMenuArea";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { db } from '/src/firebase.js'



function PostWritePage(props) {
    const navigate = useNavigate();
    // 현재 postWritePage에서 storeSearchPage로 넘어갔을때, write page에 적어두었던 모든 정보들이 사라지는 문제가 있습니다. 추후 해결할 예정입니다.

    const [quantity, setQuantity] = useState(1);

    // 만약 세션 스토리지에서 "fromSearch"가 "true"가 아니라면, 로컬 스토리지의 값을 초기화합니다.
    useEffect(() => {
        if (sessionStorage.getItem("fromSearch") !== "true") {
            // 로컬 스토리지에서 저장된 값들을 제거합니다.
            localStorage.removeItem("title");
            localStorage.removeItem("content");
            localStorage.removeItem("receiptLocation");
            localStorage.removeItem("addMenuPossible");
            localStorage.removeItem("image");

            // 상태값도 초기화
            setTitle('');
            setContent('');
            setReceiptLocation('');
            setAddMenuPossible('자유');
            setImage(null);
        }
        sessionStorage.removeItem("fromSearch");
    }, []);

    const [title, setTitle] = useState(localStorage.getItem('title') || '');
    const [content, setContent] = useState(localStorage.getItem('content') || '');
    const [receiptLocation, setReceiptLocation] = useState(localStorage.getItem('receiptLocation') || '');
    const [image, setImage] = useState(localStorage.getItem('image') || null);
    const [addMenuPossible, setAddMenuPossible] = useState(localStorage.getItem('addMenuPossible') || '자유')

    const handleAddMenuPossibleChange = (selectedToggle) => {
        setAddMenuPossible(selectedToggle);
        // 로컬 스토리지에 선택된 값을 저장합니다.
        localStorage.setItem('addMenuPossible', selectedToggle);
    };

    //메인 페이지에서 설정하였던 유저 정보 가져오기
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    const accountNumber = localStorage.getItem('accountNumber');
    const location = localStorage.getItem('location');

    //메뉴목록 저장용 빈배열생성
    const [ menuList, setMenuList ] = useState([])
    
    //데이터 저장
    const writePost = () => {
        let timestamp = new Date().getTime().toString()

        if (!title || !content || !receiptLocation || !menuList) {
            alert('필수 정보를 모두 입력해주세요.');
            return;
        }

        db.collection('post').doc(timestamp).set({
            postId: timestamp,
            title: title,
            content: content,
            receiptLocation: receiptLocation,
            image: image,
            addMenuPossible: addMenuPossible,
            // 작성자 정보를 write {array}로 저장
            writer: [userId, userName, location, accountNumber],
            // 메뉴리스트를 배열로 저장
            menuList: menuList,
        }).then(() => {
            navigate('/')
            // 로컬 스토리지 초기화
            localStorage.removeItem('title');
            localStorage.removeItem('content');
            localStorage.removeItem('receiptLocation');
            localStorage.removeItem('image');
            localStorage.removeItem('addMenuPossible');
        })
    };

    //이미지 추가
    const handleImage = (e) => {
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = (_e) => {
            console.log(_e.target.result)
            setImage(_e.target.result);
            localStorage.setItem('image', _e.target.result);
        }
    }

    return (
        <Device
            content="모집글쓰기"
            headerType=""
            gnbType="btn"
            btnType="default"
            btnMainText="모집글 올리기"
            backPage="/"
            onClick={writePost}>
            {/*로컬 스토리지에 저장할 값이 있으면 해당 기능 검수자 '김예준'에게 문의해주세요.*/}
            <InfoArea
                title={title} onTitleChange={(e) => { setTitle(e.target.value); localStorage.setItem('title', e.target.value); /* 로컬 스토리지에 제목 저장 */ }}
                content={content} onContentChange={(e) => { setContent(e.target.value); localStorage.setItem('content', e.target.value); /* 로컬 스토리지에 내용 저장 */ }}
                image={image} onImageChange={(e) => handleImage(e)}
                receiptLocation={receiptLocation} onReceiptLocationChange={(e) => { setReceiptLocation(e.target.value); localStorage.setItem('receiptLocation', e.target.value); /* 로컬 스토리지에 영수증 위치 저장 */ }}
                addMenuPossible={addMenuPossible} onAddMenuPossibleChange={handleAddMenuPossibleChange}>
            </InfoArea>

            <OderMenuArea
                /*메뉴 리스트 조작을 위한 State 전달*/
                menuList = {menuList}
                setMenuList = {setMenuList}

                /* 메뉴 신청자 정보저장을 위한 Id전달*/
                userId = {userId}
            >
            </OderMenuArea>
        </Device>
    )
}

export default PostWritePage