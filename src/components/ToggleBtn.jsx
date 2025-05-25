import styled from 'styled-components'

const BtnWrapperDefault = styled.div`
    display: flex;
    width: ${props => props.width}px;
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
    const width = props.width || '112'

    if (props.type == "none-toggle") {
        return (
            <BtnWrapperNoneToggle width={width}>
                <BtnTextNoneToggle>{props.text}</BtnTextNoneToggle>
            </BtnWrapperNoneToggle>
        )
    }
    else {
        return (
            <BtnWrapperDefault width={width}>
                <BtnText>{props.text}</BtnText>
            </BtnWrapperDefault>
        )
    }
}

export default ToggleBtn