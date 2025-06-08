import styled from 'styled-components'
import Percent from './Percent'
import { useStore } from '../../context/StoreContext'
const Wrapper = styled.div`
    display: flex;
    width: 353px;
    height: 49px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const WrapperSimple = styled(Wrapper)`
    height: 32px;
`

const StatusText = styled.p`
    width: 48px;
    height: 28px;
    font-size: 20px;
    font-weight: 600;
    color: #FF6232;
    justify-content: center;
    text-align: right;
`

const StatusBarWrapper = styled.div`
    display: flex;
    width: 285px;
    height: 49px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`

const StatusBarTextWrapper = styled.div`
    display: flex;
    min-width: 197px;
    width: 240px;
    height: 17px;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: #606060;
`

const StatusBarText = styled.p`
    width: auto;
`

const StatusBarBackground = styled.div`
    display: flex;
    position: relative;
    width: 285px;
    height: 32px;
    /* justify-content: center; */
    align-items: center;
    background-image: url('./assets/StatusBarBackground.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: -4px;
    z-index: 1;
`

const StatusBarBackgroundSimple = styled(StatusBarBackground)`
    margin-top: 0;
`

const StatusBarImg = styled.div`
    display: flex;
    position: absolute;
    left: 4px;
    width: 24px;
    height: 24px;
    background-image: url('./assets/StatusBarLogo.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 2;
`

const StatusBarMarker = styled.div`
    display: flex;
    width: ${({ percentPrice }) => 15 + (Math.min(percentPrice ?? 0, 100) / 100) * (256 - 15)}px;
    height: 4px;
    background-color: #FF6232;
    margin-left: 24px;
    border-radius: 2px;
`

const StatusBarMark = styled.div`
    display: flex;
    width: 248px;
    height: 8px;
    background-image: url('./assets/StatusBarMark.svg');
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -4px;
`

//아래부터는 alarm 타입용
const BackProgress = styled.div`
    border: #FFB9B9 1px solid;
    height: 12px;
    background-color: #FFF5D5;
    border-radius: 6px;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    margin-top: -4px;
`
const FrontProgress = styled.div`
    height: 4px;
    background-color: #FF6232;
    border-radius: 2px;
    width: ${({ $percent }) => $percent}%;
    z-index: 2;
    margin-top: -9px;
    margin-left: -4px;
`
const BackProgressimg = styled.img`
    height: 32px;
    z-index: 2;
`
const FrontProgressimg = styled.img`
    height: 24px;
    z-index: 3;
    margin-left: -36px;
`
const Progressflex = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
`
const WrapperAlarm = styled.div`
    width: 100%;
    gap: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const AlarmText = styled.h1`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 100%;
    height: 28px;
    font-size: 20px;
    font-weight: 600;
    color: #FF6232;
    align-content: center;
    text-align: right;
`
const ProgressBarflex = styled.div`
    height: 100%;
    display: flex;
    width: 100%;
    flex-direction: column;
`
function StatusBar(props) {
    //데이터
    const { post, totalSum } = props;
    const { storeData } = useStore();

    //스토어 컬렉션 불러오기
    const matchedStore = storeData.find(store => store.id == post.storeId || post.store?.[0]);

    // 최소주문금액
    const minPrice = matchedStore ? matchedStore.minPrice : 1;

    //퍼센트 계산
    const percentPrice = Math.floor((totalSum / minPrice) * 100);

    if (props.type == "alarm") {
        return (
            <WrapperAlarm>
                <Progressflex>
                    {/* 노란원이미지 */}
                    <BackProgressimg src="./assets/ProgressBackground_1.svg"></BackProgressimg>
                    {/* 주황원이미지, 음수마진으로 겹치기 */}
                    <FrontProgressimg src="./assets/StatusBarLogo.svg"></FrontProgressimg>

                    {/* 게이지바div , 음수마진으로 원과 살짝 겹치기 */}
                    <ProgressBarflex>
                        {/* 노란바div, width 변경시 이미지전체가 짜부돼서 div로 변경  */}
                        <BackProgress></BackProgress>
                        {/* 주황바div , percent함수로 width 조절, 음수마진으로 겹치기 */}
                        <FrontProgress
                            $percent={percentPrice >= 100 ? 100 : percentPrice}>
                        </FrontProgress>
                    </ProgressBarflex>
                </Progressflex>
                <AlarmText>{percentPrice}%</AlarmText>
            </WrapperAlarm>
        )
    } else if (props.type == "simple") {
        return (
            <WrapperSimple>
                <StatusBarWrapper>
                    <StatusBarBackgroundSimple>
                        <StatusBarMarker percentPrice={percentPrice}></StatusBarMarker>
                        <StatusBarImg></StatusBarImg>
                    </StatusBarBackgroundSimple>
                </StatusBarWrapper>
                <StatusText>{percentPrice}%</StatusText>
            </WrapperSimple>
        )
    }
    else {
        return (
            <Wrapper>
                <StatusBarWrapper>
                    <StatusBarTextWrapper>
                        <StatusBarText>지금담긴금액 {totalSum}원</StatusBarText> / <StatusBarText>최소주문금액 {minPrice}원</StatusBarText>
                    </StatusBarTextWrapper>
                    <StatusBarBackground>
                        <StatusBarMarker percentPrice={percentPrice}></StatusBarMarker>
                        <StatusBarImg></StatusBarImg>
                    </StatusBarBackground>
                    <StatusBarMark></StatusBarMark>
                </StatusBarWrapper>
                <StatusText>{percentPrice}%</StatusText>
            </Wrapper>
        )
    }

}

export default StatusBar