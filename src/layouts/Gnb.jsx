import styled from 'styled-components'

const GnbWrapper = styled.div`
    display: flex;
    width: 393px;
    height: 80px;
    background-color: #FFF;
    align-items: center;
    box-shadow: 0px -4px 4px rgba(128, 128, 128, 0.1);
`

const GnbLayout = styled.div`
    display: flex;
    width: 300px;
    height: 46px;
    justify-content: space-between;
    margin-top: 9px;
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

export default Gnb