import styled from "styled-components";
import Device from "../src/layouts/Device";
import InfoArea from "../src/modules/InfoArea";
import OderMenuArea from "../src/modules/OrderMenuArea";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import {db} from '/src/firebase.js'

const money = 15000;

function formatPrice(price) {
    return price.toLocaleString('ko-KR');
}

function PostWritePage(props) {
    const navigate = useNavigate();
    // 현재 postWritePage에서 storeSearchPage로 넘어갔을때, write page에 적어두었던 모든 정보들이 사라지는 문제가 있습니다. 추후 해결할 예정입니다.

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [receiptLocation, setReceiptLocation] = useState('');
    const [image, setImage] = useState(null);
    const [addMenuPossible, setAddMenuPossible] = useState('자유')
    const [quantity, setQuantity] = useState(0);

    const handleAddMenuPossibleChange = (selectedToggle) => {
        setAddMenuPossible(selectedToggle);
    };

    //메뉴 가격 계산
    const totalAmount = quantity * money;
    const formattedTotalAmount = formatPrice(totalAmount); 

    const handlePlusClick = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleMinusClick = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    //데이터 저장
    const writePost = () => {
        let timestamp = new Date().getTime().toString()

        if (!title || !content || !receiptLocation ) {
             alert('필수 정보를 모두 입력해주세요.');
             return;
        }

        db.collection('post').doc(timestamp).set({
            id: timestamp,
            title: title,
            content: content,
            receiptLocation: receiptLocation,
            image: image,
            addMenuPossible: addMenuPossible
        }).then(()=>{
            navigate('/')
        })
    };

    //이미지 추가
    const handleImage = (e)=>{
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = (_e)=>{
            console.log(_e.target.result)
            setImage(_e.target.result)
        }
    }

    return(
        <Device
        content="모집글쓰기"
        headerType=""
        gnbType="btn"
        btnType="default"
        btnMainText="모집글 올리기"
        backPage="/"
        onClick={writePost}>
            <InfoArea
                title={title} onTitleChange={(e) => setTitle(e.target.value)}
                content={content} onContentChange={(e) => setContent(e.target.value)}
                image={image} onImageChange={(e) => handleImage(e)}
                receiptLocation={receiptLocation} onReceiptLocationChange={(e) => setReceiptLocation(e.target.value)}
                addMenuPossible={addMenuPossible} onAddMenuPossibleChange={handleAddMenuPossibleChange}>
            </InfoArea>
            <OderMenuArea
                /*음식점 설정*/

                /*메뉴 개수 선택*/
                quantity={quantity}
                onPlusClick={handlePlusClick}
                onMinusClick={handleMinusClick}
                itemPrice={money}

                /*메뉴 추가*/

                /*메뉴 총액*/
                totalAmount={formattedTotalAmount}>
            </OderMenuArea>
        </Device>
    )
}

export default PostWritePage