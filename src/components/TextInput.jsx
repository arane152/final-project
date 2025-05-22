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
`
const StyledLinesInput=styled(StyledALineInput)`
  height: ${props=> props.height || "44px"};
  overflow-x: none;         
  overflow-y: auto;
  white-space: pre-wrap; 
`

function TextInput(props){
  const {height, value, onChange, placeholder} = props

  return <>{!height ? 
  <StyledALineInput value={value} onChange={onChange} placeholder={placeholder || "양식을 작성해주세요"}></StyledALineInput> : 
  <StyledLinesInput height={height} value={value} onChange={onChange} placeholder={placeholder || "양식을 작성해주세요"}></StyledLinesInput>}
  </> 
}

export default TextInput