import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 393px;
    height: 247px;
    background-color: #909090;
    /* background-image: url(props); // 포스트 이미지 데이터 추가 필요 */
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
    justify-content: center;
    align-items: center;

        & > img {
            width: 393px;
            height: 247px;
            object-fit: cover;
        }
`

const ClosedWrapper = styled.div`
    display: flex;
    width: 393px;
    height: 247px;
    background-color: #000000;
    opacity: 40%;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

const ClosedImage = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    background-image: url(/RecruitmentClosed.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

function PostImage(props) {
    if (props.postRecruitment == "closed") {
        return (
            <Wrapper>
                <ClosedWrapper>
                    <ClosedImage></ClosedImage>
                </ClosedWrapper>
            </Wrapper>
        )
    }
    else {
        return (
            <Wrapper><img src={props.postImage}></img></Wrapper>
        )
    }
}

export default PostImage