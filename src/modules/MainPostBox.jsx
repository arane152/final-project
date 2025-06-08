import styled from "styled-components";

const StyledBox =styled.div`
height: 576px;
overflow-y: scroll; 
scrollbar-width: none;      
-ms-overflow-style: none;     

&::-webkit-scrollbar {
  display: none;       
}
`
const PostUl =styled.div`
display: flex;
flex-direction: column;
padding: 12px 0;
gap: 20px;

`
//Mainpage 컨테이너 모듈
function PostBox(props){
  const {children} = props
  return (
      <StyledBox>
        <PostUl>
          {children}
        </PostUl>
      </StyledBox>
  )
}

export default PostBox