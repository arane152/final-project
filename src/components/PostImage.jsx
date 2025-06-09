import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 393px;
    height: 247px;
    background-color: #909090;
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
    background-image: url(/final-project/RecruitmentClosed.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100px 100px;
    z-index: 3;
`

function PostImage(props) {
    // props.postImage: 게시글 이미지 URL
    // props.postRecruitment: 게시글 모집 상태 ("closed" or "open")
    // 기본 이미지: "/final-project/PostImgBasic.svg"
    // 만약 props.postRecruitment가 "closed"라면, ClosedImage를 보여줌
    // 만약 props.postImage가 없으면 기본 이미지 사용
    
    const {postImage} = props;
    if (props.postRecruitment == "closed") {
        return (
            <Wrapper>
                <ClosedWrapper>
                    <img src={postImage || "/final-project/PostImgBasic.svg"} alt="..."></img>
                    <ClosedImage/>
                </ClosedWrapper>
            </Wrapper>
        )
    }
    else {
        return (
            <Wrapper><img src={postImage || "/final-project/PostImgBasic.svg"} alt="..."></img></Wrapper>
        )
    }
}

export default PostImage