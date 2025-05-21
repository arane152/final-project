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

createRoot(document.getElementById('root')).render(
    <div className="display">
      <MainBtn text="모집글 올리기"></MainBtn>
      <MainBtn type="disable" text="모집글 올리기"></MainBtn>

      <SubBtn text="메뉴추가"></SubBtn>
      <SubBtn type="stroke" text="메뉴추가"></SubBtn>
      <SubBtn type="stroke-plus" text="메뉴추가"></SubBtn>

      <ToggleBtn text="허용"></ToggleBtn>
      <ToggleBtn type="none-toggle" text="금지"></ToggleBtn>

      <CategoryBtn type="toggle" text="전체"></CategoryBtn>
      <CategoryBtn text="치킨"></CategoryBtn>
      <CategoryBtn text="찜/탕"></CategoryBtn>

      <StoreName category="치킨" storeName="BBQ 시흥 정왕점"></StoreName>

      <Gnb></Gnb>
    </div>
)
