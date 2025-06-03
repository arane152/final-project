import styled from "styled-components";
import Device from "../src/layouts/Device";
import InfoArea from "../src/modules/InfoArea";
import OderMenuArea from "../src/modules/OrderMenuArea";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import {db} from '/src/firebase.js'

const ITEM_PRICE = 15000;

function formatPrice(price) {
    return price.toLocaleString('ko-KR');
}

function PostWritePage(props) {
    const navigate = useNavigate();
    // 현재 postWritePage에서 storeSearchPage로 넘어갔을때, write page에 적어두었던 모든 정보들이 사라지는 문제가 있습니다. 추후 해결할 예정입니다.

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [receiptLocation, setReceiptLocation] = useState('');
    const [addMenuPossible, setAddMenuPossible] = useState('자유')
    const [quantity, setQuantity] = useState(0);

    const handleAddMenuPossibleChange = (selectedToggle) => {
        setAddMenuPossible(selectedToggle);
    };

    const totalAmount = quantity * ITEM_PRICE;
    const formattedTotalAmount = formatPrice(totalAmount); 

    //메뉴 가격 계산
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
            addMenuPossible: addMenuPossible
        }).then(()=>{
            navigate('/')
        })
    };

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
                receiptLocation={receiptLocation} onReceiptLocationChange={(e) => setReceiptLocation(e.target.value)}
                addMenuPossible={addMenuPossible} onAddMenuPossibleChange={handleAddMenuPossibleChange}></InfoArea>
            <OderMenuArea
                totalAmount={formattedTotalAmount}
                quantity={quantity}
                onPlusClick={handlePlusClick}
                onMinusClick={handleMinusClick}
                itemPrice={ITEM_PRICE}></OderMenuArea>
        </Device>
    )
}

export default PostWritePage