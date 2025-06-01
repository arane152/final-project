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

//context
import UserProvider from '../context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
    <UserProvider>
    <BrowserRouter>
      {/* 우선 아직 페이지별로 이동할 수 있는 방법이 없기 떄문에 경로 뒤에 /path 를 넣어주셔서 작업해주세요 */}
      <Routes>
        <Route index element={<MainPage/>}></Route>
        <Route path='alarm' element={<AlarmPage/>}></Route>
        <Route path='write' element={<PostWritePage/>}></Route>
        <Route path='post' element={<PostViewPage userType="writer"/>}></Route>
        <Route path='post/participation' element={<ParticipationPage/>}></Route>
        <Route path='store' element={<StoreSearchPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
)
