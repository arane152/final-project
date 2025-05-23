import styled from 'styled-components'
import { useState } from 'react'

//absolute 쓰지 말라고 했는데 Alert 기능에는 일단 넣었음
//확인 후 반려 혹은 승인바람, 승인할 경우에는 상위요소에 relative 줘야 정상작동
const StyledDisplay =styled.div`
background-color: rgba(0, 0, 0, 60%);
width: 100%;
height: 100%;
position: absolute;
top:0;
left:0;
display: flex;
align-items: center;
justify-content: center;
padding: 0;
`
const StyledBox = styled.div`
background-color: rgba(179, 179, 179, 82%);
width: 247px;
border-radius: 14px;
overflow: hidden;
` 
const StyledContents = styled.div`
padding: 20px 16px 16px 16px;
text-align: center;
line-height: 140%;

& > h1 {
font-size: 16px;
margin: 0 0 4px 0;
font-weight: 600;
}
& > p {
font-size: 13px;
margin: 0;
font-weight: 400;}`

const StyledBtnBox = styled.div`
font-size: 16px;
display: flex;


& > button{
background: none;
height: 44px;
font-size: 17px;
flex : 1 1 auto;
border-bottom: none;
border: 1px, solid, rgba(128, 128, 128, 55%);
font-weight: 400;};

& > button > b{
color: #FF6232;
font-weight: 600;
text-align: centr;
};`
const Alert = function(props){
// title, content = 제목 및 내용, 공란시 기본값
// okText = 확인버튼(우측버튼) 문구, 공란시 기본값
// onClick = 확인버튼 클릭시 작동될 함수
// cancelText = 취소버튼(좌측버튼) 문구, 공란시 기본값
  const {title, content, onClick, okText, cancelText, alertOn, setAlertOn} = props

  //상위 컴포넌트에서 const [alertOn, setAlertOn] = useState(false); 
  // <Alert alertOn={alertOn} setAlertOn={setAlertOn} /> 구문 작성 해야 동작가능 
  // + 원하는 버튼에 setAlertOn(true)을 onClick 등으로 배정해줄것것
  //setAlertOn(true): Alert 출력 setAlertOff(false): Alert 종료 



  return(<>
    {alertOn && <StyledDisplay onClick={() => setAlertOn(false)}>
    <StyledBox onClick={(e) => e.stopPropagation()}>
    <StyledContents>
      <h1>{title || "제목을 입력하세요"}</h1>
      <p>{content || "내용을 입력하세요"}</p>
    </StyledContents>
    <StyledBtnBox>
      <button onClick={() => setAlertOn(false)}>{cancelText ||"취소"}</button>
      <button onClick={onClick}><b>{okText || "확인"}</b></button>
    </StyledBtnBox>
    </StyledBox>
    </StyledDisplay>}</>
  )
}

export default Alert