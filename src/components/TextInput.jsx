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
  //height: 여러줄 인풋이 요구되는 경우 기입, 없으면 44px 기본값으로 출력
  //value: textarea value, 추후 파이어베이스 연동할 함수에 사용
  //onChange : 추후 파이어베이스 연동할 함수에 사용
  //placeholder : 안내문구 있다면 기입
  const {height, value, onChange, placeholder, onClick} = props

  return <>{!height ? 
  <StyledALineInput onClick={onClick} value={value} onChange={onChange} placeholder={placeholder || "양식을 작성해주세요"}></StyledALineInput> : 
  <StyledLinesInput onClick={onClick} height={height} value={value} onChange={onChange} placeholder={placeholder || "양식을 작성해주세요"}></StyledLinesInput>}
  </> 
}

export default TextInput