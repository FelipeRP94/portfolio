import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/layout/layout";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../react-query";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const SessionProvider = dynamic(() =>
  import("next-auth/react").then((mod) => mod.SessionProvider)
);

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { pathname } = useRouter();

  const isAdmin = pathname.includes("admin");

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
      <Layout>
        <QueryClientProvider client={queryClient}>
          {isAdmin ? (
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          ) : (
            <Component {...pageProps} />
          )}
        </QueryClientProvider>
      </Layout>
    </>
  );
}

export default MyApp;
