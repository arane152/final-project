import styled from 'styled-components'

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

function MainBtn(props) {
    // props.type : 버튼 타입  (default : "" / disable : "disable")
    // props.text : 버튼 내용
    if (props.type == "disable") {
        return (
        <BtnWrapperDisable>
            <BtnText>{props.text}</BtnText>
        </BtnWrapperDisable>
        )
    }
    else {
        return (
        <BtnWrapperDefault>
            <BtnText>{props.text}</BtnText>
        </BtnWrapperDefault>
        )
    }
    
}

export default MainBtn