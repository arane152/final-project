import styled from "styled-components";
import Device from "../src/layouts/Device";
import InfoArea from "../src/modules/InfoArea";
import OderMenuArea from "../src/modules/OrderMenuArea";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import {db} from '/src/firebase.js'

function PostWritePage(props) {
    const navigate = useNavigate();
    // 현재 postWritePage에서 storeSearchPage로 넘어갔을때, write page에 적어두었던 모든 정보들이 사라지는 문제가 있습니다. 추후 해결할 예정입니다.
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [receiptLocation, setReceiptLocation] = useState('');
    const [acountNumber, setAcountNumber] = useState('');
    const [addMenuPossible, setAddMenuPossible] = useState('자유')

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const handleReceiptLocationChange = (e) => setReceiptLocation(e.target.value);
    const handleAcountNumberChange = (e) => setAcountNumber(e.target.value);

    const handleAddMenuPossibleChange = (selectedToggle) => {
        setAddMenuPossible(selectedToggle);
    };

    const writePost = () => {
        let timestamp = new Date().getTime().toString()

        if (!title || !content || !receiptLocation || !acountNumber) {
             alert('필수 정보를 모두 입력해주세요.');
             return;
        }

        db.collection('post').doc(timestamp).set({
            id: timestamp,
            title: title,
            content: content,
            receiptLocation: receiptLocation,
            acountNumber: acountNumber,
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
                title={title} onTitleChange={handleTitleChange}
                content={content} onContentChange={handleContentChange}
                receiptLocation={receiptLocation} onReceiptLocationChange={handleReceiptLocationChange}
                acountNumber={acountNumber} onAcountNumberChange={handleAcountNumberChange}
                addMenuPossible={addMenuPossible} onAddMenuPossibleChange={handleAddMenuPossibleChange}></InfoArea>
            <OderMenuArea></OderMenuArea>
        </Device>
    )
}

export default PostWritePage