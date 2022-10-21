import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/layout/layout";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../react-query";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Head>
          <title>Felipe Ruiz Pinto</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Full Stack Web Developer with more than 6 years of experience"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
