import { useRef } from "react";
import styles from "../styles/signup.module.css"
import Router from "next/dist/server/router";

function signup() {
    const userRef = useRef();
    const pwRef = useRef();

    const createUser = () => {
        let payload = { username: userRef.current.value, password: pwRef.current.value };
        fetch("api/auth/signup", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
            .then((res) => {
                res.json().then((data) => {
                    console.log(data);
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <div className={styles.inputContainer}>
            <h4 style={{ position: "absolute", top: "5%" }} >Welcome To Our Ecosystem</h4>
            <div className={styles.signup}>
                <h4>Username</h4>
                <input ref={userRef} className={styles.username} type="text" />
                <h4>Password</h4>
                <input ref={pwRef} className={styles.password} type="password" />
                <div className={styles.submit}>
                    <button onClick={createUser}>Create Account</button>
                </div>
            </div>
        </div>
    );
}

export default signup;