import React, { Component } from 'react';
import { Col, Row } from 'antd';
import './App.css';

import TodoList from './containers/Todo/List/TodoListContainer';
import AddTodo from './containers/Todo/Add/AddTodoContainer';
import Dispatch from './store/dispatch';
import { bindActionCreators } from 'redux';
import { todosFetchAction } from './store/actions';
import { connect } from 'react-redux';

interface AppProps {  
  fetchTodos: () => void;  
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
 
  refreshTodos = async () => {
    this.props.fetchTodos();
  }
  
  async componentDidMount() {
    await this.refreshTodos();
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({  
  fetchTodos: bindActionCreators(todosFetchAction, dispatch)
});

export default connect(null, mapDispatchToProps)(App as any);
