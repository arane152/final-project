import styled from "styled-components";

const StyledALineInput=styled.textarea`
flex: 1 1 auto;
font-size: regular;
height: 44px;
box-sizing: border-box;
padding: 12px;
background-color: #f8f8f8;
overflow-x: auto;         
overflow-y: hidden; 
white-space: nowrap; 
resize: none;
border: none;
outline: none;  
scrollbar-width: none;        
-ms-overflow-style: none;   
border-radius: 8px;
font-size: 14px;
font-weight: 400;
color: #666666;

  &:placeholder{
  color: #AAAAAA;
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 14px;
  font-weight: 400;
  }

  &:-webkit-scrollbar {
    display: none;
  }

  &:focus{
  border: none;
  outline: none;}

  &:focus::placeholder {
      color: transparent;
  }
`
const StyledLinesInput=styled(StyledALineInput)`
  height: ${props=> props.height || "44px"};
  overflow-x: none;         
  overflow-y: auto;
  white-space: pre-wrap; 
`

function TextInput(props){
  // height : 높이 지정, 지정하지 않으면 기본값 44px
  // value : 입력값
  // onChange : 입력값 변경시 작동될 함수
  // placeholder : 입력값이 없을 때 표시될 문구
  // onClick : 클릭시 작동될 함수
  // readOnly : 읽기 전용 여부, true일 경우 입력 불가
  // 기본값은 false로 설정되어 있어 입력이 가능합니다.
  
  const {height, value, onChange, placeholder, onClick, readOnly} = props

  return <>{!height ? 
  <StyledALineInput onClick={onClick} value={value} onChange={onChange} placeholder={placeholder || "양식을 작성해주세요"} {...(readOnly ? { readOnly: true } : {})}></StyledALineInput> : 
  <StyledLinesInput onClick={onClick} height={height} value={value} onChange={onChange} placeholder={placeholder || "양식을 작성해주세요"} {...(readOnly ? { readOnly: true } : {})}></StyledLinesInput>}
  </> 
}

export default TextInput