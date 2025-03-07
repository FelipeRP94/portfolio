import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/layout/layout";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../react-query";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>Felipe Ruiz Pinto</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Full Stack Web Developer with more than 7 years of experience"
        />
      </Head>
      <Layout session={session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </>
  );
}

export default MyApp;
