import styled from "styled-components";

const StyledBox = styled.div`
width: 393px;
box-sizing: border-box;
overflow-x: scroll;
background-color: #f8f8f8;
margin: 0;
padding: 15px 20px;
scrollbar-width: none;      
-ms-overflow-style: none;     

&::-webkit-scrollbar {
  display: none;       
}
`
const CategoryUl = styled.ul`
display: flex;
height: 32px;
margin: 0;
padding: 0;
gap: 8px;
white-space: nowrap;

  &::after {
    content: '';
    flex: 0 0 12px;
  }
`

//Mainpage 컨테이너 모듈
function CategoryBox(props){
  const {children} = props
  return (
      <StyledBox>
        <CategoryUl>
          {children}
        </CategoryUl>
      </StyledBox>
  )
}

export default CategoryBox