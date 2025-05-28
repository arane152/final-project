// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
// import App from './App.jsx'
import styled from 'styled-components'

import PostViewPage from '../pages/PostViewPage.jsx'
import AlarmPage from '../pages/AlarmPage.jsx'
import MainPage from '../pages/MainPage.jsx'
import PostWritePage from '../pages/PostWritePage.jsx'
import ParticipationPage from '../pages/ParticipationPage.jsx'
import StoreSearchPage from '../pages/StoreSearchPage.jsx'

createRoot(document.getElementById('root')).render(
    // <div className="display">
    //   <h1>postviewpage (userType="writer")</h1>
    //   <PostViewPage userType="writer"></PostViewPage>
    //   <h1>postviewpage (userType="")</h1>
    //   <PostViewPage></PostViewPage>

    //   <h1>alarmpage</h1>
    //   <AlarmPage></AlarmPage>

    //   <h1>mainpage</h1>
    //   <MainPage></MainPage>

    //   <h1>postwritepage</h1>
    //   <PostWritePage></PostWritePage>

    //   <h1>participationpage</h1>
    //   <ParticipationPage></ParticipationPage>

    //   <h1>StoreSearchPage</h1>
    //   <StoreSearchPage></StoreSearchPage>
    // </div>
    <BrowserRouter>
      {/* 우선 아직 페이지별로 이동할 수 있는 방법이 없기 떄문에 경로 뒤에 /path 를 넣어주셔서 작업해주세요 */}
      <Routes>
        <Route index element={<MainPage/>}></Route>
        <Route path='alarm' element={<AlarmPage/>}></Route>
        <Route path='write' element={<PostWritePage/>}></Route>
        <Route path='view' element={<PostViewPage/>}></Route>
        <Route path='participation' element={<ParticipationPage/>}></Route>
        <Route path='store' element={<StoreSearchPage/>}></Route>
      </Routes>
    </BrowserRouter>
)
