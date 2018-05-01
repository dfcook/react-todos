import React, { Component } from 'react';
import api from './api';
import { Col, Row } from 'antd';
import './App.css';

import TodoList from './components/Todo/List/TodoList';
import AddTodo from './components/Todo/Add/AddTodo';
import Todo from './types/Todo';

interface AppState {
  filter: string;
  todosLoading: boolean;
  todos: Todo[];
}

class App extends Component<{}, AppState> {
  state: AppState = {
    filter: 'ALL',
    todosLoading: false,
    todos: []
  };

  render() {
    const todos = this.getTodos();

    return (
    <div>
      <Row type="flex" justify="center" align="top">
        <Col span={24}>
          <header className="my-2"><h1>Things To Do</h1></header>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <AddTodo onNewTodo={this.addTodo} />
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <TodoList
            todos={todos}
            todosLoading={this.state.todosLoading}
            onDeleteTodo={this.deleteTodo}
            onToggleTodo={this.toggleTodo}
            onUpdateFilter={this.updateFilter}
          />
        </Col>
      </Row>
    </div>
    );
  }

  getTodos = () => {
    const { filter, todos } = this.state;

    switch (filter) {
      case 'ACTIVE':
        return todos.filter(todo => !todo.completed);
      case 'COMPLETED':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
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
      this.setState({ todosLoading: true });
      const response = await api.fetch();
      this.setState({ todos: response.data });
    } finally {
      this.setState({ todosLoading: false });
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
