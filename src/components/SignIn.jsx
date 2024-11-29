import { useState } from "react";
import { Link } from "react-router";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(`Error in signing in: ${error}`);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      setError(`Error in signing in: ${error}`);
    }
  };

  return (
    <>
      <h1>Signin</h1>
      <input
        type="email"
        placeholder="email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Signin</button> or
      <button>Signin with google</button>
      {error && <p>{error}</p>}
      <p>
        Already have an account? <Link to="/SignIn">Signin</Link>
      </p>
    </>
  );
};

export default SignIn;
