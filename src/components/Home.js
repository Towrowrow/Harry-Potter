import React from "react";
import CharactersList from "./CharactersList"
import SortingHat from "./SortingHat";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    }

  }
  render() {
    return (
      <div>
        <SortingHat />
        <CharactersList />
      </div>

    );

  }

}
export default Home;