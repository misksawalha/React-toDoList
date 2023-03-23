import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      toDo: []
    };
    this.setInput = this.setInput.bind(this);
    this.setToDo = this.setToDo.bind(this);
  }

  setInput(input) {
    this.setState({ input });
  }

  setToDo(toDo) {
    this.setState({ toDo });
  }

  render() {
    return (
      <>
        <div className='container'>
          <div className='app-wrapper'>
            <div>
              <Header />
            </div>
            <div>
              <Form
                input={this.state.input}
                setInput={this.setInput}
                toDo={this.state.toDo}
                setToDo={this.setToDo}
              />
            </div>
            <div>
              <ToDoList
                toDo={this.state.toDo}
                setToDo={this.setToDo}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
