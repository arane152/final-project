import styled from "styled-components";

const StateCategoryWrapper = styled.div`
    margin: 0;
    padding: 0;
    display: inline-flex;
    line-height: 100%;
    width: auto;
    height: 22px;
    max-height: 22px;
    background-color: #FF6232;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    font-size: 12px;
    font-weight: 700;
    color: #FFFFFF;
    flex-direction: row;
    gap : 2px;

    & > img {
    height: 18px;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    }
`
const StateCaptainWrpper = styled(StateCategoryWrapper)`
    background-color: #ffffff;
    color: #FF6232;
    border: 1px solid#FF6232; 
`
const TotalAcountWrpper = styled(StateCaptainWrpper)`
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 10%);
`

function StateBadge(props){
    const {type} = props

    // type에 따라 다른 스타일의 뱃지를 렌더링합니다.
    // TotalAcount : 금액달성률 % 뱃지
    // Captain : 게시글 작성자 뱃지
    // 기본값 : 카테고리 표시 뱃지
    // props.children : 뱃지 안에 들어갈 내용
    return <>{(type=="TotalAcount") ? 
    <TotalAcountWrpper><img src="/final-project/FireState.svg" alt="로고불꽃뱃지용이미지"></img>{props.children}</TotalAcountWrpper> : 
    <>{(type=="Captain") ?  
    <StateCaptainWrpper><img src="/final-project/FireState.svg" alt="로고불꽃뱃지용이미지"></img>모집자</StateCaptainWrpper> : 
    <StateCategoryWrapper>{props.children}</StateCategoryWrapper>}</>
    }</>
}

export default StateBadge   