import styled from "styled-components";

import Device from "../src/layouts/Device";
import Header from "../src/layouts/Header";
import Gnb from "../src/layouts/Gnb";


import MainBtn from "../src/components/MainBtn";
import PostImage from "../src/components/PostImage";
import PostConatiner from "../src/modules/PostContainer";
import PostMenuConatiner from "../src/modules/PostMenuContainer";


function PostViewPage(props) {
    // props.userType : 유저 타입 (글쓴이 : "writer" / 참여자 : "")
    if (props.userType == "writer") {
        return (
            <Device content="함께먹기" headerType="" gnbType="btn" btnType="dubble" btnMainText="모집종료" btnSubText="신청현황">
                <PostImage></PostImage>
                <PostConatiner postTitle="post 제목" postContent="post 내용"></PostConatiner>
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
            </Device>
        )
    }
    else {
        return (
            <Device content="함께먹기" headerType="" gnbType="btn" btnType="default" btnMainText="신청하기">
                <PostImage></PostImage>
                <PostConatiner postTitle="post 제목" postContent="post 내용"></PostConatiner>
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
                <PostMenuConatiner userType={props.userType}></PostMenuConatiner>
            </Device>
        )
    }

}

export default PostViewPage