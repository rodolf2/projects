import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebase";

const SignOut = () => {
    const navigate = useNavigate()
    const handleSignOut = async () => {
        await signOut(auth)
        navigate('/SignIn')
    }
}

export default SignOut