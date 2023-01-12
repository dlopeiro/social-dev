import styled from "styled-components"
import axios from "axios"
import { useRouter } from "next/router"

const StyledNavbar = styled.div`
  background-color: ${props => props.theme.white};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 100px;

  @media (max-width: 425px) {
    padding: 0 20px;
  }
`

const StyledLogo = styled.span`
  flex: 1; // this means the StyledLogo will take up the most space in its parent, allowing only for the necessary space to other components
  font-weight: bold;
  font-size: 20px;
`

const StyledLogout = styled.a`
  cursor: pointer;
`

function Navbar () {
  const router = useRouter()

  const handleLogout = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`)
    router.push('/')
  }

  return (
    <StyledNavbar>
      <StyledLogo># Social Dev</StyledLogo>
      <div>
        <StyledLogout onClick={handleLogout}>Disconnect</StyledLogout>
      </div>
    </StyledNavbar>
  )
}

export default Navbar