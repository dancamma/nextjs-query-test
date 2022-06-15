import { GraphQLClient } from "graphql-request";

const ENDPOINT = "https://graphql-pokemon2.vercel.app/";

export const pokemonClient = new GraphQLClient(ENDPOINT);
