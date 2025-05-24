// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
// import App from './App.jsx'
import styled from 'styled-components'

import MainBtn from './components/MainBtn.jsx'
import SubBtn from './components/SubBtn.jsx'
import ToggleBtn from './components/ToggleBtn.jsx'
import CategoryBtn from './components/CategoryBtn.jsx'
import StoreName from './components/StoreName.jsx'
import Gnb from './layouts/Gnb.jsx'
import Alert from './components/Alert.jsx'
import Header from './layouts/Header.jsx'
import TextInput from './components/TextInput.jsx'
import InfoBox from './components/InfoBox.jsx'
import StateBadge from './components/StateBadge.jsx'
import TotalAmount from './components/TotalAmount.jsx'
import QuantityBtn from './components/QuantityBtn.jsx'
import Profile from './components/Profile.jsx'


createRoot(document.getElementById('root')).render(
    <div className="display">
      {/* <Alert></Alert> 
      Alert 페이지 주석 확인바람*/}
      <Header type="main"></Header>
      <Header type="search"></Header>
      <Header></Header>

      <InfoBox title="두줄일때의제목"><TextInput></TextInput></InfoBox>
      <InfoBox><TextInput height={"108px"}></TextInput></InfoBox>
      <InfoBox title="아웃풋" content="내용"></InfoBox>
      <InfoBox title={<>선입금<br />필수여부</>} content="농협 000000000000" badge="필수"></InfoBox>
      <InfoBox title="토글">
        <ToggleBtn text="허용"></ToggleBtn>
        <ToggleBtn type="none-toggle" text="금지"></ToggleBtn>
      </InfoBox>


      <StateBadge type="Captain">모집자</StateBadge>
      <StateBadge type="TotalAcount">100%</StateBadge>
      <StateBadge>카테고리</StateBadge>
      
      <MainBtn type="default" mainText="메인버튼"></MainBtn>
      <MainBtn type="disable" mainText="메인버튼"></MainBtn>
      <MainBtn type="dubble" mainText="메인버튼" subText="서브버튼"></MainBtn>
      <SubBtn text="메뉴추가"></SubBtn>
      <SubBtn type="stroke" text="메뉴추가"></SubBtn>
      <SubBtn type="stroke-plus" text="메뉴추가"></SubBtn>
      <SubBtn type="next" text="서브버튼"></SubBtn>
      <QuantityBtn quantity="0"></QuantityBtn>
      <Profile name="홍길동" location="여기" date=" 00일"></Profile>
      

      <TotalAmount title="메뉴총액"></TotalAmount>
      <TotalAmount title="총액" color="orange" type="stroke"></TotalAmount>
      <TotalAmount title="총액" type="none"></TotalAmount>



      <CategoryBtn type="toggle" text="전체"></CategoryBtn>
      <CategoryBtn text="치킨"></CategoryBtn>
      <CategoryBtn text="찜/탕"></CategoryBtn>

      <StoreName category="치킨" storeName="BBQ 시흥 정왕점"></StoreName>

      <Gnb></Gnb>


    </div>
)
