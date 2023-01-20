import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import { useForm } from "react-hook-form" // used to create form
import { joiResolver } from "@hookform/resolvers/joi" // used to validate form (avoid bad requests right in the frontend)
import axios from "axios" // connect front to backend
import { useRouter } from "next/router" // take user from login to access page

import { loginSchema } from "../modules/user/user.schema"

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

function LoginPage () {
  const router = useRouter()
  
  const { control, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: joiResolver(loginSchema)
  })

  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
      if (status === 200) {
        router.push('/')
      }
    } catch ({ response }) {
      if (response.data === 'incorrect password') {
        setError('password', {
          message: 'The password is wrong'
        })
      }
      else if (response.data === 'user not found') {
        setError('userOrEmail', {
          message: 'User or email not found'
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>All things dev are here</H4>
      <FormContainer>
        <H2>Log into your account</H2>
        <Form onSubmit={handleSubmit(onSubmit )}>
          <Input label="Email or user" name="userOrEmail" control={control} />
          <Input label="Password" type="password" name="password" control={control} />
          <Button loading={loading} type="submit" disabled={Object.keys(errors).length > 0} >Enter</Button>
        </Form>
        <Text>Are you still not a member? <Link href="/signup">Sign up.</Link></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default LoginPage