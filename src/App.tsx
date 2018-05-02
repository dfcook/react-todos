import React, { Component } from 'react';
import api from './api';
import { Col, Row } from 'antd';
import './App.css';

import TodoList from './components/Todo/List/TodoList';
import AddTodo from './components/Todo/Add/AddTodo';
import Todo from './types/Todo';
import { AppState, TodoContext } from './TodoContext';

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      filter: 'ALL',
      loading: false,
      todos: [],
      updateFilter: this.updateFilter,
      addTodo: this.addTodo,
      toggleTodo: this.toggleTodo,
      deleteTodo: this.deleteTodo
    };
  }

  render() {
    return (
      <TodoContext.Provider value={this.state}>
        <div>
          <Row type="flex" justify="center" align="top">
            <Col span={24}>
              <header className="my-2"><h1>Things To Do</h1></header>
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              <AddTodo />
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              <TodoList />
            </Col>
          </Row>
        </div>
      </TodoContext.Provider>
    );
  }

  updateFilter = (filter: string) => {
    this.setState({
      filter
    });
  }

  addTodo = async (title: string) => {
    const response = await api.add(title);

    this.setState({
      todos: [ ...this.state.todos, response.data ]
    });
  }

  refreshTodos = async () => {
    try {
      this.setState({ loading: true });
      const response = await api.fetch();
      this.setState({ todos: response.data });
    } finally {
      this.setState({ loading: false });
    }
  }

  deleteTodo = async (todo: Todo) => {
    await api.delete(todo);

    this.setState({
      todos: this.state.todos.filter(t => todo.id !== t.id)
    });
  }

  toggleTodo = async (todo: Todo) => {
    const updated = await api.update({
      ...todo,
      completed: !todo.completed
    });

    this.setState({
      todos: this.state.todos.map(t => todo.id === t.id ? updated.data : t)
    });
  }

  async componentDidMount() {
    await this.refreshTodos();
  }
}

export default App;
