import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CarForm from '../components/car_form';
import { createCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    console.log(values)
    debugger;
    // this.props.createCar(values, (car) => {
    //   this.props.history.push('/'); // Navigate after submit
    //   return car;
    // });
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
        <div className="car-list">
          <div className="container-fluid">
            <CarForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsNew);
