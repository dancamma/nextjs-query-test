import React from "react";

import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
