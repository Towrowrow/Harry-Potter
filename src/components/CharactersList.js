import React from "react";
import axios from "axios";
import Capitzalize from '../functions/Capitalize';

class CharactersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersList: "",
      show: false,
    }

  }
  componentDidMount() {
    this.getCharactersLists();
  }

  getCharactersLists() {
    axios.get(`http://hp-api.herokuapp.com/api/characters`)
      .then(response => (response.data))
      .then(data => this.setState({ charactersList: data }))
  };

  render() {
    return (
      <div>

        {this.state.charactersList
          &&
          this.state.charactersList.map((character, i) => {
            return (
              <div key={i}>
                <img src={character.image} alt={character.name} />
                <p>Nom :{character.name}</p>
                <p>Age : {2019 - Number(character.yearOfBirth)} ans</p>
                <p>Espèce : {character.species}</p>
                <p>Maison : {character.house}</p>
                <p>Genre : {character.gender}</p>
                <p>Ascendance : {character.ancestry}</p>
                <p>Baguette magique : {Capitzalize(character.wand.wood)}, {Capitzalize(character.wand.core)}, {Number(character.wand.length) * 2.54} cm</p>
                <p>Patronus : {Capitzalize(character.patronus)}</p>

                {/* <button onClick={() => this.setState({ show: true })}>See the starship</button>
                <SweetAlert
                  show={this.state.show}
                  title="STARSHIPS"
                  text={character.starships}
                  onConfirm={() => this.setState({ show: false })}
                /> */}


                <br />
              </div>
            )
          }
          )

        }


      </div>

    );

  }

}
export default CharactersList;