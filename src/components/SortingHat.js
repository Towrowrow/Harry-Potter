import React from 'react';
import randomizer from '../functions/randomizer.js'

class SortingHat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      YourHouse: "",
      phrase: ""
    }
  }

  onClickHat(e) {
    this.setState({
      YourHouse: randomizer(),
      phrase: `Félicitations tu es un ${this.state.YourHouse}`
    });
  }

  render() {
    return (
      <div>
        <img
          onClick={this.onClickHat}
          src="https://images.pottermore.com/bxd3o8b291gf/4KonItodO0UE44EYAySg46/24abcc9e548144d0c1be6e401d88281e/SortingHat_WB_F1_SortingHatAlone_Promo_100615_Land.jpg?w=1330&q=85"
          alt="Sorting hat"
        />
        <p>Félicitations tu es un {this.onClickHat}</p>
      </div>
    );
  }



}

export default SortingHat;