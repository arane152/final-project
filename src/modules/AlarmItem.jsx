import styled from "styled-components";
import SubBtn from "../components/SubBtn";
import MenuOutPutItem from "../components/MenuOutputitem";
import { usePost } from "../../context/PostContext";   

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
//Alarmpage 컨테이너 모듈
function AlarmItem(props){
  //데이터
  const { not, onClick} = props;
  const { postData } = usePost();
  const post = postData.find((posts) => posts.Postid == not.PostId); 

  // type구분
  // 마감시간임박 : timeend  
  // 최소주문금액달성 : totalend 
  // 모집종료 : partyendCaptain(모집자) 
  // 모집종료 : partyendMember(참여자)
  // 배달완료 : deliveryend
  // 강퇴알림 : leaveparty
  // 신청수락알림 : partyapplication
  // 신청알림 : partyrequest
  const alarmMessages = {
    timeend: "의 모집마감시간이 다가오고 있어요!",
    totalend: "의 최소주문금액이 달성되었습니다! 바로 주문하실건가요?",
    partyendCaptain: "의 모집이 종료되었습니다. 음식 수령 후 배달 완료 알림을 잊지 마세요!",
    partyendMember: "의 모집이 종료되었습니다. 배달 완료 알림이 올 때까지 기다려주세요!",
    leaveparty: "에서 주문이 거절되었습니다. 다른 모집을 찾거나 직접 모집해보세요!",
    partyapplication: "의 신청이 수락되었습니다!",
    partyrequest: "님이 함께 주문하기를 신청했어요",
  };
  //타입에 따른 메시지 출력함수
  function getAlarmMessage(type) {
    if(type === "deliveryend"){    
      return `에서 주문한 음식이 배달 완료되었습니다. 수령 장소는 ${post.receiptLocation}입니다. 맛있게 드세요!`
    }
    return alarmMessages[type];
  }
  return (
    <StyledAlarmItem>
      {/* 다른사용자와 관련있는지에 따라 이미지 구분 */}
      <AlarmImg
        src={not.type === "partyrequest" ? "ProfileIcon.svg" : "Logo.svg"}
        onClick={onClick}
      />
      <AlarmText onClick={onClick}>
        <div>
          <b>{not.type === "partyrequest" ? not.membername : post.title}</b>
          <span>{getAlarmMessage(not.type)}</span>
        </div>
        {/* 신청메뉴를 표기해야하는지에 따라 구분 */}
        {not.type === "partyrequest" && (
          <MenuOutPutItem type="side" name={not.menuname} count={not.menucount} price={not.menuprice} />
        )}
        <h5>{not.time}</h5> {/* 작성 시간 추후 props로 변경 */}
      </AlarmText>
      {/* 신청버튼 혹은 이미지 구분 */}
      {not.type === "partyrequest" ? (
        <SubBtn type={not.btntype} text={not.btntype ? "신청수락" : "수락완료"}/>
      ) : (
        <PostImg src="/AlarmBasicImg.svg" onClick={onClick} />
      )}
    </StyledAlarmItem>
    )
}

export default AlarmItem