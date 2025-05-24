import styled from 'styled-components'

const BtnWrapperDefault = styled.div`
    display: inline-flex;
    width: auto;
    height: 32px;
    background-color: #FF6232;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: 0px 11px;
`

const BtnWrapperStroke = styled(BtnWrapperDefault)`
    background-color: #ffffff;
    border: 1px solid #FF6232;
`

const BtnText = styled.p`
    display: flex;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
`

const BtnTextStroke = styled(BtnText)`
    color: #FF6232;
`

function SubBtn(props) {
    // props.type : 버튼 타입 (default : "" / stroke : "storke" / stroke-plus : "stroke-plus")
    // props.text : 버튼 내용
    if (props.type == "stroke") {
        return (
            <BtnWrapperStroke>
                <BtnTextStroke>{props.text}</BtnTextStroke>
            </BtnWrapperStroke>
        )
    }
    else if (props.type == "stroke-plus") {
        return (
            <BtnWrapperStroke>
                <BtnTextStroke>{props.text} &nbsp;+</BtnTextStroke>
            </BtnWrapperStroke>
        )
    }
    else if (props.type == "next") {
        return (
            <BtnWrapperDefault>
                <BtnText>{props.text} &nbsp;→</BtnText>
            </BtnWrapperDefault>
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

export default SubBtn