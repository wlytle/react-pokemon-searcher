import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    query: "",
  };

  getQuery = ({ target }) => {
    this.setState({
      query: target.value,
    });
  };

  makePokemon = ({ target }) => {
    const configObj = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: target.name.value,
        hp: target.hp.value,
        sprites: {
          front: target.frontUrl.value,
          back: target.backUrl.value,
        },
      }),
    };
    fetch("http://localhost:3000/pokemon", configObj)
      .then((resp) => resp.json())
      .then((poke) => {
        this.setState({
          pokemon: [...this.state.pokemon, poke],
        });
      });
  };

  render() {
    const searchedPokemon = this.state.pokemon.filter((poke) =>
      poke.name.match(this.state.query)
    );

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm makePokemon={this.makePokemon} />
        <br />
        <Search getQuery={this.getQuery} query={this.state.query} />
        <br />
        <PokemonCollection pokemon={searchedPokemon} />
      </Container>
    );
  }
  async componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then((resp) => resp.json())
      .then((pokemon) => {
        this.setState({
          pokemon,
        });
      });
  }
}

export default PokemonPage;
