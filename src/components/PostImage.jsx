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
    position: relative;
    width: 393px;
    height: 247px;
    background-color: #000000;
    justify-content: center;
    align-items: center;
    z-index: 1;

    & > img {
            width: 393px;
            height: 247px;
            object-fit: cover;
            z-index: 1;
        }
`

const ClosedImage = styled.div`
    display: flex;
    position: absolute;
    background-color: #0000006e;
    width: 393px;
    height: 247px;
    background-image: url(../assets/RecruitmentClosed.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100px 100px;
    z-index: 3;
`

function PostImage(props) {
    // props.postRecruiment의 기본값은 "open"으로 설정되어 있다고 가정합니다.
    // 만약 "closed"로 설정되어 있다면, 닫힌 상태의 이미지를 보여줍니다.
    // props.postImage는 포스트의 이미지 URL을 받아옵니다.
    const { postImage } = props;
    if (props.postRecruitment == "closed") {
        return (
            <Wrapper>
                <ClosedWrapper>
                    <img src={postImage || "./assets/PostImgBasic.svg"} alt="..."></img>
                    <ClosedImage />
                </ClosedWrapper>
            </Wrapper>
        )
    }
    else {
        return (
            <Wrapper><img src={postImage || "./assets/PostImgBasic.svg"} alt="..."></img></Wrapper>
        )
    }
}

export default PostImage