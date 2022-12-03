import "../styles/globals.css";
import NavMenu from "../components/navMenu";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavMenu></NavMenu>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
