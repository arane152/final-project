import styled from "styled-components";

import InfoBox from "../components/InfoBox";
import TextInput from "../components/TextInput";
import ToggleBtn from "../components/ToggleBtn";

const StyledWrapper = styled.div`
    width: 393px;
    height: 510px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const Container = styled.div`
    width: 353px;
    display: flex;
    flex-direction: column; 
    gap: 20px;
    padding-top: 16px;
`

const ImgBtn = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 8px;
    background-color: #F8F8F8;
    color: #AAAAAA;
    border: none;
    text-align: center;
`

const StyledImageInputArea = styled.label`
    width: 70px;
    height: 70px;
    border-radius: 8px;
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    background-image: ${props => props.$imagePreview ? `url(${props.$imagePreview})` : 'none'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &:active {
        background-color: #F0F0F0;
    }

    & > span {
        font-size: 14px;
        color: #AAAAAA;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 140%;
        width: 100%;
        height: 100%;
    }
`

const HiddenInput = styled.input`
    position: absolute;
    display: none;
`

const StyledFileWrapper = styled.div`
    display: flex;
    gap: 8px;
`


function InfoArea(props) {
    const {
        title, onTitleChange,
        content, onContentChange,
        deposite, onDepositeChange, location,
        image, onImageChange, accountNumber
        } = props

    const handleToggleClick = (selectedToggle) => {
        onDepositeChange(selectedToggle)
    }

    // onDepositeChange: 선입금 필수 여부를 변경하는 함수
    // onImageChange: 메뉴 사진을 변경하는 함수
    // onTitleChange: 제목을 변경하는 함수
    // onContentChange: 내용 입력란의 내용을 변경하는 함수
    // title: 제목 입력란의 현재 값
    // content: 내용 입력란의 현재 값
    // deposite: 선입금 필수 여부의 현재 값
    // location: 수령장소 입력란의 현재 값
    // image: 메뉴 사진의 현재 값
    // accountNumber: 계좌번호 입력란의 현재 값
    return(
    <StyledWrapper>
        <Container>
            <InfoBox title="제목">
                <TextInput 
                    placeholder="제목을 입력해주세요." 
                    value={title} 
                    onChange={onTitleChange}>
                </TextInput>
            </InfoBox>
            <InfoBox title="수령장소">
                <TextInput 
                    value={location}
                    readOnly> 
                </TextInput>
            </InfoBox>
            <InfoBox title="내용">
                <TextInput 
                    height={"108px"} 
                    placeholder="내용을 입력해주세요." 
                    value={content} 
                    onChange={onContentChange}>
                </TextInput>
            </InfoBox>

            <InfoBox title="메뉴사진">
                <StyledFileWrapper>
                    <StyledImageInputArea>
                        <span>+</span>
                        <HiddenInput type="file" onChange={onImageChange} accept="image/*" />
                    </StyledImageInputArea>
                    <StyledImageInputArea $imagePreview={image} style={{ backgroundColor: 'transparent' }}></StyledImageInputArea>
                </StyledFileWrapper>
            </InfoBox>

            <InfoBox title="계좌번호"><TextInput value={accountNumber} readOnly></TextInput></InfoBox>

            <InfoBox title={<>선입금<br />필수여부</>}>
                <ToggleBtn width='142' text="자유"
                onClick={() => handleToggleClick('자유')} isSelected={deposite === '자유'} ></ToggleBtn>
                <ToggleBtn width='142'text="필수"
                onClick={() => handleToggleClick('필수')} isSelected={deposite === '필수'}></ToggleBtn>
            </InfoBox>
        </Container>
    </StyledWrapper>
    );
}

export default InfoArea