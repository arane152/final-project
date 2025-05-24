import styled from "styled-components";

const LikeWrapper = styled.div`
    display: inline-flex;
    height: 20px;
    width: auto;
    padding: 0px 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const LikeIcon = styled.div`
    display: flex;
    width: 18px;
    height: 18px;
    background-image: url(/LikeIconStroke.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin-right: 5px;
`

const LikeIconChecked = styled(LikeIcon)`
    background-image: url(/LikeIconFill.svg);
`

const LikeNumber = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #666666;
`

function LikeBtn(props) {
    if (props.type == "default") {
        return (
            <LikeWrapper>
                <LikeIcon></LikeIcon>
                <LikeNumber>{props.likeNumber}</LikeNumber>
            </LikeWrapper>
        )
    }
    else if (props.type == "like") {
        return (
            <LikeWrapper>
                <LikeIconChecked></LikeIconChecked>
                <LikeNumber>{props.likeNumber}</LikeNumber>
            </LikeWrapper>
        )
    }

}

export default LikeBtn