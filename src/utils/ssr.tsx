import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { dehydrate, QueryClient, QueryClientProvider } from "react-query";
import ssrPrepass from "react-ssr-prepass";
import { createMockRouter } from "next-router-provider";

export const getGetStaticProps: <T extends ParsedUrlQuery>(
  Component: React.FC<T>
) => GetStaticProps<{}, T> = (Component) => {
  return async (context) => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { suspense: true } },
    });

    const router = createMockRouter({
      pathname: "",
      query: (context.params as Record<string, string>) || {},
    });

    const { RouterContext } = await import(
      "next/dist/shared/lib/router-context"
    );

    const element = (
      <RouterContext.Provider value={router}>
        <QueryClientProvider client={queryClient}>
          {context.params && <Component {...context.params} />}
        </QueryClientProvider>
      </RouterContext.Provider>
    );

    await ssrPrepass(element);

    return {
      props: {
        ...context.params,
        dehydratedState: dehydrate(queryClient),
      },
    };
  };
};
