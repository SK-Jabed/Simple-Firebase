import { GoogleAuthProvider, signInWithPopup } from "firebase/auth/web-extension";
import auth from "../../firebase/firebase.init";


const Login = () => {
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then ((result) => {
            console.log(result);
        })
        .catch(error => {
            console.log("Error", error);
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    );
};

export default Login;