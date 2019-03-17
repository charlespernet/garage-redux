import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  buildCar(car) {
    return(
      <div className='car' key={car.id}>
        <div className="car-img"></div>
        <div className="car-content">
          <p>{car.brand}</p>
          <p>{car.model}</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="cars-index">
        <div className="garage-presentation">
          <div className="garage-presentation-img"></div>
          <div className="garage-presentation-content">
            <h3>{this.props.garageName}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt mollitia perferendis consequuntur, delectus dolore ex nesciunt
              fugit ipsa quod repellendus! Cupiditate voluptas voluptatum quae consequuntur
              consectetur molestiae dolore consequatur veniam!
            </p>
          </div>
        </div>
        <div className="cars-list">
          {this.props.cars.map(this.buildCar)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    garageName: state.garageName,
    cars: state.cars
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
