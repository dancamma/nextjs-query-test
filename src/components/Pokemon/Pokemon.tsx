import { gql } from "graphql-request";
import React from "react";
import { useQuery } from "react-query";
import { PokemonQuery, PokemonQueryVariables } from "../../generated/graphql";
import { pokemonClient } from "../../utils/pokemon";

interface Props {
  name: string;
}

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

const fetchPokemon = async (name: string) => {
  console.log("Fetching pokemon...", name);
  return pokemonClient.request<PokemonQuery, PokemonQueryVariables>(POKEMON, {
    name,
  });
};

export const Pokemon: React.FC<Props> = ({ name }) => {
  const { data } = useQuery(["getPokemon", name], () => fetchPokemon(name));

  return (
    <div className="">
      <h1 className="text-3xl">{data?.pokemon?.name}</h1>
      <div>{JSON.stringify(data?.pokemon)}</div>
    </div>
  );
};
