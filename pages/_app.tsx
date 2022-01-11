import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Head from "next/head";
import { Layout } from "../components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Felipe Ruiz Pinto</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Full Stack Web Developer with more than 6 years of experience"
        />
      </Head>
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Fragment>
  );
}

export default MyApp;
