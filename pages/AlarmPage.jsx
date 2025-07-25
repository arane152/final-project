import styled from "styled-components";

import Device from "../src/layouts/Device";
import AlarmNowPostContainer from "../src/modules/AlarmNowPostContainer";
import AlarmItem from "../src/modules/AlarmItem";
import UlBox from "../src/modules/AlarmUlBox"

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from '../context/UserContext'
import { usePost } from '../context/PostContext'

const StyledBox=styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

function AlarmPage(props) {
  //데이터
  const navigate = useNavigate();
  const { nowuser } = useUser();
  const { postData } = usePost();

  //Post중 userId가 nowuser(현재 사용자)와 같은 Post 불러오기,
  const [nowPostData, setNowPost] = useState([]);

  useEffect(() => {
    if (!nowuser) return; //nowuser 랜더링중 오류방지

    //현재 사용자의 postId가 "postId(1)"인 Post만 필터링
  const filteredUserPost = 
    postData.filter((item) => item.postId == "1749558559258");
    setNowPost(filteredUserPost);
  }, []);


  //알림목록불러오기
  const [notData, setNotData] = useState([])
  useEffect(() => {
    setNotData([
      { notId: 1, type: "partyendCaptain", postId: "1749558559258", userId: 1, time: "방금" },
      { notId: 2, type: "totalend", postId: "1749558559258", userId: 1, time: "6분전"},
      { notId: 3, type: "partyrequest", postId: "1749558559258", userId: 1, btntype:"stroke", membername: "신청자", time: "8분전" , menuname: "떡볶이", menucount: "1", menuprice: "12000"},
      { notId: 4, type: "timeend", postId: "1749558559258", userId: 1, time: "10분전" },
      { notId: 5, type: "partyrequest", postId: "1749558559258", userId: 1, membername: "아무개", time: "30분전", menuname: "공깃밥", menucount: "1", menuprice: "1000" },      
      { notId: 6, type: "partyendCaptain", postId: "1749558559258", userId: 1, time: "1일전" },
    ])
  }, []);

  //불러온 알림목록 map으로 정리
  const AlarmList = notData.map(
    (item)=>{
      return ( 
        <AlarmItem 
          key={item.notId} 
          not={item} 
          onClick={()=>navigate(`/post/${item.postId}`)}>
          {/* 클릭시 알림발생한 post로 이동 */}
        </AlarmItem>
      )
    }
  )

  
  return  (
    <Device content="알림" gnbType="none" backPage="/">
      <StyledBox>
        {/* 불러온 Post중 가장 최신 Post만 반영 */}
        {nowPostData[0] && 
          <AlarmNowPostContainer 
            post={nowPostData[0]}>
          </AlarmNowPostContainer>
        }
        {/* 알림 item 배치 */}
        <UlBox>
          {AlarmList}
        </UlBox>
      </StyledBox>
    </Device>
  )

}

export default AlarmPage;