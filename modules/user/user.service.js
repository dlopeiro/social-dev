import { hashPassword, comparePassword } from "../../utils/bcrypt"

import User from "./user.module"

export const signupUser = async (body) => {
  try {
    const user = {
      ...body,
      password: hashPassword(body.password)
    }
    const dbUser = await User.create(user)
    return dbUser
  } catch (err) {
    throw err
  }
}

export const login = async (body) => {
  try {
    const user = await User.findOne({
      $or: [
        { email: body.userOrEmail },
        { user: body.userOrEmail }
      ]
    })

    if (!user) throw new Error('user not found')
    const isPasswordCorrect = comparePassword(body.password, user.password)
    if (!isPasswordCorrect) throw new Error('incorrect password')

  return user    
  } catch (err) {
    throw err
  }
}