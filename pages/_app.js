import '../styles/globals.css'
import { IconContext } from "react-icons";

function MyApp({ Component, pageProps }) {
  return (
    <IconContext.Provider value={{ color: "blue" }}>
      <Component {...pageProps} />
    </IconContext.Provider>
  )

}

export default MyApp
