import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { dehydrate, QueryClient, QueryClientProvider } from "react-query";
import ssrPrepass from "react-ssr-prepass";

export const getGetStaticProps: <T extends ParsedUrlQuery>(
  Component: React.FC<T>
) => GetStaticProps<{}, T> = (Component) => {
  return async (context) => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { suspense: true } },
    });

    const element = (
      <QueryClientProvider client={queryClient}>
        {context.params && <Component {...context.params} />}
      </QueryClientProvider>
    );

    await ssrPrepass(element);

    return {
      props: {
        name: context?.params?.name,
        dehydratedState: dehydrate(queryClient),
      },
    };
  };
};
