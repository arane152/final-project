import styled from 'styled-components'

import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    width: 353px;
    height: 48px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

const BtnWrapperDefault = styled.div`
    display: flex;
    width: 353px;
    height: 48px;
    background-color: #FF6232;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const BtnWrapperDisable = styled(BtnWrapperDefault)`
    background-color: #999999;
`

const BtnText = styled.p`
    display: flex;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
`

const BtnMainSub = styled.div`
    display: flex;
    width: 100px;
    height: 48px;
    background-color: #FFFFFF;
    border-radius: 8px;
    border: solid #FF6232 1px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const BtnWrapperDubble = styled(BtnWrapperDefault)`
    width: 241px;
`

const BtnTextSub = styled(BtnText)`
    color: #FF6232;
    font-weight: 600;
`

function MainBtn(props) {
    const navigate = useNavigate();
    // props.type : 버튼 타입  (default : "default" / disable : "disable" / dubble : "dubble")
    // props.mainText : 메인 버튼 내용
    // props.subText : 서브 버튼 내용

    // 만약 메인 버튼에 onClick 이벤트를 넣고 싶으면 onClick={()=>navigate(`${props.mainOnClick}`)} 를 복사해서 넣을것
    // 현재 어떤 기능이 들어갈지 몰라 빼놓았음
    if (props.type == "disable") {
        return (
        <Wrapper>
            <BtnWrapperDisable>
                <BtnText>{props.mainText}</BtnText>
            </BtnWrapperDisable>
        </Wrapper>
        )
    }
    else if (props.type == "dubble") {
        return (
        <Wrapper>
            <BtnWrapperDubble>
                <BtnText>{props.mainText}</BtnText>
            </BtnWrapperDubble>
            <BtnMainSub onClick={()=>navigate(`${props.subOnClick}`)}>
                <BtnTextSub>{props.subText}</BtnTextSub>
            </BtnMainSub>
        </Wrapper>
        )
    }
    else if (props.type == "default"){
        return (
        <Wrapper>
            <BtnWrapperDefault> 
                <BtnText>{props.mainText}</BtnText>
            </BtnWrapperDefault>
        </Wrapper>
        )
    }
    
}

export default MainBtn