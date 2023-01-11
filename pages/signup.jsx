import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { joiResolver } from "@hookform/resolvers/joi"

import { signupSchema } from "../modules/user/user.schema"

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
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(signupSchema)
  })

  const handleForm = (data) => {
    console.log(data)
  }

  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>All things dev are here</H4>
      <FormContainer>
        <H2>Create your account</H2>
        <Form onSubmit={handleSubmit(handleForm)}>
          <Input label="First name" {...register('firstName')} error={errors.firstName} />
          <Input label="Last name" {...register('lastName')} error={errors.lastName} />
          <Input label="User" {...register('user')} error={errors.user} />
          <Input label="Email" type="email" {...register('email')} error={errors.email} />
          <Input label="Password" type="password" {...register('password')} error={errors.password} />
          <Button type="submit" disabled={Object.keys(errors).length > 0}>Sign up</Button>
        </Form>
        <Text>Are you a member already? <Link href="/login">Log in here.</Link></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default SignupPage