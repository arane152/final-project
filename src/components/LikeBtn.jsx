import styled from "styled-components";
import { useState } from "react"

const LikeWrapper = styled.div`
    display: inline-flex;
    height: 20px;
    width: auto;
    padding: 0px 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const LikeIcon = styled.div`
    display: flex;
    width: 18px;
    height: 18px;
    background-image: url(/final-project/LikeIconStroke.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin-right: 5px;
`

const LikeIconChecked = styled(LikeIcon)`
    background-image: url(/final-project/LikeIconFill.svg);
`

const LikeNumberText = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #666666;
`

function LikeBtn(props) {
    const [type, setType] = useState(props.type);
    const [likeCount, setLikeCount] = useState(props.likeNumber || 0)

    const handleClick = () => {
        if (type === "default") {
            setType("like");
            setLikeCount(likeCount + 1);
        }
        else {
            setType("default");
            setLikeCount(likeCount - 1);
        }
    }

    return (
        <LikeWrapper onClick={handleClick}>
            {type === "default" ? <LikeIcon /> : <LikeIconChecked />}
            <LikeNumberText>{likeCount}</LikeNumberText>
        </LikeWrapper>
    )
}

export default LikeBtn