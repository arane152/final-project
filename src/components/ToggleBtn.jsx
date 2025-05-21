import styled from 'styled-components'

const BtnWrapperDefault = styled.div`
    display: flex;
    width: 112px;
    height: 44px;
    background-color: #FFFFFF;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    border: 1px solid #FF6232;
`

const BtnWrapperNoneToggle = styled(BtnWrapperDefault)`
    border: 1px solid #AAAAAA;
`

const BtnText = styled.p`
    display: flex;
    font-size: 14px;
    font-weight: 600;
    color: #FF6232;
`

const BtnTextNoneToggle = styled(BtnText)`
    color: #AAAAAA;
    font-weight: 500;
`

function ToggleBtn(props) {
    if (props.type == "none-toggle") {
        return (
            <BtnWrapperNoneToggle>
                <BtnTextNoneToggle>{props.text}</BtnTextNoneToggle>
            </BtnWrapperNoneToggle>
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

export default ToggleBtn