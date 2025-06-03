import styled from "styled-components";
import SubBtn from "../components/SubBtn";
import MenuOutPutItem from "../components/MenuOutputitem";
const StyledAlarmItem = styled.div`
display: flex;
align-items: start;
gap: 10px;
`
const AlarmText = styled.div`
width: 236px;
font-size: 13px;
color: #202020;
margin: 0;
padding: 0;
gap: 12px;
display: flex;
flex-direction: column;
line-height: 140%;

& > div >  b {
font-weight: 600;

}

& > div {
font-size: 13px;
font-weight: 400;
}


& > h5  {
color: #aaaaaa;
margin: 0;
padding: 0;
font-size: 12px;
line-height: 140%;
font-weight: 400;
}
`

const PostImg =  styled.img`
width: 70px;
hieght: 70px;
`

const AlarmImg = styled.img`
width: 24px;
background-color: #eeeeee;
border-radius: 12px;
`
function AlarmItem(props){
  const { not, user, post, onClick} = props;
  const { title = "제목 없음", location = "수령 장소 없음" } = post || {};
  const { name = "사용자" } = user || {};
  
// 마감시간임박 : timeend  / 최소주문금액달성 : totalend/ 모집종료 : partyendCaptain(모집자) & partyendMember(참여자) / 
// 배달완료 : deliveryend / 강퇴알림 : leaveparty / 신청수락알림 : partyapplication / 신청알림 : partyrequest
    return (
      <StyledAlarmItem>
            {(not.type == "partyrequest") ? <AlarmImg src="ProfileIcon.svg" onClick={onClick}></AlarmImg> :  <AlarmImg src="Logo.svg" onClick={onClick}></AlarmImg>}

            {/* 상황별 메시지출력 */}
            <AlarmText onClick={onClick}>
              <div>
              <b>
                {not.type == "partyrequest" ? `${name}` : `${title}`} 
              </b>
              <span>
                {not.type == "timeend" && `의 모집마감시간이 다가오고 있어요!`}
                {not.type == "totalend" && `의의 최소주문금액이 달성되었습니다! 바로 주문하실건가요?`}
                {not.type == "partyendCaptain" && `의 모집이 종료되었습니다. 음식 수령후 배달완료알림보내기 잊지마세요! `}
                {not.type == "partyendMember" && `의 모집이 종료되었습니다. 배달완료 알림이 올때까지 잠시만 기다려주세요!`}
                {not.type == "deliveryend" && `에서 주문한 음식이 배달완료되었습니다 수령장소는 ${not.location} 입니다 맛있는 식사되세요!`}
                {not.type == "leaveparty" && `에서 주문이 거절되었습니다. 다른 모집을 찾거나 직접 모집하세요!`}
                {not.type == "partyapplication" && `의 신청이 수락되었습니다!`}
                {not.type == "partyrequest" && `님이 함께 주문하기를 신청했어요`} 
              </span></div>

              {(not.type == "partyrequest") && <MenuOutPutItem type="side" name="예시" count="1" price="0"></MenuOutPutItem>}

              <h5>0000.00.00</h5> 
            </AlarmText>

            {/* 주문신청일경우 버튼출력 그 외의 경우 게시물이미지출력 */}
            {(not.type == "partyrequest") ? <SubBtn text="신청수락"></SubBtn> : <PostImg src="/AlarmBasicImg.svg" onClick={onClick}></PostImg>}
      </StyledAlarmItem>
    )
}

export default AlarmItem