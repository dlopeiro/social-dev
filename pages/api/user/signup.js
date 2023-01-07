import { signupUser } from "../../../modules/user/user.service"

function signup (req, res) {
  signupUser()
  res.status(200).json({ test: "ok" })
}

export default signup