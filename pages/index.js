import Head from "next/head"
import styles from "../styles/Home.module.scss"
import { useEffect, useState } from "react";
import { getCsrfToken, signIn, } from "next-auth/react"
import { SiweMessage } from "siwe"
import { useAccount, useConnect, useSignMessage } from "wagmi"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"

export default function Home() {
  const [isConnected, setIsConnected] = useState(false)
  const { signMessageAsync } = useSignMessage()
  const [mmValid, setMmValid] = useState(false);
  const { address } = useAccount()
  const { connectors, connect } = useConnect(
    { connector: new MetaMaskConnector() }
  )

  useEffect(() => {
    //Check for Metamask
    if (window.ethereum.selectedAddress === undefined) {
      alert("We noticed you don't have metamask installed. \n Metamask is required to access our site.");
    } else {
      setMmValid(true);

      // Check if connected
      if (window.ethereum.selectedAddress !== undefined) {
        setIsConnected(true)
      } else {
        setIsConnected(false)
      }
    }

  }, [])

  // Sign message and POST then next/auth handles session
  const handleLogin = async () => {
    try {
      const callbackUrl = "/dashboard";
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: "In order to verify please sign this message",
        uri: window.location.origin,
        version: "1",
        chainId: 1,
        nonce: await getCsrfToken()
      });
      const signature = await signMessageAsync({ message: message.prepareMessage() });
      signIn("credentials", { message: JSON.stringify(message), signature: signature, callbackUrl: callbackUrl });
    } catch (error) {
      window.alert(error)
    }
  }

  const connectWallet = () => {
    connect(connectors[0])

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
            {isConnected && <button className={styles.button} onClick={handleLogin}>Sign In</button>}
          </div>
        </div>
      </main>
    </div>
  )
}
