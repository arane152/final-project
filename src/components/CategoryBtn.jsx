import styled from 'styled-components'

const BtnWrapperDefault = styled.div`
    display: inline-flex;
    width: auto;
    height: 32px;
    background-color: #FF6232;
    border-radius: 16px;
    border: 1px solid #FF6232;
    justify-content: center;
    align-items: center;
    padding: 0px 11px;
`

const BtnWrapperNoneToggle = styled(BtnWrapperDefault)`
    border: 1px solid #AAAAAA;
    background-color: #FAFAFA;
`

const BtnText = styled.p`
    display: flex;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
`

const BtnTextNoneToggle = styled(BtnText)`
    color: #AAAAAA;
    font-weight: 400;
`

function CategoryBtn(props) {
    // props.type : 버튼 타입  (toggle-on : "toggle" / toggle-none : "")
    // props.text : 버튼 내용
    if (props.type == "toggle") {
        return (
            <BtnWrapperDefault>
                <BtnText>{props.text}</BtnText>
            </BtnWrapperDefault>
        )
    }
    else {
        return (
            <BtnWrapperNoneToggle>
                <BtnTextNoneToggle>{props.text}</BtnTextNoneToggle>
            </BtnWrapperNoneToggle>
        )
    }
}

export default CategoryBtn