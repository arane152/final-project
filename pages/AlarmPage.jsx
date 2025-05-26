import styled from "styled-components";
import Device from "../src/layouts/Device";
import AlarmNowPostContainer from "../src/modules/AlarmNowPostContainer";
import AlarmItem from "../src/modules/AlarmItem";

const AlarmUl = styled.ul`
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 35px;
`
const UlBox = styled.div` 
  padding-bottom: 20px;
  flex: 1 1 auto;
  overflow-y: scroll;
  scrollbar-width: none;      
-ms-overflow-style: none;     

&::-webkit-scrollbar {
  display: none;       
}
`
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
    <Device content="알림" gnbType="none">
      <StyledBox>
        <AlarmNowPostContainer></AlarmNowPostContainer>
        <UlBox>
          <AlarmUl>{AlarmList}</AlarmUl>
        </UlBox>
      </StyledBox>
    </Device>
  )

}

export default AlarmPage;