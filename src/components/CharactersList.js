import React from "react";
import axios from "axios";
import Capitzalize from '../functions/Capitalize';

class CharactersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersList: "",
      show: false,
      house: "gryffindor",
    }
    this.getCharactersLists = this.getCharactersLists.bind(this);
    this.chooseYourhouse = this.chooseYourhouse.bind(this);
  }

  chooseYourhouse(maison) {
    this.setState({ house: maison });
    this.getCharactersLists();
  }

  getCharactersLists() {

    axios.get(`http://hp-api.herokuapp.com/api/characters/house/${this.state.house}`)
      .then(response => (response.data))
      .then(data => this.setState({ charactersList: data }))
  };

  render() {


    return (
      <div>

        <img onClick={() => this.chooseYourhouse("gryffindor")} src="https://www.encyclopedie-hp.org/wp-content/uploads/sites/4/2016/08/shield_gry.gif" alt="gryffindor" />




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
                <p>Age : {2019 - Number(character.yearOfBirth)} ans</p>




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