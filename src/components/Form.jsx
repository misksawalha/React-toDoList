import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.props.setInput(event.target.value);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const newToDo = { id: uuidv4(), title: this.props.input, completed: false };
    this.props.setToDo([...this.props.toDo, newToDo]);
    this.props.setInput('');
  }

  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            className="task-input"
            value={this.props.input}
            required
            onChange={this.onInputChange}
          />
          <button className='button-add'>Add</button>
        </form>
      </>
    );
  }
}

export default Form;
