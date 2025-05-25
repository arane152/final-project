import styled from "styled-components";

const StateCategoryWrapper = styled.div`
    margin: 0;
    padding: 0;
    display: inline-flex;
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
    //type : TotalAcount = 금액달성률 % 뱃지 | Captain : 게시글 작성자 뱃지 | 기본값 : 카테고리표시뱃지지
    return <>{(type=="TotalAcount") ? 
    <TotalAcountWrpper><img src="/FireState.svg" alt="로고불꽃뱃지용이미지"></img>{props.children}</TotalAcountWrpper> : 
    <>{(type=="Captain") ?  
    <StateCaptainWrpper><img src="/FireState.svg" alt="로고불꽃뱃지용이미지"></img>{props.children}</StateCaptainWrpper> : 
    <StateCategoryWrapper>{props.children}</StateCategoryWrapper>}</>
    //StateCategoryWrapper 요소는 img 베이스라인 차이때문에 하단으로 밀려서 배치되는 현상이 있는데 
    //상위컴포넌트에서 배치 잡으니까 큰 상관 없을 것 같아서 일단 올립니다
    }</>
}

export default StateBadge   