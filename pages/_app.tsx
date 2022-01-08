import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { Header } from "../components/layout/header";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Head>
        <title>Felipe Ruiz Pinto</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Full Stack Web Developer" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
