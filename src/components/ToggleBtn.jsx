import styled from 'styled-components'

const BtnWrapperDefault = styled.div`
    display: flex;
    width: ${props => props.width}px;
    height: 44px;
    background-color: #FFFFFF;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    border: ${props => props.$isSelected ? '1px solid #FF6232' : '1px solid #AAAAAA'};
`

const BtnText = styled.p`
    display: flex;
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.$isSelected ? '#FF6232' : '#AAAAAA'};
`

function ToggleBtn(props) {
    const width = props.width || '112'
    const { text, onClick, isSelected} = props;

    // isSelected : 버튼이 선택되었는지 여부
    // onClick : 버튼 클릭 시 실행될 함수
    // text : 버튼에 표시될 텍스트
    return (
        <BtnWrapperDefault width={width} $isSelected={isSelected} onClick={onClick}>
            <BtnText $isSelected={isSelected}>{text}</BtnText>
        </BtnWrapperDefault>
    )
}

export default ToggleBtn