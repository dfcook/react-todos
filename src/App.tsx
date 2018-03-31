import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row } from 'antd';
import './App.css';

import TodoList from './Todo/List/TodoList';
import AddTodo from './Todo/Add/AddTodo';
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

  private readonly baseUrl = 'https://todobackend.apphb.com/todo-backend';

  render() {
    const todos = this.getTodos();
    const addTodo = this.addTodo.bind(this);
    const deleteTodo = this.deleteTodo.bind(this);
    const toggleTodo = this.toggleTodo.bind(this);
    const updateFilter = this.updateFilter.bind(this);

    return (
    <div>
      <Row type="flex" justify="center" align="top">
        <Col span={24}>
          <header className="my-2"><h1>Things To Do</h1></header>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <AddTodo onNewTodo={addTodo} />
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <TodoList
            todos={todos}
            todosLoading={this.state.todosLoading}
            onDeleteTodo={deleteTodo}
            onToggleTodo={toggleTodo}
            onUpdateFilter={updateFilter}
          />
        </Col>
      </Row>
    </div>
    );
  }

  getTodos() {
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

  updateFilter(filter: string) {
    this.setState({
      filter
    });
  }

  async addTodo(title: string) {
    const response = await axios.post<Todo>(this.baseUrl, {
      title,
      completed: false
    });

    this.setState({
      todos: [ ...this.state.todos, response.data ]
    });
  }

  async refreshTodos() {
    this.setState({ todosLoading: true });
    const response = await axios.get<Todo[]>(this.baseUrl);
    this.setState({ todos: response.data, todosLoading: false });
  }

  async deleteTodo(todo: Todo) {
    await axios.delete(todo.url);

    this.setState({
      todos: this.state.todos.filter(t => todo.id !== t.id)
    });
  }

  async toggleTodo(todo: Todo) {
    const updated = {
      ...todo,
      completed: !todo.completed
    };

    await axios.patch(updated.url, updated);

    this.setState({
      todos: this.state.todos.map(t => todo.id === t.id ? updated : t)
    });
  }

  async componentDidMount() {
    await this.refreshTodos();
  }
}

export default App;
