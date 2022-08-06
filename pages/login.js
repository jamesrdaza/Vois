import { useRef } from "react";
import { useRouter } from "next/router";
import styles from "../styles/signup.module.css"


function login() {
    const router = useRouter();

    const userRef = useRef();
    const pwRef = useRef()

    const signIn = () => {
        let payload = { username: userRef.current.value, password: pwRef.current.value };
        pwRef.current.value = null;
        fetch("api/auth/signin", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
            .then((res) => {
                res.json().then((data) => {
                    window.localStorage.setItem("sessionToken", data.sessionToken);
                    router.push("/dashboard");
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }
    return (
        <div className={styles.inputContainer}>
            <div className={styles.signup}>
                <h4>Username</h4>
                <input ref={userRef} className={styles.username} type="text" />
                <h4>Password</h4>
                <input ref={pwRef} className={styles.password} type="password" />
                <div className={styles.submit}>
                    <button onClick={signIn}>Sign In</button>
                </div>
            </div>
        </div>
    );
}

export default login;