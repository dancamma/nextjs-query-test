import React from "react";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useDebounce } from "use-debounce";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { gql } from "graphql-request";
import { pokemonClient } from "../../utils/pokemon";
import {
  PokemonQuery,
  PokemonQueryVariables,
  PokemonsQuery,
  PokemonsQueryVariables,
} from "../../generated/graphql";

const POKEMONS = gql`
  query Pokemons {
    pokemons(first: 10) {
      id
      name
    }
  }
`;
const POKEMON = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      maxCP
      evolutions {
        id
        name
      }
      evolutionRequirements {
        amount
        name
      }
      maxHP
      image
    }
  }
`;

const fetchPokemon = async (name: string) =>
  pokemonClient.request<PokemonQuery, PokemonQueryVariables>(POKEMON, { name });

const PokemonDetail: NextPage<{ name: string }> = ({ name }) => {
  const { data } = useQuery(["getPokemon", name], () => fetchPokemon(name), {});
  return (
    <div className="">
      <h1 className="text-3xl">Hello from people!</h1>
      <div>{data?.pokemon?.name}</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context.params?.name as string;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["getPokemon", name], () =>
    fetchPokemon(name)
  );

  return {
    props: {
      name,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ name: string }> = async () => {
  const { pokemons } = await pokemonClient.request<
    PokemonsQuery,
    PokemonsQueryVariables
  >(POKEMONS);
  console.log(pokemons);
  return {
    fallback: "blocking",
    paths:
      pokemons?.map((pokemon) => ({
        params: { name: pokemon?.name?.toLowerCase() || "" },
      })) || [],
  };
};

export default PokemonDetail;
