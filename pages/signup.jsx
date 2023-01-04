import styled from "styled-components"
import Link from "next/link"

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"
import Button from "../src/components/inputs/Button"
import Input from "../src/components/inputs/Input"

const FormContainer = styled.div`
  margin-top: 60px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`

const Text = styled.p`
  text-align: center;
`

function SignupPage () {
  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>All things dev are here</H4>
      <FormContainer>
        <H2>Create your account</H2>
        <Form>
          <Input label="Name" />
          <Input label="Surname" />
          <Input label="User" />
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <Button>Enter</Button>
        </Form>
        <Text>Are you a member already? <Link href="/login">Log in here.</Link></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default SignupPage