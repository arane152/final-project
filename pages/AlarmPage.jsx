import styled from "styled-components";
import Device from "../src/layouts/Device";
import Alarm_NowPostContainer from "../src/modules/Alarm_NowPostContainer";
import AlarmItem from "../src/modules/AlarmItem";

const AlarmUl = styled.ul`
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 35px;
`
const Device1 = styled(Device)`

`
const UlBox = styled.div` 
  height: 360px;
  flex: 1;
  overflow-y: scroll;
  scrollbar-width: none;      
-ms-overflow-style: none;     

&::-webkit-scrollbar {
  display: none;       
}
`
function AlarmPage(props) {
  
  const data =[
    {id: 0, type:'timeend'},
    {id: 1, type:'totalend'},
    {id: 2, type:'partyendCaptain'},
    {id: 3, type:'partyendMember'},
    {id: 4, type:'deliveryend'},
    {id: 5, type:'leaveparty'},
    {id: 6, type:'partyapplication'},
    {id: 7, type:'partyrequest'},
  ]

  const AlarmList = data.map(
    (item)=>{
      return ( 
        <AlarmItem key={item.id} type={item.type}></AlarmItem>
      )
    }
  )
  

  return  <Device content="알림" gnbType="none">
    <Alarm_NowPostContainer></Alarm_NowPostContainer>
    <UlBox>
    <AlarmUl>
      {AlarmList}
    </AlarmUl>
    </UlBox>
  </Device>
}

export default AlarmPage;