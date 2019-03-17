import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarsIndex extends Component {
  static defaultProps = {
    cars: [
      { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
      { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
      { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
      { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
    ]
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
    garageName: state.garageName
  }
}

export default connect()(CarsIndex);
