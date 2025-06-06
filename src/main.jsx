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
import AllProvider from '../context/AllProvider.jsx'

createRoot(document.getElementById('root')).render(
    <AllProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}></Route>
        <Route path='alarm' element={<AlarmPage/>}></Route>
        <Route path='write' element={<PostWritePage/>}></Route>
        <Route path='post/:id' element={<PostViewPage userType="writer"/>}></Route>
        <Route path='post/:id/participation' element={<ParticipationPage/>}></Route>
        <Route path='store' element={<StoreSearchPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </AllProvider>
)
