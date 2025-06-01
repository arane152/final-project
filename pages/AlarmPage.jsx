import styled from "styled-components";
import Device from "../src/layouts/Device";
import AlarmNowPostContainer from "../src/modules/AlarmNowPostContainer";
import AlarmItem from "../src/modules/AlarmItem";
import UlBox from "../src/modules/AlarmUlBox"
import { useState, useEffect } from "react";
import {db} from '/src/firebase.js'
import { useUser } from '../context/UserContext'
const StyledBox=styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
function AlarmPage(props) {
  const { nowuser } = useUser();
  const [notData, setNotData] = useState([])
  useEffect(() => {
    let tempData = [];
    db.collection('notification').get().then(function (qs) {
      qs.forEach(function (doc) {
        tempData.push(doc.data());
      });
      const filteredUser = tempData.filter((item) => item.userId == nowuser.userId
      );
      setNotData(filteredUser);
    });
  }, []);

  const AlarmList = notData.map(
    (item)=>{
      return ( 
        <AlarmItem key={item.notId} type={item.type || "deliveryend"}></AlarmItem>
      )
    }
  )

  return  (
    <Device content="알림" gnbType="none" backPage="/">
      <StyledBox>
        <AlarmNowPostContainer></AlarmNowPostContainer>
        <UlBox>{AlarmList}</UlBox>
      </StyledBox>
    </Device>
  )

}

export default AlarmPage;