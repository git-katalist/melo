import "../styles/globals.css";
import { Global } from "../styles/Global";
import { Theme } from "../styles/Theme";
import { Wrapper, Header, Footer } from "../components/index";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <Header />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
