import styled from "styled-components";
import { defaultAllowedOrigins } from "vite";

const LikeWrapper = styled.div`
    display: inline-flex;
    height: 20px;
    width: auto;
    padding: 0px 4px;
`

const LikeIcon = styled.div`
    display: flex;
    width: 18px;
    height: 18px;

`

const LikeNumber = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #666666;
`

function Like(props) {
    return (
        <LikeWrapper>
            <LikeIcon></LikeIcon>
            <LikeNumber>{props.like-number}</LikeNumber>
        </LikeWrapper>
    )
}

export default Like