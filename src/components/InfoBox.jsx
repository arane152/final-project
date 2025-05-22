import styled from "styled-components"
import StateBadge from "./StateBadge"
const StyledInfoBox=styled.div`
display: flex;
flex-direction: row;
gap: 8px;
align-items: top;


& > p {
width: 53px;
max-height: 44px;
height: auto;
font-size: 14px;
font-weight: 400;
color: #666666;
padding: 0;
margin: 0;
display: flex;
align-items: center;
}
`
const StyledTextOutput = styled.div`
flex: 1 1 auto;
font-size: regular;
height: 44px;
box-sizing: border-box;
display: flex;
align-items : center;
padding: 0 12px;
gap: 8px;
background-color: #f8f8f8;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap; 
border-radius: 8px;
font-size: 14px;
font-weight: 400;
color: #666666;
`

function InfoBox(props){
  const {title, content, children, badge} = props

  return <StyledInfoBox>
    <p>{title || "제목입력"}</p>
    {content ? <StyledTextOutput>{badge && <StateBadge>{badge}</StateBadge>}{content}</StyledTextOutput> : 
    <>{children}</>}</StyledInfoBox>
}

export default InfoBox