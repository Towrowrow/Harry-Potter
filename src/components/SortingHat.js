import React from 'react';
import getRandomHouse from '../functions/randomizer.js';
import SweetAlert from 'sweetalert2-react';

class SortingHat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      YourHouse: "",
      phrase: "",
      show: false
    }
  }

  sorting = () =>
    this.setState({
      show: true,
      YourHouse: getRandomHouse()
    })

  render() {

    return (
      <div>
        <img
          onClick={this.sorting}
          src="https://images.pottermore.com/bxd3o8b291gf/4KonItodO0UE44EYAySg46/24abcc9e548144d0c1be6e401d88281e/SortingHat_WB_F1_SortingHatAlone_Promo_100615_Land.jpg?w=1330&q=85"
          alt="Sorting hat"
        />
        <SweetAlert
          show={this.state.show}
          title="Felicitation tu es admis à "
          text={this.state.YourHouse}
          onConfirm={() => this.setState({ show: false })}
        />
      </div >
    );
  }



}

export default SortingHat;