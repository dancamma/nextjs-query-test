import React from "react";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useQuery } from "react-query";
import { gql } from "graphql-request";
import { pokemonClient } from "../../utils/pokemon";
import { PokemonsQuery, PokemonsQueryVariables } from "../../generated/graphql";
import { Pokemon } from "../../components/Pokemon";
import { ParsedUrlQuery } from "querystring";
import { getGetStaticProps } from "../../utils/ssr";

const POKEMONS = gql`
  query Pokemons {
    pokemons(first: 10) {
      id
      name
    }
  }
`;
interface PageProps extends ParsedUrlQuery {
  name: string;
}

const PokemonDetail: NextPage<PageProps> = () => {
  return <Pokemon />;
};

export const getStaticProps: GetStaticProps<{}, PageProps> =
  getGetStaticProps(PokemonDetail);

export const getStaticPaths: GetStaticPaths<{ name: string }> = async () => {
  const { pokemons } = await pokemonClient.request<
    PokemonsQuery,
    PokemonsQueryVariables
  >(POKEMONS);
  return {
    fallback: "blocking",
    paths:
      pokemons?.map((pokemon) => ({
        params: { name: pokemon?.name?.toLowerCase() || "" },
      })) || [],
  };
};

export default PokemonDetail;
