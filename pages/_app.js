import { SessionProvider } from "next-auth/react";
import { WagmiConfig } from "wagmi"
import '../styles/globals.css'
import { configureChains, chain } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import {
  createClient,
  defaultChains,
} from 'wagmi'


const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon],
  [publicProvider()],
)
const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
})


function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig autoConnect client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </WagmiConfig>
  )

}

export default MyApp
