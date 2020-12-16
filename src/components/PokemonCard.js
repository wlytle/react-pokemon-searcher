import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    showFront: true,
  };

  flipCard = () => {
    this.setState({
      showFront: !this.state.showFront,
    });
  };

  render() {
    const { hp, name, sprites } = this.props.pokemon;
    return (
      <Card>
        <div onClick={this.flipCard}>
          <div className="image">
            <img
              alt="oh no!"
              src={this.state.showFront ? sprites.front : sprites.back}
            />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
