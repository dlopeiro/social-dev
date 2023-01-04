import styled from "styled-components"

const StyledNavbar = styled.div`
  background-color: ${props => props.theme.white};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 100px;
`

const StyledLogo = styled.span`
  flex: 1; // this means the StyledLogo will take up the most space in its parent, allowing only for the necessary space to other components
  font-weight: bold;
  font-size: 20px;
`

function Navbar () {
  return (
    <StyledNavbar>
      <StyledLogo># Social Dev</StyledLogo>
      <div>
        <a href="#">Disconnect</a>
      </div>
    </StyledNavbar>
  )
}

export default Navbar