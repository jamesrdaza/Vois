import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function home() {
  const router = useRouter();

  // Need to make this generated on backend or keep track of nonce
  const messageToSign = "In order to verify please sign this message";
  const [isConnected, setIsConnected] = useState(false);
  const [mmValid, setMmValid] = useState(false);
  useEffect(() => {
    //Check for Metamask
    if (window.ethereum === undefined) {
      alert("We noticed you don't have metamask installed. \n Metamask is required to access our site.");
    } else {
      setMmValid(true);

      // If already connected set flag
      if (window.ethereum.selectedAddress) {
        setIsConnected(true);
      }
    }
  }, [])

  // Connect wallet to MetaMask
  const connectWallet = async () => {
    if (mmValid) {
      window.ethereum.request({
        method: "eth_requestAccounts"
      });
    } else {
      "Please Install Metamask"
    }
  }

  const checkStoreValid = (storeItem) => {
    // Return true or false is token is valid or not
    if (storeItem && storeItem !== "undefined") {
      return true;
    } else {
      return false;
    }
  }
  const verifyWallet = async () => {
    //Check if token exists and valid
    let token = window.localStorage.getItem("sessionToken");
    let tokenValid = checkStoreValid(token);

    // Check if time exists and is valid then set time to compare
    let expireDate = window.localStorage.getItem("expiresAt");
    let expireDateValid = checkStoreValid(expireDate);
    let expireTime = expireDateValid ? new Date(expireDate) : 0;

    // Auto-sign in if session token in browser is valid
    if (tokenValid && expireDateValid && (Date.now() < expireTime)) {
      router.push("/dashboard");
    } else if (isConnected) { // If already connected just ask for signature
      try {

        // Request to sign message
        let signedMessage = await window.ethereum.request({
          method: "personal_sign",
          params: [window.ethereum.selectedAddress, messageToSign]
        })

        // Send request to server
        let payload = { address: window.ethereum.selectedAddress, signedMessage: signedMessage }
        fetch("api/authenticate", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
          .then((res) => {
            res.json().then((data) => {
              if (checkStoreValid(data.sessionToken) && checkStoreValid(data.expiresAt)) {
                window.localStorage.setItem("sessionToken", data.sessionToken);
                window.localStorage.setItem("expiresAt", data.expiresAt);
                router.push("/dashboard");
              } else {
                throw "Authentication Error";
              }
            })
          })
          .catch((err) => {
            console.error(err);
          })
      } catch (err) {
        alert(err.message);
      }

    }
  }
  return (

    <div className={styles.container}>
      <Head>
        <title>Vois</title>
        <meta name="description" content="Vois" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.left}>
          <h3 className={styles.title}>
            Vois
          </h3>
          <h3 className={styles.subTitle}>A community driven NFT-oriented social media platform </h3>
        </div>
        <div className={styles.right}>
          <div className={styles.buttonContainer} >
            {!isConnected && <button className={styles.button} onClick={connectWallet}>Connect</button>}
            {isConnected && <button className={styles.button} onClick={verifyWallet}>Sign In</button>}
          </div>
        </div>




      </main>
    </div>
  )
}
