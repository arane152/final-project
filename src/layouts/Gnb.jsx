import styled from 'styled-components'

const GnbWrapper = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    bottom: 0;
    width: 393px;
    height: 100px;
    background-color: #FFF;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px -4px 4px rgba(128, 128, 128, 0.1);
    margin: 0;
    z-index: 5;
`

const GnbLayout = styled.div`
    display: flex;
    width: 300px;
    height: 46px;
    justify-content: space-between;
    align-items: center;
    margin-top: 9px;
`

const GnbBtn = styled(GnbLayout)`
    width: 353px;
    justify-content: center;
    margin-top: 16px;
`

const GnbHomeIcon = styled.div`
    display: flex;
    width: 36px;
    height: 36px;
    background-image: url(/HomeIcon.svg);
`

const GnbProfileIcon = styled.div`
    display: flex;
    width: 36px;
    height: 36px;
    background-image: url(/ProfileIcon.svg);
`

const GnbAddIcon = styled.div`
    display: flex;
    width: 46px;
    height: 46px;
    background-image: url(/AddPostIcon.svg);
`

function Gnb(props) {
    // props.type : gnb 타입 (gnb : "gnb" / 버튼 : "btn")
    // props.children : gnb 타입중 btn 타입일때, 안에 들어가는 버튼
    if (props.type == "gnb") {
        return (
            <GnbWrapper>
                <GnbLayout>
                    <GnbHomeIcon></GnbHomeIcon>
                    <GnbAddIcon></GnbAddIcon>
                    <GnbProfileIcon></GnbProfileIcon>
                </GnbLayout>
            </GnbWrapper>
        )
    }
    else if (props.type == "btn") {
        return (
            <GnbWrapper>
                <GnbBtn>
                    {props.children}
                </GnbBtn>
            </GnbWrapper>
        )
    }    
    else if (props.type == "none") {
        return (
            <></>
        )
}}

export default Gnb