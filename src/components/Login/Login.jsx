
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            console.log(result.user);
            setUser(result.user);
          })
          .catch((error) => {
            console.log("ERROR", error);
            setUser(null);
          });
    }

    const handleGithubSignIn = () => {
      signInWithPopup(auth, githubProvider)
        .then((result) => {
          console.log(result.user);
          setUser(result.user);
        })
        .catch((error) => {
          console.log("ERROR", error);
          setUser(null);
        });
    };

    const handleSignOut = () => {
        signOut(auth)

        .then (() => {
            console.log("Sign Out Done");
            setUser(null);
        })
        .catch(error => {
            console.log(error);
        })
    }


    return (
      <div style={{marginTop: "16px"}}>
        {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
        <button onClick={handleSignOut}>Sign Out</button> */}

        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
            <>
                <button onClick={handleGoogleSignIn}>Login with Google</button>
                <button onClick={handleGithubSignIn}>Login with GitHub</button>
            </>
        )}

        {user && (
          <div>
            <h3>{user.displayName}</h3>
            <p>Email: {user.email}</p>
            <img src={user.photoURL}></img>
          </div>
        )}
      </div>
    );
};

export default Login;