import styled from 'styled-components'

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
    background-image: url(/StatusBarBackground.svg);
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
    background-image: url(/StatusBarLogo.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 2;
`

const StatusBarMarker = styled.div`
    display: flex;
    width: ${props => 15 + ((props.totalPercent ?? 0) / 100) * (256 - 15)}px;
    height: 4px;
    background-color: #FF6232;
    margin-left: 24px;
    border-radius: 2px;
`

const StatusBarMark = styled.div`
    display: flex;
    width: 248px;
    height: 8px;
    background-image: url(/StatusBarMark.svg);
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -4px;
`

function StatusBar(props) {
    const totalPercent = props.postMinPrice === 0 ? 0 : Math.min(Math.round((props.nowPrice / props.postMinPrice) * 100), 100);

    if (props.type == "simple") {
        return (
            <WrapperSimple>
                <StatusBarWrapper>
                    <StatusBarBackgroundSimple>
                        <StatusBarMarker totalPercent={totalPercent}></StatusBarMarker>
                        <StatusBarImg></StatusBarImg>
                    </StatusBarBackgroundSimple>
                </StatusBarWrapper>
                <StatusText>{props.totalPercent}%</StatusText>
            </WrapperSimple>
        )
    }
    else {
        return (
            <Wrapper>
                <StatusBarWrapper>
                    <StatusBarTextWrapper>
                        <StatusBarText>지금담긴금액 {props.nowPrice}원</StatusBarText> / <StatusBarText>최소주문금액 {props.postMinPrice}원</StatusBarText>
                    </StatusBarTextWrapper>
                    <StatusBarBackground>
                        <StatusBarMarker totalPercent={totalPercent}></StatusBarMarker>
                        <StatusBarImg></StatusBarImg>
                    </StatusBarBackground>
                    <StatusBarMark></StatusBarMark>
                </StatusBarWrapper>
                <StatusText>{totalPercent}%</StatusText>
            </Wrapper>
        )
    }

}

export default StatusBar