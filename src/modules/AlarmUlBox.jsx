import styled from "styled-components";
const AlarmUl = styled.ul`
  margin: 0;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 35px;
`
const StyledBox = styled.div` 
  padding-bottom: 20px;
  flex: 1 1 auto;
  overflow-y: scroll;
  scrollbar-width: none;      
-ms-overflow-style: none;     

&::-webkit-scrollbar {
  display: none;       
}
`
function UlBox(props){
  const {children} = props
  return (
      <StyledBox>
        <AlarmUl>
          {children}
        </AlarmUl>
      </StyledBox>
  )
}

export default UlBox