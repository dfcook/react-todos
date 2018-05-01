import React from 'react';
import { Button, Table } from 'antd';
import Todo from '../../../types/Todo';
import Footer from './Footer';

interface TodoListProps {
  filter: string;
  loading: boolean;
  todos: Todo[];
  toggleTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
  updateFilter: (filter: string) => void;
}

export default ({ filter, loading, todos, toggleTodo, deleteTodo, updateFilter }: TodoListProps) => {
  const getTodos = () => {
    switch (filter) {
      case 'ACTIVE':
        return todos.filter(todo => !todo.completed);
      case 'COMPLETED':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

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

  return (
    <Table
      rowKey={(record: Todo) => record.id.toString()}
      columns={columns}
      dataSource={getTodos()}
      bordered={true}
      pagination={false}
      loading={loading}
      size="middle"
      footer={() => <Footer todos={todos} currentFilter={filter} updateFilter={updateFilter} />}
    />
  );
};
