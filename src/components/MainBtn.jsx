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

const BtnWrapperGhost = styled(BtnWrapperDefault)`
    background-color: #FFFFFF;
    border: solid #FF6232 1px;
    height: 44px;
    width: 313px;
`

const BtnTextGhost = styled(BtnText)`
    color: #FF6232;
    font-weight: 600;
    font-size: 14px;
`

function MainBtn(props) {
    const navigate = useNavigate();
    const {mainText, subOnClick, subText, type, modalOnClick, menuOnClick} = props;
    // type : disable | dubble | default | ghost
    // mainText : 메인 버튼 내용
    // subText : 서브 버튼 내용
    // subOnClick : 서브 버튼 클릭시 이동할 경로
    // modalOnClick : 모달 오픈용 함수
    // menuOnClick : 메뉴 클릭시 이동할 경로

    // type에 따라 버튼 스타일 및 기능이 다름
    // disable : 비활성화된 버튼
    // dubble : 두 개의 버튼이 있는 경우 (메인 버튼 + 서브 버튼)
    // default : 기본 버튼
    // ghost : 테두리만 있는 버튼
  if (type === "disable") {
    return (
      <Wrapper>
        <BtnWrapperDisable>
          <BtnText>{mainText}</BtnText>
        </BtnWrapperDisable>
      </Wrapper>
    );
  } else if (type === "dubble") {
    return (
      <Wrapper>
        <BtnWrapperDubble onClick={modalOnClick}>
          <BtnText>{mainText}</BtnText>
        </BtnWrapperDubble>
        <BtnMainSub onClick={() => navigate(`${subOnClick}`)}>
          <BtnTextSub>{subText}</BtnTextSub>
        </BtnMainSub>
      </Wrapper>
    );
  } else if (type === "default") {
    return (
      <Wrapper>
        <BtnWrapperDefault onClick={modalOnClick}>
          <BtnText>{mainText}</BtnText>
        </BtnWrapperDefault>
      </Wrapper>
    );
  } else if (type === "ghost") {
    return (
      <Wrapper>
        <BtnWrapperGhost onClick={menuOnClick}>
          <BtnTextGhost>{mainText}</BtnTextGhost>
        </BtnWrapperGhost>
      </Wrapper>
    );
  }
}

export default MainBtn