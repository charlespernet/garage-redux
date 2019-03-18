import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class CarForm extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
        className="form-control"
        type={field.type}
        {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <Field
          label="Brand"
          name="brand"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Model"
          name="model"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Plate"
          name="plate"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Owner"
          name="owner"
          type="text"
          component={this.renderField}
        />

        <button className="btn btn-primary" type="submit"
        disabled={this.props.pristine || this.props.submitting}>
        Create Car
        </button>
      </form>
    )
  }
}

CarForm = reduxForm({
  // a unique name for the form
  form: 'CarForm'
})(CarForm)

export default CarForm;
