import styled from "styled-components";
import Device from "../src/layouts/Device";
import AlarmNowPostContainer from "../src/modules/AlarmNowPostContainer";
import AlarmItem from "../src/modules/AlarmItem";
import UlBox from "../src/modules/AlarmUlBox"

const StyledBox=styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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