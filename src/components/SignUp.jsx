import { createUserWithEmailAndPassword } from "firebase/auth"

const SignUp = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[error, setError] = useState(null)

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, )
        } catch (error){
            setError(`Error in signing in: ${error}`)
        }
    }
    
    return(
        <>
            <input type="email" placeholder="email..." onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="password..." onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSignIn}>Signin</button> or
            <button>Signin with google</button>
            {error && <p>{error}</p>}
        </>
    )
}

export default SignUp