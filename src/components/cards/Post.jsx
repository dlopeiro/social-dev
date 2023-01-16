import styled from "styled-components"
import moment from "moment/moment"
import Menu from "../navigation/Menu"

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  border-radius: 10px;
`

const StyledUsername = styled.p`
  font-weight: bold;
  font-size: 18px;
`

const StyledDate = styled.p`
  font-size: 12px;
`

const ContainerText = styled.div`
  margin-top: 20px;
`

const ContainerMenu = styled.div`
  float: right;
`

function Post ({ text, user, date }) {
  const handleEdit = () => {
    console.log('edit post')
  }

  const handleDelete = () => {
    console.log('delete post')
  }

  return (
    <PostContainer>
      <ContainerMenu>
        <Menu options={
          [
            {text: 'Edit post', onClick: handleEdit},
            {text: 'Delete post', onClick: handleDelete}
          ]
        } />
      </ContainerMenu>
      <StyledUsername>@{user}</StyledUsername>
      <StyledDate>{moment(date).format('LLL')}</StyledDate>
      <ContainerText>
        {text}
      </ContainerText>
    </PostContainer>
  )
}

export default Post