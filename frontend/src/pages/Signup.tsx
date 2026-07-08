import { SignUp } from "@clerk/react";


export default function Signup() {
    return (
        <div className="h-dvh flex justify-center items-center">
            <SignUp
                signInUrl="/login"/>
        </div>
    )
}