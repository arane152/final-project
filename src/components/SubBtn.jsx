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
    cursor: pointer;
`

const BtnWrapperStroke = styled(BtnWrapperDefault)`
    background-color: #ffffff;
    border: 1px solid #FF6232;
`

const BtnWrapperGreyStroke = styled(BtnWrapperDefault)`
    background-color: #ffffff;
    border: 1px solid #D4D4D4;
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
    // type : 버튼 타입 (default, stroke, stroke-plus, next, grey)
    // text : 버튼에 표시될 텍스트
    // onClick : 버튼 클릭 시 실행될 함수
    // props.type에 따라 버튼 스타일을 다르게 적용

    if (props.type == "stroke") {
        return (
            <BtnWrapperStroke onClick={props.onClick}>
                <BtnTextStroke>{props.text}</BtnTextStroke>
            </BtnWrapperStroke>
        );
    }
    else if (props.type == "stroke-plus") {
        return (
            <BtnWrapperStroke onClick={props.onClick}>
                <BtnTextStroke>{props.text} &nbsp;+</BtnTextStroke>
            </BtnWrapperStroke>
        );
    }
    else if (props.type == "next") {
        return (
            <BtnWrapperDefault onClick={props.onClick}>
                <BtnText>{props.text} &nbsp;→</BtnText>
            </BtnWrapperDefault>
        );
    }
    else if (props.type == "grey") {
        return (
            <BtnWrapperGreyStroke onClick={props.onClick}>
                <BtnTextStroke>{props.text}</BtnTextStroke>
            </BtnWrapperGreyStroke>
        );
    }
    else {
        return (
            <BtnWrapperDefault onClick={props.onClick}>
                <BtnText>{props.text}</BtnText>
            </BtnWrapperDefault>
        );
    }
}

export default SubBtn;
