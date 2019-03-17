import React, { Component } from 'react';

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
      <div key={car.id}>
        <p>{car.brand}</p>
        <p>{car.model}</p>
      </div>
    )
  }

  render() {
    return this.props.cars.map(this.buildCar);
  }
}

export default CarsIndex;
