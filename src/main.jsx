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
import StoreName from './modules/StoreName.jsx'
import Gnb from './layouts/Gnb.jsx'
import Alert from './components/Alert.jsx'
import Header from './layouts/Header.jsx'
import TextInput from './components/TextInput.jsx'
import InfoBox from './components/InfoBox.jsx'
import StateBadge from './components/StateBadge.jsx'
import TotalAmount from './components/TotalAmount.jsx'
import QuantityBtn from './components/QuantityBtn.jsx'
import Profile from './components/Profile.jsx'
import MenuOutPutItem from './components/MenuOutputitem.jsx'
import LikeBtn from './components/LikeBtn.jsx'
import StatusBar from './components/StatusBar.jsx'

import InfoArea from './modules/InfoArea.jsx'
import OderMenuArea from './modules/OrderMenuArea.jsx'

import PostPartyContainer from './components/PostPartyContainer.jsx'


createRoot(document.getElementById('root')).render(
    <div className="display">

      <InfoArea></InfoArea>
      <OderMenuArea></OderMenuArea>
      <PostPartyContainer
  recruiter={{
    storeName: "BBQ 시흥 정왕점",
    menus: [
      { name: "후라이드", price: 15000, count: 1 },
      { name: "양념치킨", price: 16000, count: 2 }
    ],
    onDeleteMenu: () => console.log("메뉴 삭제")
  }}
  participants={[
    {
      name: "김철수",
      menus: [{ name: "콜라", price: 2000, count: 1 }]
    },
    {
      name: "이영희",
      menus: [{ name: "치즈볼", price: 3000, count: 2 }]
    }
  ]}
  goalAmount={30000}
/>
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
      <StoreName type="black" category="치킨" storeName="BBQ 시흥 정왕점"></StoreName>

      <Gnb type="gnb"></Gnb>
      <Gnb type="btn">
        <MainBtn type="default" mainText="메인버튼"></MainBtn>
      </Gnb>
      <Gnb type="btn">
        <MainBtn type="dubble" mainText="메인버튼" subText="서브버튼"></MainBtn>
      </Gnb>

      <MenuOutPutItem type="default" name="후라이드 치킨" count="1" price="15,000"></MenuOutPutItem>
      <MenuOutPutItem type="bold" name="후라이드 치킨" count="1" price="15,000"></MenuOutPutItem>
      <MenuOutPutItem type="side" name="후라이드 치킨" count="1" price="15,000"></MenuOutPutItem>
      <MenuOutPutItem type="delete" name="후라이드 치킨" count="1" price="15,000"></MenuOutPutItem>
        
      <LikeBtn type="default" likeNumber="0"></LikeBtn>
      <LikeBtn type="like" likeNumber="1"></LikeBtn>

      <StatusBar totalPercent="0" nowPrice="0" postMinPrice="0"></StatusBar>
      <StatusBar type="simple" totalPercent="0"></StatusBar>

    </div>
)
