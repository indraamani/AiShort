import { SignIn } from "@clerk/react"

function Login() {
  return (
      <div className="h-dvh flex justify-center items-center">
        <SignIn
          signUpUrl="/signup"
        />
    </div>
  )
}

export default Login