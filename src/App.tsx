import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import './App.css';

import TodoList from './containers/Todo/List/TodoListContainer';
import AddTodo from './containers/Todo/Add/AddTodoContainer';
import Todo from './types/Todo';

import AppState from './store/AppState';
import { bindActionCreators } from 'redux';
import Dispatch from './store/dispatch';
import { loadTodos } from './store/actions';

interface AppProps {
  loadTodos: () => void;
  filter: string;
  todos: Todo[];
}

class App extends Component<AppProps, {}> {
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
    this.props.loadTodos();
  }

  componentDidMount() {
    this.refreshTodos();
  }
}

const mapStateToProps = ({ todos, filter }: AppState) => {
  return {
    filter,
    todos
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadTodos: bindActionCreators(loadTodos, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App as any);
