import React from "react";
import type { NextPage } from "next";
import { useDebounce } from "use-debounce";
import { useQuery } from "react-query";
import { gql } from "graphql-request";
import { pokemonClient } from "../../utils/pokemon";
import { PokemonQuery, PokemonQueryVariables } from "../../generated/graphql";

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

const PokemonDetail: NextPage = () => {
  const { data } = useQuery(["searchPokemons"], () => fetchPokemon("pikachu"));
  return (
    <div className="">
      <h1 className="text-3xl">Hello from people!</h1>
      <div>{data?.pokemon?.name}</div>
    </div>
  );
};

export default PokemonDetail;
