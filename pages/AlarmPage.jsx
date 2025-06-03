import styled from "styled-components";
import Device from "../src/layouts/Device";
import AlarmNowPostContainer from "../src/modules/AlarmNowPostContainer";
import AlarmItem from "../src/modules/AlarmItem";
import UlBox from "../src/modules/AlarmUlBox"
import { useState, useEffect } from "react";
import {db} from '/src/firebase.js'
import { useUser } from '../context/UserContext'
import { usePost } from '../context/PostContext'
import { useNavigate } from "react-router-dom";

const StyledBox=styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

function AlarmPage(props) {
  const navigate = useNavigate();
  const { nowuser } = useUser();
  const { postData } = usePost();

  const [nowPostData, setNowPost] = useState([])

  useEffect(() => {
      if (!nowuser) return;

        const filteredUserPost = postData.filter((item) => item.userId == nowuser.userId
        );
        setNowPost(filteredUserPost);
  }, [postData]);


  const [notData, setNotData] = useState([])
  useEffect(() => {
    if (!nowuser) return;

    let tempData = [];
    db.collection('notification').where('userId', '==', nowuser.userId).get().then(function (qs) {
      qs.forEach(function (doc) {
        tempData.push(doc.data());
      });
      setNotData(tempData);
    });
  }, []);

  const AlarmList = notData.map(
    (item)=>{
      return ( 
        <AlarmItem key={item.notId} not={item} onClick={()=>navigate(`/post/${item.postId}`)}></AlarmItem>
      )
    }
  )

  return  (
    <Device content="알림" gnbType="none" backPage="/">
      <StyledBox>
        {nowPostData[0] && <AlarmNowPostContainer post={nowPostData[0]}></AlarmNowPostContainer>}
        <UlBox>{AlarmList}</UlBox>
      </StyledBox>
    </Device>
  )

}

export default AlarmPage;