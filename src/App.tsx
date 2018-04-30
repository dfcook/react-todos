import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Col, Row } from 'antd';
import './App.css';

import TodoList from './Todo/List/TodoList';
import AddTodo from './Todo/Add/AddTodo';
import { TodoStore } from './store/TodoStore';
import Todo from './types/Todo';

export interface AppProps {
  store: TodoStore;
}

@observer
class App extends Component<AppProps, {}> {
  // private readonly baseUrl = 'https://todobackend.apphb.com/todo-backend';

  render() {
    const store = this.props.store;

    const todos = store.filteredTodos;

    const addTodo = (title: string) => store.addTodo(title);
    const deleteTodo = (todo: Todo) =>  store.deleteTodo(todo);
    const updateFilter = (filter: string) =>  store.filter = filter;

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
            todosLoading={store.todosLoading}
            onDeleteTodo={deleteTodo}
            onUpdateFilter={updateFilter}
          />
        </Col>
      </Row>
    </div>
    );
  }
}

export default App;
