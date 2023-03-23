import React, { Component } from 'react';

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.complete = this.complete.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  complete(item) {
    const updatedToDo = this.props.toDo.map((listItem) => {
      if (listItem.id === item.id) {
        console.log('misk');
        return { ...item, completed: !listItem.completed };
      }
      return listItem;
    });
    this.props.setToDo(updatedToDo);
  }

  deleteItem({ id }) {
    const updatedToDo = this.props.toDo.filter((item) => item.id !== id);
    this.props.setToDo(updatedToDo);
  }

  render() {
    return (
      <>
        {this.props.toDo.map((item) => (
          <li className="list-item" key={item.id}>
            <input
              type="text"
              value={item.title}
              className={`list ${item.completed ? 'complete' : ''}`}
              onClick={() => this.complete(item)}
              onChange={(event) => event.preventDefault()}
            />
            <button className="button-delete" onClick={() => this.deleteItem(item)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </li>
        ))}
      </>
    );
  }
}
