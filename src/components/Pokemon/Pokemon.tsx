import React from "react";
import { Pokemon as PokemomProps } from "../../generated/graphql";

interface Props {
  pokemon: PokemomProps;
}
export const Pokemon: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="">
      <h1 className="text-3xl">{pokemon?.name}</h1>
      <div>{JSON.stringify(pokemon)}</div>
    </div>
  );
};
