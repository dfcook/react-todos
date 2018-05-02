import React from 'react';
import { Button, Table } from 'antd';
import Todo from '../../../types/Todo';
import Footer from './Footer';
import { TodoContext } from '../../../TodoContext';

export default () => {
  return (
    <TodoContext.Consumer>
      {({loading, todos, filter, toggleTodo, deleteTodo}) => {
        const columns = [{
          key: 'complete',
          width: '10%',
          render: (text: string, record: Todo) => (
            <input type="checkbox" defaultChecked={record.completed} onClick={() => toggleTodo(record)} />
          )
        }, {
          key: 'title',
          title: 'Thing to do',
          render: (text: string, record: Todo) => (
            <span>
              <span style={{fontWeight: 'bold'}}>{record.order}.</span>
              <span className={record.completed ? 'completed' : 'active'}>{record.title}</span>
            </span>
          )
        }, {
          key: 'delete',
          width: '10%',
          render: (text: string, record: Todo) => (
            <span style={{width: '100%', textAlign: 'right'}} onClick={() => deleteTodo(record)}>
              <Button>Delete</Button>
            </span>
          )
        }];

        const filterTodos = () => {
          switch (filter) {
            case 'ACTIVE':
              return todos.filter(todo => !todo.completed);
            case 'COMPLETED':
              return todos.filter(todo => todo.completed);
            default:
              return todos;
          }
        };

        return (
          <Table
            rowKey={(record: Todo) => record.id.toString()}
            columns={columns}
            dataSource={filterTodos()}
            bordered={true}
            pagination={false}
            loading={loading}
            size="middle"
            footer={() => <Footer />}
          />
        );
      }}
    </TodoContext.Consumer>
  );
};
