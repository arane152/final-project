import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: 353px;
    height: 48px;
    justify-content: space-between;
    align-items: center;
`

const BtnWrapperDefault = styled.div`
    display: flex;
    width: 353px;
    height: 48px;
    background-color: #FF6232;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
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
`

function MainBtn(props) {
    // props.type : 버튼 타입  (default : "" / disable : "disable")
    // props.text : 버튼 내용
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
        <Wrapper>
            <BtnWrapperDefault>
                <BtnText>{props.mainText}</BtnText>
            </BtnWrapperDefault>
            <BtnMainSub>
                <BtnText>{props.subText}</BtnText>
            </BtnMainSub>
        </Wrapper>
    }
    else {
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