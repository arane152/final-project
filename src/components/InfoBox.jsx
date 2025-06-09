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
  //title : 좌측에 출력될 제목 | badge: 뱃지로 표현할 정보가 있을 경우 기입 | content: 그레이박스 양식에 들어갈 컨텐츠 | children: 그레이박스양식과 다른 컨텐츠

  return ( 
  <StyledInfoBox>
    <p>{title || "제목입력"}</p>
    {content 
    ? <StyledTextOutput>
        {badge && 
          <StateBadge>
            {badge ? "필수" : "자유"}
          </StateBadge>}
          {content}
      </StyledTextOutput> 
    : <>{children}</>}
  </StyledInfoBox>
    )
}

export default InfoBox