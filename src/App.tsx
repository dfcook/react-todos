import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { Col, Row } from 'antd';
import './App.css';

import TodoList from './Todo/List/TodoListContainer';
import AddTodo from './Todo/Add/AddTodoContainer';
import Todo from './types/Todo';

import AppState from './store/AppState';

interface AppProps {
  filter: string;
  todos: Todo[];
}

class App extends Component<AppProps, {}> {
  // private readonly baseUrl = 'https://todobackend.apphb.com/todo-backend';

  render() {
    return (
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
    );
  }

  async refreshTodos() {
    /*this.setState({ todosLoading: true });
    const response = await axios.get<Todo[]>(this.baseUrl);
    this.setState({ todos: response.data, todosLoading: false });*/
  }

  async componentDidMount() {
    await this.refreshTodos();
  }
}

const mapStateToProps = ({ todos, filter }: AppState) => {
  return {
    filter,
    todos
  };
};

export default connect(mapStateToProps)(App);
