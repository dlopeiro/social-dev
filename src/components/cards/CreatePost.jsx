import styled from "styled-components"

import H4 from "../typography/H4"
import Textarea from "../inputs/TextArea"
import Button from "../inputs/Button"

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px 40px;

  @media (max-width: 440px) {
    padding: 20px;
  }
`

const Title = styled.div`
  font-weight: bold;
  text-align: center;
`

const TextContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`

const BottomContainer = styled.div`
  display: flex;  
  align-items: center;
  gap: 7px;

  @media (max-width: 440px) {
    flex-direction: column-reverse;
  }
`

const BottomText = styled.p`
  flex: 1;
`

function CreatePost () {
  return (
    <PostContainer>
      <H4><Title>What's in your mind, @username?</Title></H4>
      <TextContainer>
        <Textarea placeholder="Type something" rows="4"/>
      </TextContainer>
      <BottomContainer>
        <BottomText>This message will be public</BottomText>
        <Button>Send message</Button>
      </BottomContainer>
    </PostContainer>
  )
}

export default CreatePost