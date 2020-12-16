import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

const PokemonCollection = (props) => {
  return (
    <Card.Group itemsPerRow={6}>
      {props.pokemon.map((poke) => (
        <PokemonCard key={poke.id} pokemon={poke} />
      ))}
    </Card.Group>
  );
};

export default PokemonCollection;
